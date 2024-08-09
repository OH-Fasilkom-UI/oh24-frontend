import Card from '@/components/ui/Card'
import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import Image from 'next/image'
import { CarouselCardProps } from '../interface'

const CarouselCard: React.FC<CarouselCardProps> = ({ image, description }) => {
  return (
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
      <div className="px-4">
        <Card title="" className="flex flex-col gap-y-2 xl:w-[348px]">
          <div className="flex aspect-video w-full xl:h-[176px] rounded-3xl items-center bg-[#BDBFC2] justify-center">
            <Image
              src={image}
              alt=""
              width={150}
              height={150}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center translate-y-2 flex-grow">
            <p className="text-[14px] leading-5 text-center">{description}</p>
          </div>
        </Card>
      </div>
    </CarouselItem>
  )
}

export default CarouselCard
