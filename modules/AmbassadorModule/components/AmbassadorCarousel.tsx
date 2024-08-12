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
          Ambassador Last Year!
        </h1>
        <p className="text-center max-md:text-[12px] font-bold text-Text/TextLightBG mb-8 max-w-2xl mx-auto">
          Pada tahun 2023, OH Ambassador telah menerima berbagai program
          menarik, mulai dari webinar dengan alumni Fasilkom UI, ngobrol dengan
          mentor-mentor di Fasilkom UI, sampai belajar skill baru bersama
          Ristek! Semua aktivitas ini disediakan secara exclusive kepada para
          Ambassador Open House Fasilkom UI.
        </p>
      </div>
      <Carousel className="px-[65px] md:px-[120px] lg:px-[190px]">
        <CarouselContent className="lg:gap-5">
          {Array.from(LAST_AMBASSADOR).map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
              <Card
                className="flex flex-col rounded-[28px] shadow-carousel p-4 sm:p-4 pb-5 h-[230px] gap-2"
                asset={
                  <Image
                    alt="contoh"
                    src={item.image}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full aspect-square max-h-[130px] rounded-xl"
                  />
                }
              >

                <div className="text-[14px] leading-5 text-center font-bold h-fit flex items-center justify-center">
                  {item.description}
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
