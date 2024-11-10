'use client'

import { cn } from '@/lib/utils'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

type CarouselApi = UseEmblaCarouselType[1]

type CarouselProps = {
  images: string[]
}

const Carousels = ({ images }: CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  })
  const [width, setWidth] = React.useState(300 / (images.length || 1))

  React.useEffect(() => {
    const updateWidth = () => {
      const isBelowLg = window.innerWidth < 1024
      setWidth(
        isBelowLg ? 200 / (images.length || 1) : 300 / (images.length || 1)
      )
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [images.length])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }
    api.on('select', onSelect)
    onSelect()
  }, [api])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className="relative bg-[#2E3881E5] py-10 w-[320px] h-[280px] lg:w-[480px] lg:h-[400px] rounded-3xl  shadow-lg shadow-[#435F9B]  ">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-full flex justify-center ">
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                width={1000}
                height={1000}
                className="object-contain max-w-[200px] lg:max-w-[300px] max-h-[200px] lg:max-h-[300px] rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Previous and Next buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={scrollPrev}
      >
        <CircleArrowLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={scrollNext}
      >
        <CircleArrowRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            style={{ width: `${width}px` }}
            className={cn(
              `h-2 rounded-full`,
              index === selectedIndex ? 'bg-blue-500' : 'bg-gray-300'
            )}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousels
