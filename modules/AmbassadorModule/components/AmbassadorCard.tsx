'use client'
import React from 'react'
import Countdown from '@/components/elements/Countdown'
import Card from '@/components/ui/Card'
import bg from '@/public/kota-di-ambassador.png'
import Button from '@/components/ui/Button'
import { User } from 'lucide-react'
import { scroller } from 'react-scroll'

const AmbassadorCard = () => {
  return (
    <div className="xl:mt-[194px] max-sm:mt-[100px] md:mt-[140px] flex flex-col">
      <div className="flex flex-col mx-3 sm:mx-5 md:mx-10 lg:mx-20 min-[2000px]:mx-[400px]">
        <Card
          title=""
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '100% 75%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="text-center justify-center md:mx-[60px]  max-sm:gap-5 lg:mx-[100px] md:gap-8 xl:mx-[200px] xl:gap-20 mb-5 flex flex-col">
            <h1 className="md:leading-[30px] sm:text-[17px] max-sm:leading-[25px] xl:leading-[48px] md:text-[25px] lg:text-[30px] tracking-widest whitespace-nowrap font-bold text-shadow-ambassador font-riffic xl:text-[43px] text-Text/TextDarkBG">
              Open Recruitment Ambassador
              <br />
              Open House Fasilkom UI 2024
            </h1>
            <p className="xl:leading-[28px] min-[100px]:text-[12px]  min-[400px]:text-[15px] max-sm:leading-[25px] md:leading-[25px] max-sm:text-[12px] md:text-[15px] text-[20px] font-tex-gyre font-bold text-Text/TextDarkBG">
              Ambassador adalah salah satu divisi dari OH Fasilkom UI untuk
              mengajak siswa/1 SMA/sederajat menjadi ikon dari OH Fasilkom UI
              2024, dengan tujuan mempromosikan acara OH Fasilkom 2024 dan
              Fakultas Ilmu Komputer itu sendiri.
            </p>
          </div>
          <div className="text-center md:my-8 xl:my-20">
            <p className="font-bold min-[100px]:text-[12px]  min-[400px]:text-[15px] max-sm:text-[10px] mb-5 leading-[28px] md:text-[15px] xl:text-[20px] font-tex-gyre">
              Recruitment Ambassador Open House Fasilkom UI 2024 ditutup
            </p>
            <Countdown
              targetDate={new Date('2024-09-19T23:59:59Z')}
              displayDate
            />
          </div>
          <div className="flex flex-row gap-5 max-sm:my-5 xl:my-20 justify-center">
            <Button
              onClick={() => {
                scroller.scrollTo('ambass-desc', {
                  smooth: true,
                  offset: -150,
                })
              }}
              className="max-sm:text-[10px]">Description</Button>
            <Button className="bg-Misc/Ziggurat/400 max-sm:text-[10px]">
              <User /> Register
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AmbassadorCard
