'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const Calendly = () => {
  const [showFinalize, setShowFinalize] = useState(false)
  return (
    <section className="flex lg:flex-row flex-col lg:gap-[90px] gap-8 justify-center items-center lg:items-start py-[10vh]">
      <div className="relative lg:w-[270px] lg:h-[343px] w-[135px] h-[172px]">
        <Image
          alt="Panda Dengan Medali"
          src="/PandaMedali.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-12 lg:gap-[64px]">
        <div className='flex flex-col max-lg:items-center max-lg:text-center'>
          <h2 className="text-Text/TextLightBG text-[20px] lg:text-[30px] font-bold font-riffic tracking-wider">
            Satu Langkah Lagi
          </h2>
          <h1 className="text-Text/TextLightBG text-[30px] lg:text-[48px] font-bold font-riffic tracking-wider lg:pt-4 pt-2 lg:pb-8 pb-4">
            Pilih Tanggal <br className='lg:hidden'/> Interview
          </h1>
          <Link href="https://cl.gy/XWop" target="_blank">
            <Button variant={'secondary'} onClick={() => setShowFinalize(true)}>
              Open Calendly
            </Button>
          </Link>
        </div>
        <div className={`${!showFinalize && 'hidden'} flex flex-col max-lg:items-center max-lg:text-center gap-4 lg:gap-8`}>
          <h2 className="text-Text/TextLightBG text-[20px] lg:text-[30px] font-bold font-riffic tracking-wider">
            Sudah yakin dengan isianmu?
          </h2>
          <Button onClick={() => {console.log("test")}}>Finalize</Button>
        </div>
      </div>
    </section>
  )
}