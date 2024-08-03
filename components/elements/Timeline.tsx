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
import { AnimatePresence, motion } from 'framer-motion'

export const Timeline = () => {
  const [hoveredCard, setHoveredCard] = useState<null | number>(null)
  const [clickedCard, setClickedCard] = useState<null | number>(null)
  const translateStyle = [
    'xl:-translate-y-40 -translate-y-44',
    'xl:-translate-y-14 translate-x-5 -translate-y-24',
    'xl:-translate-y-8 xl:translate-x-24 -translate-y-20 translate-x-8',
    'xl:translate-y-36 xk:-translate-x-8 -translate-x-12 translate-y-28',
    'xl:translate-x-32 translate-x-28 translate-y-36 xl:translate-y-44',
  ]

  const handleCardClick = (index: number) => {
    setClickedCard(clickedCard === index ? null : index)
    setHoveredCard(null)
  }

  const handleCardHover = (index: number) => {
    if (clickedCard === null) {
      setHoveredCard(index)
    }
  }

  const handleCardHoverEnd = () => {
    if (clickedCard === null) {
      setHoveredCard(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="2xl:w-[1280px] max-lg:hidden 2xl:h-[1020px] xl:w-[900px] xl:h-[740px] lg:w-[760px] lg:h-[600px] grid grid-cols-3 my-40"
      >
        {timelineData.map((data, index) => (
          <div
            key={index}
            className={`p-5 ${index === timelineData.length - 1 && 'col-span-2 justify-center items-center flex'}`}
          >
            <motion.div
              onHoverStart={() => handleCardHover(index)}
              onHoverEnd={handleCardHoverEnd}
              whileHover={{
                transition: { duration: 0.3 },
                
              }}
              onClick={() => handleCardClick(index)}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`${translateStyle[index]} 2xl:max-h-[380px] xl:max-h-[440px] absolute shadow-timeline text-center bg-[#2E3881E5] 
                ${clickedCard === index || hoveredCard === index
                  ? (index === 2
                    ? 'max-w-[320px] z-10 2xl:max-w-[480px] xl:max-w-[420px]'
                    : 'max-w-[360px] z-10 2xl:max-w-[480px] xl:max-w-[420px]')
                  : (clickedCard !== null || hoveredCard !== null)
                    ? 'opacity-0 cursor-auto'
                    : 'lg:w-[200px] xl:w-[285px]'
                }
                flex flex-col rounded-[32px] gap-5 justify-center items-center py-20 px-[42px]  duration-300 transition-all cursor-pointer`}
            >
              <h1 className="text-BlueRegion/Cornflower/100 tracking-[0.075rem] font-bold text-xl xl:text-2xl">
                {data.title}
              </h1>
              {
                clickedCard === index || hoveredCard === index ?
                  <p className="text-BlueRegion/Cornflower/100 text-base font-normal font-tex-gyre">
                    {data.description}
                  </p>
                  :
                  <p className="text-BlueRegion/Cornflower/100 text-base font-normal font-tex-gyre">
                    {data.date}
                  </p>
              }
            </motion.div>
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
                  <h1 className="text-BlueRegion/Cornflower/100 tracking-[0.075rem] font-bold">
                    {data.title}
                  </h1>
                  <p className="text-BlueRegion/Cornflower/100 text-[12px] font-normal">
                    {data.date}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-[#2E3881E5] border-0 w-[216px] flex flex-col gap-4 shadow-timeline py-12 px-6 rounded-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-BlueRegion/Cornflower/100 tracking-[0.075rem] text-[16px] font-bold">
                    {data.title}
                  </DialogTitle>
                  <DialogDescription className="text-BlueRegion/Cornflower/100 text-start text-[12px] font-normal">
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
              className={`bg-RedRegion/Monza/700 absolute w-4 ${index === 4 ? 'hidden' : 'h-[330px]'} translate-y-[340px]`}
            ></div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
