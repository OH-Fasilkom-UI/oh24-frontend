'use client'

import Button from '@/components/ui/Button'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { WhatIsOpenHouseItemProps } from '../interface'
import {
  CarouselButton,
  usePrevNextButtons,
} from './WhatIsOpenHouseCarouselButton'

type PropType = {
  slides: WhatIsOpenHouseItemProps[]
  options?: EmblaOptionsType
}

const WhatIsOpenHouseCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenNodes = useRef<HTMLElement[]>([])
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [lastVisibleSlideIndex, setLastVisibleSlideIndex] = useState(2)
  const [isMdOrLarger, setIsMdOrLarger] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.slide-image') as HTMLElement
    })
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          const tweenNode = tweenNodes.current[slideIndex]

          if (isMdOrLarger) {
            if (slideIndex === activeSlideIndex) {
              tweenNode.style.transform = `scale(1)`
            } else if (slideIndex === lastVisibleSlideIndex) {
              tweenNode.style.transform = `scale(0.5) translateX(-50%)`
            } else {
              tweenNode.style.transform = `scale(0.5)`
            }
          } else {
            tweenNode.style.transform = `scale(1)`
          }
        })
      })
    },
    [activeSlideIndex, lastVisibleSlideIndex, isMdOrLarger]
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('select', () => setActiveSlideIndex(emblaApi.selectedScrollSnap()))
      .on('select', () =>
        setLastVisibleSlideIndex(
          (emblaApi.selectedScrollSnap() + 2) % slides.length
        )
      )

    setActiveSlideIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setTweenNodes, slides.length, tweenScale])

  return (
    <div className="w-full max-w-80 sm:max-w-sm md:max-w-6xl flex flex-col md:gap-6 items-center -translate-y-24 md:-translate-y-48">
      <div className="flex gap-2 md:gap-5 w-full max-w-7xl">
        <CarouselButton direction="prev" onClick={onPrevButtonClick} />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                className="h-36 sm:h-48 lg:h-64 select-none min-w-[100%] md:min-w-[calc(100%/2.5)]"
                key={index}
              >
                <div className="slide-image h-full bg-white rounded-xl md:rounded-2xl transition-transform duration-300 ease-in-out overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <CarouselButton direction="next" onClick={onNextButtonClick} />
      </div>
      <Button className="mt-6">
        <p className="text-sm">Learn More</p>
        <ExternalLink size={18} />
      </Button>
    </div>
  )
}

export default WhatIsOpenHouseCarousel
