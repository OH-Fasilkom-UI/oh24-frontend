import React from 'react'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Footer from '@/components/elements/Footer'

export const Hero = ({onClick}: {onClick: () => void}) => {
  return (
    <>
      <section className="flex flex-col items-center justify-start w-full h-screen pt-[20dvh] px-[40px]">
        <h1 className="md:text-t1 text-t6 text-Text/TextLightBG font-riffic font-bold">
          Merchandise Pacil
        </h1>
        <p className="md:text-t6 text-center text-t9 text-Text/TextLightBG font-bold">
          Saksikan bajunya milik maskot Fasilkom UI teryucu-yucu!
        </p>
        <Button onClick={() => onClick()} className="flex items-center justify-center gap-3 md:mt-12  mt-9">
          Kepo <ArrowRight />
        </Button>
      </section>
      <Footer />
    </>
  )
}
