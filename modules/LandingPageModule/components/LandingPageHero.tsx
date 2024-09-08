'use client'
import Countdown from '@/components/elements/Countdown'
import { Primary } from '@/components/stories/Button.stories'
import Button from '@/components/ui/Button'
import { SquarePen } from 'lucide-react'

const LandingPageHero = () => {
  return (
    <div className="xl:mt-[194px] max-sm:mt-[100px] sm:mt-[120px] flex flex-col items-center">
      <h2 className="font-bold text-center text-Text/TextLightBG leading-[50px] text-4xl max-sm:text-3xl max-sm:leading-[29px] text-[48px] tracking-wider">
        Open House
        <br /> &nbsp;Fasilkom UI 2024
      </h2>
      <div className="mt-6 sm:mt-12">
        <Countdown
          targetDate={new Date('2024-09-19T23:59:00')}
          displayDate
          classNameType="text-md sm:text-xl"
          classNameBlock="w-20 h-24 sm:w-28 sm:h-32 mt-3 mb-3 sm:mb-8"
        />
      </div>
      <div className="flex gap-4 sm:gap-12 my-12">
        <Button className=" w-[150px] sm:w-[200px] text-[12px]">
          About OH 2024
        </Button>
        <Button
          variant="tertiary"
          className="w-[140px] sm:w-[180px] max-md:text-[12px]"
        >
          Register
          <SquarePen />
        </Button>
      </div>
    </div>
  )
}

export default LandingPageHero
