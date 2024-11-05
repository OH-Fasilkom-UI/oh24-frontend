'use client'

import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  User,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const TataCaraModule = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [visibleSlides, setVisibleSlides] = useState<number[]>([])

  const slides = [
    {
      image: '/panda-modal/panda-pertama.png',
      text: 'Lihat-lihat dan pilih merch yang tersedia di website OH',
    },
    {
      image: '/panda-modal/panda-kedua.png',
      text: 'Lihat-lihat dan pilih merch yang tersedia di website OH',
    },
    {
      image: '/panda-modal/panda-ketiga.png',
      text: 'Lihat-lihat dan pilih merch yang tersedia di website OH',
    },
  ]

  useEffect(() => {
    if (isOpen) {
      setVisibleSlides([])

      slides.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSlides((prev) => [...prev, index])
        }, index * 500)
      })
    }
  }, [isOpen])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <Modal
      title=""
      trigger={
        <Button
          variant="secondary"
          className="px-8 py-3"
          onClick={() => setIsOpen(true)}
        >
          Cara Pembelian <User size={24} />
        </Button>
      }
      onOpenChange={setIsOpen}
    >
      <div className="flex justify-end">
        <DialogPrimitive.Close asChild>
          <X
            size={48}
            className="text-white max-[350px]:-translate-x-4 max-md:-translate-y-5 -translate-x-5 cursor-pointer max-md:size-6"
            onClick={() => setIsOpen(false)}
          />
        </DialogPrimitive.Close>
      </div>
      <div className="h-auto flex flex-col justify-center items-center">
        <h1 className="text-Text/TextDarkBG max-[350px]:text-[18px] text-center justify-center max-md:leading-7 max-md:text-[20px] text-3xl font-bold tracking-widest leading-10">
          How to Buy Our Merch?
        </h1>

        <div className="hidden xl:flex flex-row mt-11 md:gap-x-[144px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-col w-[266px] transition-all duration-500 transform
                ${visibleSlides.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
                }`}
            >
              <div className="relative w-[266px] h-[289px]">
                <Image
                  src={slide.image}
                  alt={`panda ${index + 1}`}
                  fill
                  sizes="none"
                  className="object-contain"
                />
              </div>
              <p className="text-[16px] text-white font-tex-gyre font-bold leading-6 mt-4">
                {slide.text}
              </p>
            </div>
          ))}
        </div>

        <div className="xl:hidden relative mt-11 mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 min-[900px]:-translate-x-36 max-sm:translate-x-1/2 translate-y-1/2 z-10 text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center mx-8">
            <div className="relative w-[200px] h-[217px]">
              <Image
                src={slides[currentSlide].image}
                alt={`panda ${currentSlide + 1}`}
                fill
                sizes="none"
                className="object-contain"
              />
            </div>
            <p className="text-[16px] text-white font-tex-gyre font-bold leading-6 mt-4 text-center">
              {slides[currentSlide].text}
            </p>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 translate-y-1/2 min-[900px]:translate-x-36 max-sm:-translate-x-1/2 z-10 text-white"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:items-center max-md:gap-y-2 gap-x-4 justify-center mt-[44px]">
          <DialogPrimitive.Close asChild>
            <Button variant="tertiary">
              <Search />
              Continue Browsing
            </Button>
          </DialogPrimitive.Close>
          <Button className="px-[53px]" variant="secondary">
            <ShoppingCart />
            Order Now
          </Button>
        </div>
      </div>
    </Modal>
  )
}
