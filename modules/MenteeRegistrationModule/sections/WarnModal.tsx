'use client'

import { Loader } from '@/components/elements/Loader'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'
import { useUserData } from '@/hooks/user'
import { AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export const WarnModal = ({ onClick }: { onClick: () => void }) => {
  const { userData, isLoading } = useUserData({ personal: true })

  if (isLoading) {
    return <Loader />
  }

  if (userData?.hasTicket && userData.hasQuestionnaire) {
    toast.info('Kamu sudah mendaftar menjadi mentee')
    redirect('/profile')
  }

  return (
    <div className="relative">
      <div className="md:rounded-[24px] rounded-[18px] flex flex-col mx-4 px-8 py-9 bg-[#F0F8FF]">
        <div className="max-md:mx-auto">
          <AlertTriangle size={48} className="text-Text/TextLightBG" />
        </div>
        <p className="text-Text/TextLightBG sm:font-bold font-normal max-md:text-center my-2">
          Harap mengisi kuesioner dengan serius karena akan memengaruhi step
          selanjutnya.
        </p>
        <div className="flex justify-end max-sm:mx-auto">
          <Button className="mt-4" onClick={onClick}>
            Next
          </Button>
        </div>
      </div>
      <div className="absolute w-[304px] h-[304px] max-[400px]:w-[240px] -top-[140px] -right-[55px] max-[400px]:-right-[20px] md:hidden animate-spin -z-10">
        <Image
          alt="contoh"
          src="/Circular.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="absolute max-lg:w-[400px] max-md:w-[300px] max-[350px]:hidden  w-[500px] h-[400px] lg:-right-[120px] md:-right-[23px] max-md:-right-[75px] top-[220px] md:top-[120px] -z-10 animate-float-vertical">
        <Image
          alt="contoh"
          src="/Whooshhh.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  )
}
