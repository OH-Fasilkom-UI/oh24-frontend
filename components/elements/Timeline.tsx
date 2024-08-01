'use client'
import React, { useState } from 'react'
import bg from '@/public/timeline.png'
import { timelineData } from './Timeline.data'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'

export const Timeline = () => {
  const [showDescription, setShowDescription] = useState<null | number>(null)
  const translateStyle = [
    'xl:-translate-y-40 -translate-y-44',
    'xl:-translate-y-14 translate-x-5 -translate-y-24',
    'xl:-translate-y-8 xl:translate-x-24 -translate-y-20 translate-x-8',
    'xl:translate-y-36 xk:-translate-x-8 -translate-x-12 translate-y-28',
    'xl:translate-x-32 translate-x-28 translate-y-36 xl:translate-y-44',
  ]
  return (
    <div>
      {/* DESKTOP */}
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="2xl:w-[1280px] max-lg:hidden 2xl:h-[1020px] xl:w-[900px] xl:h-[740px] lg:w-[760px] lg:h-[600px] grid grid-cols-3 mt-40"
      >
        {timelineData.map((data, index) => (
          <div
            key={index}
            className={`p-5  ${index === timelineData.length - 1 && 'col-span-2 justify-center items-center flex'}`}
          >
            <div
              onMouseLeave={() => setShowDescription(null)}
              onMouseEnter={() => setShowDescription(index)}
              className={`${translateStyle[index]} 2xl:max-h-[380px] xl:max-h-[440px] absolute shadow-timeline text-center transition-all bg-[#2E3881E5] 
              ${showDescription === index ? (index === 2 ? 'max-w-[320px] z-10 2xl:max-w-[480px] xl:max-w-[420px]' : 'max-w-[360px] z-10 2xl:max-w-[480px] xl:max-w-[420px]') : showDescription !== null ? 'opacity-0' : 'lg:w-[200px] xl:w-[285px]'}
              flex flex-col rounded-[32px] gap-5 justify-center items-center py-[44px] px-[42px]`}
            >
              <h1 className="text-[#E1F0FD] tracking-[0.075rem] font-bold text-xl xl:text-2xl font-riffic">
                {data.title}
              </h1>
              <p className="text-[#E1F0FD] text-[16px] xl:text-[20px] font-normal font-tex-gyre">
                {showDescription === index ? data.description : data.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* MOBILE */}
      <div className="lg:hidden flex flex-col gap-[66px] justify-center items-center">
        {timelineData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Dialog>
              <DialogTrigger className="z-10">
                <div className="flex flex-col gap-3 mb-[66px] w-[203px] whitespace-nowrap shadow-timeline bg-[#2E3881E5] text-center justify-center items-center px-6 py-7 rounded-[32px]">
                  <h1 className="text-[#E1F0FD] tracking-[0.075rem] font-bold font-riffic">
                    {data.title}
                  </h1>
                  <p className="text-[#E1F0FD] text-[12px] font-normal font-tex-gyre">
                    {data.date}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-[#2E3881E5] border-0 w-[216px] flex flex-col gap-4 shadow-timeline py-12 px-6 rounded-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-[#E1F0FD] tracking-[0.075rem] text-[16px] font-bold font-riffic">
                    {data.title}
                  </DialogTitle>
                  <DialogDescription className="text-[#E1F0FD] text-start text-[12px] font-normal font-tex-gyre">
                    {data.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div
              className={`relative w-[200px] z-10 ${index === 4 ? 'h-[350px]' : ' h-[250px]'}`}
            >
              <Image
                alt={data.title}
                src={data.img}
                fill
                sizes="none"
                className="object-contain"
              />
            </div>
            <div
              className={`bg-[#C10F1F] absolute w-4 ${index === 4 ? 'hidden' : 'h-[330px]'} translate-y-[340px]`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
