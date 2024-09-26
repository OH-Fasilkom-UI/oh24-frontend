'use client'
import React, { useState, useRef } from 'react'
import { useSprings, animated, useSpring } from 'react-spring'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import bg from '@/public/city-facility.png'
import Button from '@/components/ui/Button'
import { FACILITIES } from '../constant'

const ExploreFacility = () => {
  const facilities = useRef<HTMLUListElement | null>(null)
  const [index, setIndex] = useState(0)
  const [lookup, setLookup] = useState(false)

  const springs = useSprings(
    FACILITIES.length,
    FACILITIES.map((_, i) => {
      const scale = i === index ? 1.2 : 1
      const offset = (i - index) * 100
      return {
        transform: `translateX(${offset}%) scale(${scale})`,
      }
    })
  )

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : FACILITIES.length - 1
    )
  }

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex < FACILITIES.length - 1 ? prevIndex + 1 : 0
    )
  }

  const expandSpring = useSpring({
    maxHeight: lookup ? '200px' : '0px',
    opacity: lookup ? 1 : 0,
    config: { tension: 200, friction: 20 }, // Adjust for smoother animation
    overflow: 'hidden',
  })

  return (
    <section className="relative flex flex-col items-center text-center justify-center">
      <h1 className="my-2 md:my-4 xl:my-6 2xl:my-10 font-bold font-riffic text-Text/TextLightBG leading-[48px] text-6xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-sm:text-lg max-md:leading-[36px] lg:whitespace-nowrap tracking-widest">
        Fasilitas Fasilkom UI
      </h1>
      <div className="mt-8 flex items-center justify-center sm:mt-10">
        {FACILITIES.map((_, i) => (
          <div
            key={i}
            className={`mx-1 aspect-square w-2 md:mx-2 md:w-3.5 xl:mx-3 xl:w-5 rounded-full border-solid border-Text/TextLightBG border-[1px] md:border-[2px] xl:border-[3px] bg-Text/TextLightBG transition duration-300 dark:bg-white ${index === i ? '' : 'bg-transparent'}`}
          ></div>
        ))}
      </div>
      <div className="flex justify-center items-center py-[4.5rem] sm:py-[6rem] md:py-32 xl:py-48 overflow-hidden relative">
        <Image
          src={bg.src}
          alt="city"
          width={2930.42}
          height={528}
          className="scale-[190%] object-contain"
        />
        <ul
          className="flex justify-center items-center absolute w-full"
          ref={facilities}
        >
          {springs.map((style, i) => (
            <animated.li
              key={i}
              style={style}
              className="absolute flex justify-center items-center w-1/3"
            >
              <Card
                className="relative flex flex-col rounded-[12px] sm:rounded-[24px] md:rounded-[36px] xl:rounded-[44px] bg-Text/TextLightBG p-3 min-[580px]:p-4 sm:p-5 md:p-8 xl:p-10 2xl:p-12 h-[8rem] min-[420px]:h-[10rem] min-[580px]:h-[12rem] sm:h-[14rem] md:h-[18rem] lg:h-[22rem] xl:h-[28rem] 2xl:h-[34rem] min-[1990px]:h-[38rem] mx-[10%] bg-opacity-[87%]"
                style={{
                  boxShadow: '-6px -6px 16px 0px rgba(78, 86, 196, 0.5)',
                }}
              >
                <Image
                  className="h-full w-full object-cover rounded-[8px] sm:rounded-[16px] md:rounded-[20px] xl:rounded-[28px]"
                  src={FACILITIES[i].image}
                  alt={`Slide ${i + 1}`}
                  width={1000}
                  height={1000}
                  style={{
                    boxShadow: 'inset 0px 50px 50px 30px rgba(0, 0, 0, 0.5)',
                  }}
                />
                <h1
                  className={`${index === i ? '' : 'hidden'} flex items-end justify-center absolute pb-4 min-[580px]:pb-6 sm:pb-8 md:pb-12 xl:pb-16 2xl:pb-20 rounded-b-[12px] sm:rounded-b-[24px] md:rounded-b-[36px] xl:rounded-b-[44px] h-[50%] w-full bottom-0 left-0 max-[480px]:text-[8px] max-[480px]:leading-tight text-xs sm:text-lg lg:text-2xl px-3 min-[580px]:px-4 sm:px-5 md:px-8 xl:px-10 2xl:px-12 text-Text/TextDarkBG`}
                  style={{
                    background:
                      'linear-gradient(to top, rgba(46, 56, 129, 0.8), rgba(0, 0, 0, 0))', // Gradient from bottom to top
                  }}
                >
                  {FACILITIES[i].title}
                </h1>
              </Card>
            </animated.li>
          ))}
        </ul>
        <button
          className="absolute w-7 h-7 md:w-12 md:h-12 top-1/2 transform -translate-y-1/2 left-4 bg-white rounded-full flex items-center justify-center"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-[60px] w-[37px] text-Text/TextLightBG max-md:scale-[60%]" />
        </button>
        <button
          className="absolute w-7 h-7 md:w-12 md:h-12 top-1/2 transform -translate-y-1/2 right-4 bg-white rounded-full flex items-center justify-center"
          onClick={goToNext}
        >
          <ChevronRight className="h-[60px] w-[37px] text-Text/TextLightBG max-md:scale-[60%]" />
        </button>
      </div>
      <animated.div
        style={expandSpring}
        className="overflow-hidden w-[60%] text-Text/TextLightBG font-bold mb-4 lg:mb-8 2xl:mb-12 text-xs min-[540px]:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        {FACILITIES[index].desc}
      </animated.div>
      <Button
        className="bg-Misc/Ziggurat/400 mb-24 md:mb-8"
        onClick={() => setLookup(!lookup)}
      >
        Lihat Selengkapnya
      </Button>
    </section>
  )
}

export default ExploreFacility
