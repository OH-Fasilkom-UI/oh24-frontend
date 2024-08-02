import React from 'react'
import DetailForm from './sections/DetailForm'
import bg from '@/public/wave-notfound.png'
import Image from 'next/image'

export const DetailFormModule = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-grow flex flex-col pb-[262px] lg:pb-[700px] md:pb-[412px]">
        <div className="flex max-md:mt-[121px] max-md:gap-x-[7px] md:gap-x-[32px] font-tex-gyre font-bold items-center justify-center mx-auto md:mt-[182px] max-md:text-[15px] max-md:whitespace-nowrap max-md:w-[60px] md:text-[36px] leading-[40px] text-Text/TextLightBG">
          <Image src="/panda-detail.png" alt="panda" width={80} height={67} />
          <h1 className="justify-center font-riffic tracking-wider leading-[40px]">
            Lengkapi Data Dirimu!
          </h1>
        </div>
        <div className="relative flex-grow overflow-hidden">
          <Image
            src="/kereta-terbang.png"
            alt="kereta"
            width={310}
            height={250}
            className="absolute max-md:top-1/2 max-lg:top-[530px] top-0 right-0 max-md:w-[200px] max-md:h-auto max-lg:translate-x-1/4 md:w-[300px] md:h-[240px]"
          />
          <div className="mt-[43px] z-100 max-md:px-[20px] md:px-[30px] lg:px-[123px] mb-10">
            <DetailForm />
          </div>
        </div>
      </div>
    </div>
  )
}
