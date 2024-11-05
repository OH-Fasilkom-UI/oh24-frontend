'use client'

import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import Image from 'next/image'
import * as React from 'react'

type CarouselApi = UseEmblaCarouselType[1]

type CarouselProps = {
  images: string[]
}

const CarouselsMobile = ({ images }: CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }
    api.on('select', onSelect)
    onSelect()
  }, [api])

  return (
    <div className="relative bg-[#2E3881E5] py-5 w-full h-fit shadow-lg shadow-[#435F9B]">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <Image
                src={src}
                alt={`img`}
                width={250}
                height={250}
                className="object-cover w-4/6 h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-10 transform -translate-x-1/2 flex space-x-2">
        <span className="text-black text-xs sm:text-lg bg-white opacity-60 px-2 rounded-full">
          {selectedIndex + 1}/{images.length}
        </span>
      </div>
    </div>
  )
}

export default CarouselsMobile
