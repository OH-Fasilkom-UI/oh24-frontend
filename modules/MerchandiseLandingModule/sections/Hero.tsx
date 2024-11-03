import Footer from '@/components/elements/Footer'
import Button from '@/components/ui/Button'
import HeroBackground from '@/public/Merchandise/HeroBackground.png'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const Hero = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <section className="w-full relative">
        <Image
          src={HeroBackground}
          alt="Hero Background"
          width={2880}
          height={4340}
          className="max-md:h-screen object-cover"
        />
        <div className="flex flex-col items-center justify-start z-10 absolute top-0 left-0 w-full h-full pt-[16dvh] md:pt-[24dvh] px-[40px]">
          <h1 className="md:text-t1 text-t4 text-center text-Text/TextLightBG font-riffic font-bold">
            Merchandise Pacil
          </h1>
          <p className="md:text-t6 text-center text-t9 text-Text/TextLightBG font-bold">
            Saksikan bajunya milik maskot Fasilkom UI teryucu-yucu!
          </p>
          <Button
            onClick={() => onClick()}
            className="flex items-center justify-center gap-3 md:mt-12 mt-9"
          >
            Kepo <ArrowRight />
          </Button>
        </div>
      </section>
      <Footer />
    </>
  )
}
