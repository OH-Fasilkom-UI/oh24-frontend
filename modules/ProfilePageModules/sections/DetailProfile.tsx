'use client'

import { Avatar, AvatarImage } from '@/components/ui/Avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useUserData } from '@/hooks/user'
import { Pencil } from 'lucide-react'
import { PandaImages } from '../constant'

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
  const { userData, isLoading } = useUserData({ personal: true })

  if (isLoading) {
    return 'loading...' // TODO: change this
  }

  const handleProfileChange = (src: string) => {}

  return (
    <div className="pt-[20vh] mb-[50vh] flex flex-col md:px-[120px] xl:px-[190px] py-10 max-md:pb-20 justify-center items-center md:items-start md:justify-start gap-[35px]">
      <h1 className="text-[36px] text-[#2E3881] font-bold font-riffic tracking-[0.075rem]">
        Profile
      </h1>
      <div className="flex flex-col max-md:justify-center max-md:items-center md:flex-row md:gap-[108px]">
        <div className="flex flex-col items-end">
          <Avatar className="w-[216px] h-[216px]">
            <AvatarImage src="/Profile/cowo1.png" />
          </Avatar>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="p-5 max-md:hidden -translate-y-16 bg-[#5E31A6] text-[#E0ECFF] rounded-full">
                <Pencil className="w-10 h-10" />
              </TooltipTrigger>
              <TooltipContent
                icon={false}
                side={'right'}
                className="flex flex-col"
              >
                <h1 className="text-[#2E3881] text-[16px] font-tex-gyre font-bold mb-3">
                  Choose Your Panda!
                </h1>
                <div className="flex flex-row gap-[34px]">
                  {PandaImages.map((item) => (
                    <Avatar
                      onClick={() => handleProfileChange(item.src)}
                      key={item.alt}
                      className="w-[108px] h-[108px] cursor-pointer"
                    >
                      <AvatarImage src={item.src} />
                    </Avatar>
                  ))}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Popover>
            <PopoverTrigger className="p-5 md:hidden -translate-y-16 bg-[#5E31A6] text-[#E0ECFF] rounded-full">
              <Pencil className="w-10 h-10" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center justify-center w-full">
              <h1 className="text-[#2E3881] text-[16px] font-tex-gyre font-bold mb-3">
                Choose Your Panda!
              </h1>
              <div className="flex flex-col items-center gap-[34px]">
                {PandaImages.map((item) => (
                  <Avatar
                    onClick={() => handleProfileChange(item.src)}
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
      </div>
    </div>
  )
}
