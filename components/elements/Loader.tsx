import React from 'react'
import Image from 'next/image'

export const Loader = () => {
  return (
    <div className='h-screen flex justify-center'>
      <div className="flex flex-col gap-9 p-4 h-[250px] mt-[20vh] animate-pulse rounded-[32px] bg-Misc/ShuttleGray/700/20">
        <div className="relative w-[220px] h-[194px]">
          <Image
            alt="contoh"
            src="/oh-logo-no-text.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <h1 className="text-[30px] text-center font-riffic text-Text/TextLightBG font-bold">
          Loading ...
        </h1>
      </div>
    </div>
  )
}
