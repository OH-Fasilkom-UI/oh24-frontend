'use client'

import BoardDesktop from '@/public/bulletin-board/board-desktop.png'
import BoardMobile from '@/public/bulletin-board/board-mobile.png'
import Sign from '@/public/bulletin-board/sign.png'
import Image from 'next/image'
import BulletinCard from './BulletinCard'
import { BULLETIN_BOARD_DATA } from './constant'

const BulletinBoard = () => {
  return (
    <div className="relative my-24 flex max-md:max-w-sm mx-auto">
      <Image
        src={Sign}
        alt="Sign"
        className="absolute w-[64%] md:w-[42%] -top-[16px] md:-top-[36px] left-[50%] -translate-x-[50%] z-10"
      />
      <Image
        src={BoardDesktop}
        alt="Board"
        className="max-md:hidden w-full h-full"
      />
      <Image
        src={BoardMobile}
        alt="Board"
        className="md:hidden w-full h-full max-w-sm"
      />
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 lg:gap-8 px-7 py-9 md:px-14 md:py-10 lg:px-16 lg:py-14 xl:px-20 xl:py-16">
        {BULLETIN_BOARD_DATA.map((item) => {
          return (
            <BulletinCard
              color={item.color}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BulletinBoard
