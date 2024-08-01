import React from 'react'
import DetailForm from './sections/DetailForm'
import Image from 'next/image'

export const DetailFormModule = () => {
  return (
    <main className="flex flex-col">
      <div className="flex max-md:gap-x-[7px] md:gap-x-[32px] font-tex-gyre font-bold items-center justify-center mx-auto mt-[86px] max-md:text-[15px] max-md:whitespace-nowrap max-md:w-[60px]  md:text-[36px] leading-[40x] text-Text/TextLightBG">
        <Image src="/panda-detail.png" alt="panda" width={80} height={67} />
        <h1 className="justify-center">Lengkapi Data Dirimu!</h1>
      </div>
      <div className="mt-[43px] max-md:px-[20px] md:px-[123px]">
        <DetailForm />
      </div>
    </main>
  )
}
