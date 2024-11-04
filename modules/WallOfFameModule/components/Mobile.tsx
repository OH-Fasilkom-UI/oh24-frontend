import Button from '@/components/ui/Button'
import ComputerMobile from '@/public/WallOfFame/ComputerMobile.png'
import PandaKanan from '@/public/WallOfFame/PandaKanan.png'
import PandaKiri from '@/public/WallOfFame/PandaKiri.png'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronDown,
  Dot,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { cardsDataType, navMenuData } from '../constant'

interface MobileCarouselProps {
  filteredCards: cardsDataType
  focusedIndexInitial: number
}

interface MobileOverviewProps {
  selectedIndex: number
  children: React.ReactElement
}

interface navMenuProps {
  selectedIndex: number
  handleNavClick: (index: number) => void
}

const Mobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col flex-wrap pt-20 px-5 sm:px-4 justify-center md:hidden">
      {children}
    </div>
  )
}

const NavMenuMobile: React.FC<navMenuProps> = ({
  selectedIndex,
  handleNavClick,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleSelect = (index: number) => {
    handleNavClick(index)
    setIsOpen(false)
  }

  return (
    <div className="w-full relative inline-block my-6">
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-xl px-4 py-3 bg-Text/TextLightBG text-base sm:text-lg font-bold text-BlueRegion/Portgage/100 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-offset-white focus:ring-[#39459f]"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            boxShadow: '0px 5px 5px 1px rgba(0, 0, 0, 0.3)',
          }}
        >
          {navMenuData[selectedIndex]}
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
          aria-labelledby="navMenuData-menu"
        >
          {navMenuData.map((option, index) => (
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

const MobileOverview: React.FC<MobileOverviewProps> = ({
  selectedIndex,
  children,
}) => {
  return (
    <div className="relative flex justify-center">
      <h1
        className="block absolute w-[85%] text-center top-[7%] text-[26px] min-[380px]:text-[38px] min-[560px]:text-6xl leading-tight text-PurpleRegion/MoonRaker/800"
        style={{
          textShadow: '-6px 6px 10px rgba(237, 157, 164, 1)',
        }}
      >
        {navMenuData[selectedIndex]}
      </h1>
      <div className="absolute w-[89.2%] h-[69%] top-[23%] overflow-x-auto overflow-y-hidden">
        <div className="flex w-max mt-8">{children}</div>
      </div>
      <Image
        src={ComputerMobile}
        alt="Computer Screen"
        width={1593.66}
        height={1011.25}
        className="object-contain"
      />
    </div>
  )
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({
  filteredCards,
  focusedIndexInitial,
}) => {
  const [carouselRef, api] = useEmblaCarousel({
    startIndex: focusedIndexInitial,
    loop: true,
    slidesToScroll: 1,
  })
  const [focusedIndex, setFocusedIndex] = React.useState(focusedIndexInitial)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setFocusedIndex(api.selectedScrollSnap())
    }
    api.on('select', onSelect)
    onSelect()
  }, [api, setFocusedIndex])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])
  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className="relative w-full pb-20">
      <div className="sm:mx-2 overflow-hidden" ref={carouselRef}>
        <div className="flex gap-10">
          {filteredCards.map((card, index) => {
            return (
              <div
                className="min-w-full min-h-[36rem] bg-[url('/wof-background.png')] bg-no-repeat bg-center bg-cover rounded-3xl overflow-hidden px-8 py-24 sm:px-16"
                key={index}
              >
                <div className="relative w-full max-w-[20rem] aspect-square mb-10 mx-auto">
                  <Image
                    src={card.foto}
                    alt={`Foto Profil ${card.nama}`}
                    fill
                    sizes="none"
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="">
                  <h1 className="font-riffic font-bold text-xl sm:text-2xl text-white mb-0">
                    {card.nama}
                  </h1>
                  <h2 className="font-tex-gyre font-bold text-md sm:text-lg text-white mb-6 sm:mb-8">
                    {card.posisi}
                  </h2>
                  <p className="font-tex-gyre font-bold text-lg sm:text-xl text-white mb-6 sm:mb-8">
                    {card.deskripsi}
                  </p>
                  <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-1">
                    {card.kontak.map((kontak, index) => {
                      return (
                        <a
                          href={kontak.link}
                          className="block font-tex-gyre text-sm sm:text-md font-bold text-white"
                          key={index}
                        >
                          <Dot className="inline-block scale-[300%] -translate-y-[10%] text-BlueRegion/Portgage/600"></Dot>
                          {kontak.teks}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="grid grid-cols-[4rem_minmax(0,1fr)_4rem] mx-auto mt-8 max-w-fit">
        <Button
          variant="primary"
          className="block relative size-12 p-0 md:p-0 rounded-full self-start justify-self-start"
          disabled={filteredCards.length <= 1}
          onClick={scrollPrev}
        >
          <ArrowLeftCircle className="absolute inset-0 w-[50%] h-[50%] top-[25%] left-[25%]" />
        </Button>
        <div className="block text-center self-center">
          {filteredCards.map((_, index) => {
            return (
              <button
                onClick={() => api?.scrollTo(index)}
                className={`${index == focusedIndex ? 'bg-BlueRegion/Portgage/600' : 'bg-BlueRegion/CeruleanBlue/400'} size-5 rounded-full inline-block mx-2 align-middle`}
                key={index}
              ></button>
            )
          })}
        </div>
        <Button
          variant="primary"
          className="block relative size-12 p-0 md:p-0 rounded-full self-start justify-self-end"
          disabled={filteredCards.length <= 1}
          onClick={scrollNext}
        >
          <ArrowRightCircle className="absolute inset-0 w-[50%] h-[50%] top-[25%] left-[25%]" />
        </Button>
      </div>
      <div className="absolute bottom-32 -left-6 size-36 sm:bottom-24 sm:size-48">
        <Image
          src={PandaKiri}
          alt="Left Panda"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-32 -right-6 size-36 sm:bottom-24 sm:size-48">
        <Image
          src={PandaKanan}
          alt="Right Panda"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export { Mobile, MobileCarousel, MobileOverview, NavMenuMobile }
