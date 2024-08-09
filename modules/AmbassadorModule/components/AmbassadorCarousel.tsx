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
        <h1 className="text-center font-bold text-4xl tracking-widest text-Text/TextLightBG mb-4">
          Ambassador Last Year
        </h1>
        <p className="text-center font-bold text-Text/TextLightBG mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <Carousel className="px-20 w-screen mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from(LAST_AMBASSADOR).map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="px-4">
                <Card title="" className="flex flex-col gap-y-2 xl:w-[348px]">
                  <div className="relative w-full xl:h-[176px] rounded-3xl">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default AmbassadorCarousel
