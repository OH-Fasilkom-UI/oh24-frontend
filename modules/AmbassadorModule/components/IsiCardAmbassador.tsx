import React from 'react'
import Button from '@/components/ui/Button'
import { User } from 'lucide-react'
import { scroller } from 'react-scroll'
import Countdown from '@/components/elements/Countdown'

const IsiCardAmbassador = () => {
  return (
    <>
      <div className="text-center justify-center md:mx-[60px]  max-sm:gap-5 lg:mx-[100px] md:gap-8 xl:mx-[200px] xl:gap-20 mb-5 flex flex-col">
        <h1 className="max-md:text-[20px] max-md:leading-[32px] leading-[48px] md:text-[25px] lg:text-[30px] tracking-widest lg:whitespace-nowrap font-bold text-shadow-ambassador font-riffic text-[43px] text-Text/TextDarkBG">
          Open Recruitment Ambassador
          <br />
          Open House Fasilkom UI 2024
        </h1>
        <p className="max-md:text-[11px] max-md:text-center max-md:leading-4 leading-[28px] text-[20px] font-tex-gyre font-bold text-Text/TextDarkBG">
          Ambassador adalah salah satu divisi dari OH Fasilkom UI untuk mengajak
          siswa/1 SMA/sederajat menjadi ikon dari OH Fasilkom UI 2024, dengan
          tujuan mempromosikan acara OH Fasilkom 2024 dan Fakultas Ilmu Komputer
          itu sendiri.
        </p>
      </div>
      <div className="text-center md:my-8 xl:my-20">
        <p className="font-bold max-md:text-[15px] mb-5 leading-[28px] text-[20px] font-tex-gyre">
          Recruitment Ambassador Open House Fasilkom UI 2024 ditutup
        </p>
        <div>
          <Countdown
            targetDate={new Date('2024-09-19T23:59:59Z')}
            displayDate
          />
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col max-md:items-center gap-5 max-md:my-5 xl:my-20 justify-center">
        <Button
          onClick={() => {
            scroller.scrollTo('ambass-desc', {
              smooth: true,
              offset: -150,
            })
          }}
          className="max-md:text-[12px] w-full max-w-[150px] h-[44px]"
        >
          Description
        </Button>
        <Button className="bg-Misc/Ziggurat/400 max-md:text-[12px] w-full max-w-[150px]">
          <User className="max-md:text-[12px]" /> Register
        </Button>
      </div>
    </>
  )
}

export default IsiCardAmbassador