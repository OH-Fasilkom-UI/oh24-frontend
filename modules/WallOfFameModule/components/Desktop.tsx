import React from 'react'
import Image from 'next/image'
import { Cards } from './Cards'
import { ArrowRightCircle } from 'lucide-react'

interface DesktopProps {
  navmenuData: string[]
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

const NavmenuDesktop: React.FC<DesktopProps> = ({
  navmenuData,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="w-full flex h-14 mb-12 2xl:h-20 items-center">
      <div
        className="bg-[#3B478B] gap-4 w-full h-full rounded-full px-2.5 2xl:px-6"
        style={{
          boxShadow: '-6px -6px 16px 0px rgba(78, 86, 196, 0.7)',
        }}
      >
        <ul className="h-full w-full flex justify-between items-center">
          {navmenuData.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`transition duration-300 cursor-pointer font-riffic py-3 px-1.5 min-[996px]:px-4 2xl:px-6 text-[9px] min-[996px]:text-xs xl:text-[14px] 2xl:text-lg rounded-full ${
                selectedIndex === index
                  ? 'bg-BlueRegion/Cornflower/200 text-Text/TextLightBG'
                  : 'text-BlueRegion/Cornflower/200'
              }`}
              style={{
                boxShadow:
                  selectedIndex === index
                    ? '1px 1px 16px 0px rgba(188, 224, 251, 0.6)'
                    : 'none',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[60%] aspect-square relative ml-1">
        <ArrowRightCircle className="absolute inset-0 w-full h-full text-[#3B478B]" />
      </div>
    </div>
  )
}

const Desktop: React.FC<DesktopProps> = ({
  navmenuData,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="md:flex flex-wrap pt-12 px-12 justify-center hidden">
      <NavmenuDesktop
        navmenuData={navmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="relative">
        <h1
          className="block absolute top-[12%] left-[7%] text-4xl lg:text-5xl xl:text-6xl w-[35%] leading-tight text-PurpleRegion/MoonRaker/800"
          style={{
            textShadow: '-8px 8px 10px rgba(237, 157, 164, 1)',
          }}
        >
          {navmenuData[selectedIndex]}
        </h1>
        <div className="flex flex-wrap absolute w-[45%] h-[67.3%] right-[3%] top-[5%] overflow-auto pb-4 2xl:pb-8">
          <Cards />
        </div>
        <Image
          src="/computer-screen.png"
          alt="jalur-masuk"
          width={1593.66}
          height={1011.25}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Desktop
