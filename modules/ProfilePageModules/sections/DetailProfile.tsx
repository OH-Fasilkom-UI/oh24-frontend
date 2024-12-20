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
import { formatPersonalData, updateMyPersonalData } from '@/lib/api/user'
import { Pencil } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import { PandaImages } from '../constant'

interface FieldProps {
  label: string
  values?: string[] | null
  link?: boolean
}

const Field = ({ label, values = [''], link }: FieldProps) => {
  return (
    <div className="text-Text/TextLightBG flex flex-col gap-1 max-md:items-center max-md:text-center">
      <p className="text-lg font-bold max-md:w-[80%]">{label}</p>
      {values?.map((value) => (
        <>
          {link ? (
            <Link className="text-md font-normal break-all" href={value}>
              {value}
            </Link>
          ) : (
            <p className="text-md font-normal break-all">{value}</p>
          )}
        </>
      ))}
    </div>
  )
}

export const DetailProfile = () => {
  const qrCodeSmallRef = useRef<HTMLDivElement>(null)
  const { userData, isLoading } = useUserData({ personal: true, ticket: true })
  const [profilePict, setProfilePictSrc] = useState<number>(0)
  const [popOpen, popClose] = useState(false)

  const personalData = useMemo(
    () => formatPersonalData(userData?.personal),
    [userData]
  )

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

  const leadersString =
    userData?.ticket?.group?.leaders.length == 0
      ? ['Belum ada']
      : userData?.ticket?.group?.leaders.map(
          (leader: string, index: number) => `${index + 1}. ${leader}`
        )

  const handleScrollToQRCode = () => {
    if (typeof window !== 'undefined' && qrCodeSmallRef.current) {
      const offset = 250
      const elementPosition =
        qrCodeSmallRef.current.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const isScannedBefore = userData?.ticket?.present ?? false;

  return (
    <div className="pt-[10rem] min-[1920px]:pt-[10rem] mb-10 flex flex-col md:px-[120px] xl:px-[190px] py-10 max-md:pb-96 justify-center items-center md:items-start md:justify-start gap-[35px]">
      <div className='fixed bottom-0 w-[100vw] flex justify-center z-50 animate-bounce'>
        <div
          className='font-bold px-4 md:px-5 py-3 md:py-1.5 rounded-full border-4 bg-white max-w-[400px] text-center
      border-PurpleRegion/TrueV/700 hover:border-PurpleRegion/BlueViolet/500 data-[selected=true]:border-PurpleRegion/BlueViolet/500
      text-PurpleRegion/TrueV/700 hover:text-PurpleRegion/BlueViolet/500'
        >
          Jangan Lupa Refresh QR Code sebelum Main event yak! 😄
        </div>
      </div>
      <h1 className="text-[36px] text-[#2E3881] font-bold font-riffic tracking-[0.075rem]">
        Profile
      </h1>
      <div className="flex flex-col max-md:justify-center max-md:items-center md:flex-row md:gap-[108px]">
        <div className="flex flex-col items-center max-md:pb-10">
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

          {userData?.ticket ? (
            userData?.ticket?.eventName.startsWith('FULL') && (
              <Button
                className="mt-6 block md:hidden bg-BlueRegion/Portgage/600"
                onClick={handleScrollToQRCode}
              >
                See QR Code
              </Button>
            )
          ) : (
            <Link href="/register">
              <Button className="max-w-36" disabled>
                Registrasi Peserta
              </Button>
            </Link>
          )}

          {userData?.ticket?.eventName.startsWith('FULL') && (
            <div className="mt-6 max-md:hidden flex flex-col items-center">
              <QRCode
                value={userData?.ticket.id ?? 'oh24'}
                size={300}
                className="shadow-lg bg-white p-3 rounded-md"
              />
              <p className="font-bold text-center mt-5 max-w-[300px]">
                {isScannedBefore ? "Kamu telah terdaftar untuk mengikuti Main Event!" : "Scan saat Main Event!"}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col md:w-1/2 w-full">
          <div className="grid lg:grid-cols-2 md:gap-x-[188px] lg:gap-x-[50px] gap-y-6">
            <Field label="Nama Lengkap" values={[personalData?.fullName!]} />
            <Field label="Email" values={[userData?.email!]} />
            <Field label="Domisili" values={['Indonesia']} />
            <Field label="WhatsApp" values={[personalData?.phone!]} />
            <Field label="Tanggal Lahir" values={[personalData?.dob!]} />
            <Field label="Kelas" values={[personalData?.class!]} />
            <Field label="Asal Sekolah" values={[personalData?.school!]} />
            <Field
              label="Nomor Telepon Orang Tua"
              values={[personalData?.parentPhone!]}
            />
          </div>
          {userData?.ticket && (
            <>
              <div className="mt-6 grid lg:grid-cols-2 md:gap-x-[188px] lg:gap-x-[50px] gap-y-6">
                <Field
                  label="Event yang Diikuti"
                  values={[
                    (() => {
                      switch (userData.ticket.eventName) {
                        case 'FULL_EXPERIENCE_1':
                          return 'Full Experience Pagi'
                        case 'FULL_EXPERIENCE_2':
                          return 'Full Experience Siang'
                        case 'ONLINE_EXPERIENCE':
                          return 'Online Experience'
                        default:
                          return ''
                      }
                    })(),
                  ]}
                />
                <Field label="Nama Mentor CS Connect" values={leadersString} />
                <Field
                  label="Link Grup WhatsApp Mentoring CS Connect"
                  values={[userData?.ticket?.group?.linkWA || 'Belum ada']}
                  link
                />
                {userData?.ticket.rombel && (
                  <>
                    <Field
                      label="Link Grup WhatsApp Rombel Main Event"
                      values={[userData?.ticket?.rombel?.linkWA || 'Belum ada']}
                      link
                    />
                    <Field
                      label="Rombel"
                      values={[userData?.ticket?.rombel?.name || 'Belum ada']}
                      link
                    />
                  </>
                )}
              </div>

              {userData?.ticket?.eventName?.startsWith('FULL') && (
                <div
                  className="flex flex-col items-center gap-3.5 mt-8 md:hidden"
                  ref={qrCodeSmallRef}
                >
                  <QRCode
                    value={userData?.ticket?.id ?? 'oh24'}
                    size={150}
                    className="shadow-lg bg-white p-3 rounded-md"
                  />
                  <p className="font-bold text-center">
                    {isScannedBefore ? "Kamu telah terdaftar untuk mengikuti Main Event!" : "Scan saat Main Event!"}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
