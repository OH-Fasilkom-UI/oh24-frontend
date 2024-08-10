'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Card from '@/components/ui/Card'
import { LAST_AMBASSADOR } from '../constant'
import Image from 'next/image'

const AmbassadorCarousel = () => {
  return (
    <div className="py-20">
      <div className="mx-auto px-4">
        <h1 className="text-center font-bold text-4xl max-md:text-[24px] tracking-widest text-Text/TextLightBG mb-4">
          Ambassador Last Year
        </h1>
        <p className="text-center max-md:text-[12px] font-bold text-Text/TextLightBG mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <Carousel className="px-[65px] md:px-[120px] lg:px-[190px]">
        <CarouselContent className="lg:gap-5">
          {Array.from(LAST_AMBASSADOR).map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
              <Card
                title=""
                className="flex flex-col gap-2 rounded-[28px] shadow-carousel"
              >
                <div className="relative w-full xl:h-[176px] h-[128px] rounded-[30px] overflow-hidden">
                  <Image
                    alt="contoh"
                    src={item.image}
                    fill
                    sizes="none"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center translate-y-2 flex-grow">
                  <p className="text-[14px] leading-5 text-center">
                    {item.description}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:px-[50px] lg:px-[73px]" />
        <CarouselNext className="md:px-[50px] lg:px-[73px]" />
      </Carousel>
    </div>
  )
}

export default AmbassadorCarousel
