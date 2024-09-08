'use client'
import Countdown from '@/components/elements/Countdown'
import { Primary } from '@/components/stories/Button.stories'
import Button from '@/components/ui/Button'
import { SquarePen } from 'lucide-react'

const LandingPageHero = () => {
  return (
    <div className="mt-[100px] sm:mt-[180px] flex flex-col items-center">
      <h2 className="font-bold text-center text-Text/TextLightBG leading-[50px] text-[26px] sm:text-t2 max-sm:leading-[29px] tracking-wider">
        Open House
        <br /> &nbsp;Fasilkom UI 2024
      </h2>
      <div className="mt-6 sm:mt-12">
        <Countdown
          targetDate={new Date('2024-09-19T23:59:00')}
          displayDate
          classNameType="sm:text-xl text-white"
          classNameBlock=" w-[60px] h-[70px] sm:w-20 sm:h-24 sm:w-28 sm:h-32 mt-3 mb-3 sm:mb-8"
        />
      </div>
      <div className="flex gap-4 sm:gap-12 my-6 sm:my-12">
        <Button className=" w-[130px] sm:w-[200px] text-[10px] sm:text-[12px]">
          About OH 2024
        </Button>
        <Button
          variant="tertiary"
          className="w-[120px] h-[40px] sm:w-[180px] sm:h-[50px] text-[10px] sm:text-[12px]"
        >
          Register
          <SquarePen />
        </Button>
      </div>
    </div>
  )
}

export default LandingPageHero
