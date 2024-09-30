'use client'

import Card from '@/components/ui/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { LAST_AMBASSADOR } from '../constant'

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
      <Carousel className="px-[65px] md:px-[120px] lg:px-[50px]">
        <CarouselContent className="gap-1">
          {Array.from(LAST_AMBASSADOR).map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
              <Card
                className="flex flex-col rounded-[28px] shadow-carousel lg:max-w-[350px] p-4 sm:p-4 pb-5 lg:min-h-[270px] gap-5"
                asset={
                  <Image
                    alt="contoh"
                    src={item.image}
                    width={200}
                    height={200}
                    className="object-cover lg:object-cover w-full h-full aspect-square max-h-[170px] rounded-xl"
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
        <CarouselPrevious className="lg:-translate-x-20 -translate-x-5" />
        <CarouselNext className="lg:translate-x-20 translate-x-5" />
      </Carousel>
    </div>
  )
}

export default AmbassadorCarousel
