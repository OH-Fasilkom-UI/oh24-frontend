import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

interface MobileProps {
  navmenuData: string[]
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

const NavMenuMobile: React.FC<MobileProps> = ({
  navmenuData,
  selectedIndex,
  setSelectedIndex,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(false)
  }

  return (
    <div className="w-full relative inline-block mb-12">
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-xl px-4 py-3 bg-Text/TextLightBG text-base sm:text-lg font-bold text-BlueRegion/Portgage/100 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-offset-white focus:ring-[#39459f]"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            boxShadow: '0px 5px 5px 1px rgba(0, 0, 0, 0.3)',
          }}
        >
          {navmenuData[selectedIndex]}
          <ChevronDown
            className={`-mr-1 ml-2 h-5 sm:h-7 aspect-square transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-Text/TextLightBG ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform z-[9999] ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="navmenuData-menu"
        >
          {navmenuData.map((option, index) => (
            <a
              key={option}
              href="#"
              className={`block px-4 py-2 text-sm font-bold text-BlueRegion/Portgage/100 ${
                selectedIndex === index
                  ? 'bg-[#39459f]'
                  : 'hover:bg-[#39459f] hover:text-Text/TextLightBG'
              } transition-colors duration-200`}
              role="menuitem"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                handleSelect(index)
              }}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const Mobile: React.FC<MobileProps> = ({
  navmenuData,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="flex flex-wrap pt-12 px-3 justify-center md:hidden">
      <NavMenuMobile
        navmenuData={navmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="relative flex justify-center">
        <h1
          className="block absolute w-[85%] text-center top-[7%] text-[26px] min-[380px]:text-[38px] min-[560px]:text-6xl leading-tight text-PurpleRegion/MoonRaker/800"
          style={{
            textShadow: '-6px 6px 10px rgba(237, 157, 164, 1)',
          }}
        >
          {navmenuData[selectedIndex]}
        </h1>
        <div className="absolute bg-white w-[89.2%] h-[69%] top-[23%]">
          {/* Component radhya */}
        </div>
        <Image
          src="/mobile-screen.png"
          alt="jalur-masuk"
          width={1593.66}
          height={1011.25}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Mobile
