'use client'

import { Loader } from '@/components/elements/Loader'
import { Avatar, AvatarImage } from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useUserData } from '@/hooks/user'
import { updateMyPersonalData } from '@/lib/api/user'
import { Pencil, SquarePen } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { PandaImages } from '../constant'
import QRCode from "react-qr-code";

interface FieldProps {
  label: string
  value?: string | null
}

const Field = ({ label, value = '' }: FieldProps) => {
  return (
    <div className="text-Text/TextLightBG flex flex-col gap-1 max-md:text-center">
      <p className="text-lg font-bold">{label}</p>
      <p className="text-md font-normal">{value}</p>
    </div>
  )
}

export const DetailProfile = () => {
  const { userData, isLoading } = useUserData({ personal: true, ticket: true })
  const [profilePict, setProfilePictSrc] = useState<number>(0)
  const [popOpen, popClose] = useState(false)

  useEffect(() => {
    setProfilePictSrc(userData?.personal.profilePic ?? 0)
  }, [userData])

  const handleProfileChange = async (id: number) => {
    setProfilePictSrc(id)

    const res = await updateMyPersonalData({
      profilePic: id,
    })

    if (!res.ok) {
      return toast.error('Gagal mengganti foto profil')
    }

    toast.success('Berhasil mengganti foto profil')
  }

  if (isLoading) {
    return <Loader />
  }

  const leadersString = userData?.ticket?.group?.leaders
    ?.map((leader, index) => `${index + 1}. ${leader}`)
    .join('<br>');


  const qrCodeSmallRef = useRef<HTMLDivElement>(null)
  const handleScrollToQRCode = () => {
    if (typeof window !== 'undefined') {
      qrCodeSmallRef.current?.scrollIntoView({ behavior: 'smooth' })

    }
  }
  const qrCodeValue = 'oh24'

  return (
    <div className="pt-[10rem] min-[1920px]:pt-[10rem] mb-10 flex flex-col md:px-[120px] xl:px-[190px] py-10 max-md:pb-96 justify-center items-center md:items-start md:justify-start gap-[35px]">
      <h1 className="text-[36px] text-[#2E3881] font-bold font-riffic tracking-[0.075rem]">
        Profile
      </h1>
      <div className="flex flex-col max-md:justify-center max-md:items-center md:flex-row md:gap-[108px]">
        <div className='flex flex-col items-center max-md:pb-10'>
          <div className="flex flex-col items-end">
            <Avatar className="w-[216px] h-[216px]">
              <AvatarImage src={PandaImages[profilePict].src} />
            </Avatar>
            <Popover open={popOpen} onOpenChange={popClose}>
              <PopoverTrigger className="p-5 max-md:hidden -translate-y-16 bg-[#5E31A6] text-[#E0ECFF] rounded-full">
                <Pencil className="w-10 h-10 z-50" />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col w-fit" side={'right'}>
                <h1 className="text-[#2E3881] text-[16px] font-tex-gyre font-bold mb-3">
                  Choose Your Panda!
                </h1>
                <div className="flex flex-row gap-[34px] w-fit">
                  {PandaImages.map((item, index) => (
                    <Avatar
                      onClick={() => {
                        handleProfileChange(index)
                        popClose(false)
                      }}
                      key={item.alt}
                      className="w-[108px] h-[108px] cursor-pointer"
                    >
                      <AvatarImage src={item.src} />
                    </Avatar>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="p-5 md:hidden -translate-y-16 bg-[#5E31A6] text-[#E0ECFF] rounded-full">
                <Pencil className="w-10 h-10 z-50" />
              </PopoverTrigger>
              <PopoverContent
                className="absolute w-fit p-8 flex flex-col items-center justify-center translate-y-[60px] -translate-x-[100px]"
                side="left"
              >
                <h1 className="text-[#2E3881] text-[16px] font-tex-gyre font-bold mb-3">
                  Choose Your Panda!
                </h1>
                <div className="flex flex-col items-center gap-[34px]">
                  {PandaImages.map((item, index) => (
                    <Avatar
                      onClick={() => handleProfileChange(index)}
                      key={item.alt}
                      className="w-[108px] h-[108px] cursor-pointer"
                    >
                      <AvatarImage src={item.src} />
                    </Avatar>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {
            userData?.ticket &&
            (<Button className="mt-6 block lg:hidden bg-BlueRegion/Portage/600" onClick={handleScrollToQRCode}>
              See QR Code
            </Button>)
          }

          {userData?.ticket && (
            <div className="mt-6 max-lg:hidden">
              <QRCode
                value={userData?.ticket.userId ?? 'oh24'}
                size={300}
                className="shadow-lg bg-white p-3 rounded-md"
              />
            </div>
          )}

          {userData?.hasAmbassadorForm ?
            <p className='text-Text/TextLightBG text-lg font-bold max-w-44 text-center'>You have registered as an ambassador</p>
            :
            <Link href="/ambassador/register">
              <Button>
                <SquarePen className="max-md:text-[12px]" />
                Register Ambassador
              </Button>
            </Link>
          }
        </div>
        <div className="flex flex-col md:w-1/2 w-full">
          <div className="grid lg:grid-cols-2 md:gap-x-[188px] lg:gap-x-[50px] gap-y-6">
            <Field label="Nama Lengkap" value={userData?.personal?.fullName} />
            <Field label="Email" value={userData?.email} />
            <Field label="Domisili" value={userData?.personal?.domicile} />
            <Field label="WhatsApp" value={userData?.personal?.phone} />
            <Field label="Tanggal Lahir" value={userData?.personal?.dob} />
            <Field label="Kelas" value={userData?.personal?.class} />
            <Field label="Asal Sekolah" value={userData?.personal?.school} />
            <Field
              label="Nomor Telepon Orang Tua"
              value={userData?.personal?.parentPhone}
            />
          </div>
          {userData?.ticket && (
            <>
              <div className="mt-8 grid lg:grid-cols-2 md:gap-x-[188px] lg:gap-x-[50px] gap-y-6">
                <Field
                  label="Nama Mentor CS Connect"
                  value={leadersString}
                />
                <Field
                  label="Link Grup WhatsApp Mentoring CSConnect"
                  value={userData?.ticket?.group?.linkWA}
                />
                <Field
                  label="Link Grup WhatsApp Rombel Main Event"
                  value={userData?.ticket?.rombel?.linkWA}
                />
              </div>

              {userData?.ticket?.userId && (
                <div className="mt-8 lg:hidden" ref={qrCodeSmallRef}>
                  <QRCode
                    value={userData?.ticket?.userId ?? 'oh24'}
                    size={150}
                    className="shadow-lg bg-white p-3 rounded-md"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
