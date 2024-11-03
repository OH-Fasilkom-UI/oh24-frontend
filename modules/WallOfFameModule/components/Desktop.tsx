import Button from '@/components/ui/Button'
import Background from '@/public/WallOfFame/Background.png'
import ComputerDesktop from '@/public/WallOfFame/ComputerDesktop.png'
import PandaKanan from '@/public/WallOfFame/PandaKanan.png'
import PandaKiri from '@/public/WallOfFame/PandaKiri.png'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeftCircle, ArrowRightCircle, Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { cardsDataType, navMenuData } from '../constant'

interface DesktopOverviewProps {
  selectedIndex: number
  children: React.ReactElement
}

interface DesktopCarouselProps {
  filteredCards: cardsDataType
  focusedIndexInitial: number
}

interface NavMenuProps {
  selectedIndex: number
  handleNavClick: (index: number) => void
}

const Desktop = ({ children }: { children: React.ReactNode }) => (
  <div className="md:flex flex-col flex-wrap pt-20 px-12 items-center hidden">
    {children}
  </div>
)

const NavMenuDesktop: React.FC<NavMenuProps> = ({
  selectedIndex,
  handleNavClick,
}) => {
  return (
    <div className="w-full flex h-12 my-6 2xl:h-16 items-center">
      <div
        className="bg-[#3B478B] gap-4 w-full h-full rounded-full px-2.5 2xl:px-6"
        style={{
          boxShadow: '-6px -6px 16px 0px rgba(78, 86, 196, 0.7)',
        }}
      >
        <ul className="h-full w-full flex justify-between items-center">
          {navMenuData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(index)}
              className={`transition duration-300 cursor-pointer font-riffic px-2 lg:px-4 2xl:px-6 py-1 md:py-2 text-[9px] md:text-[10px] lg:text-[12px] 2xl:text-lg rounded-full ${
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
      <button
        className="h-[60%] aspect-square relative ml-1"
        onClick={() => handleNavClick((selectedIndex + 1) % navMenuData.length)}
      >
        <ArrowRightCircle className="absolute inset-0 w-full h-full text-[#3B478B]" />
      </button>
    </div>
  )
}

const DesktopOverview: React.FC<DesktopOverviewProps> = ({
  selectedIndex,
  children,
}) => {
  return (
    <div className="relative max-w-screen-xl">
      <h1
        className="block absolute top-[12%] left-[7%] text-4xl lg:text-5xl xl:text-6xl w-[35%] leading-tight text-PurpleRegion/MoonRaker/800"
        style={{
          textShadow: '-8px 8px 10px rgba(237, 157, 164, 1)',
        }}
      >
        {navMenuData[selectedIndex]}
      </h1>
      <div className="flex flex-wrap absolute w-[45%] h-[67.3%] right-[3%] top-[5%] overflow-auto pb-4 2xl:pb-8">
        {children}
      </div>
      <Image
        src={ComputerDesktop}
        alt="Computer Screen"
        width={1593.66}
        height={1011.25}
        className="object-contain"
      />
    </div>
  )
}

const DesktopCarousel: React.FC<DesktopCarouselProps> = ({
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
      <div className="lg:mx-20 overflow-hidden" ref={carouselRef}>
        <div className="flex gap-10">
          {filteredCards.map((card, index) => {
            return (
              <div
                className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] min-w-full min-h-[36rem] xl:min-h-[40rem] bg-cover rounded-3xl overflow-hidden py-12"
                style={{
                  backgroundImage: `url(${Background.src})`,
                  backgroundSize: '100% 75%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                key={index}
              >
                <div className="relative">
                  <Image
                    src={card.foto}
                    alt={`Foto Profil ${card.nama}`}
                    fill
                    sizes="none"
                    className="object-cover"
                  />
                </div>
                <div className="pl-12 pr-20 lg:pl-20 lg:pr-32 py-4">
                  <h1 className="font-riffic font-bold text-3xl xl:text-4xl text-white mb-0">
                    {card.nama}
                  </h1>
                  <h2 className="font-tex-gyre font-bold text-lg xl:text-xl text-white mb-10 xl:mb-14">
                    {card.posisi}
                  </h2>
                  <p className="font-tex-gyre font-bold text-xl xl:text-2xl text-white mb-10 xl:mb-14">
                    {card.deskripsi}
                  </p>
                  <div className="flex gap-x-4 gap-y-1 justify-between flex-wrap">
                    {card.kontak.map((kontak, index) => {
                      return (
                        <a
                          href={kontak.link}
                          className="block font-tex-gyre text-md xl:text-lg font-bold text-white"
                          key={index}
                        >
                          <Dot className="inline-block scale-[400%] -translate-y-[10%] text-BlueRegion/Portgage/600"></Dot>
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
      <Button
        variant="primary"
        className="hidden lg:block size-12 p-0 md:p-0 rounded-full absolute top-1/2 -translate-y-1/2 left-2"
        disabled={filteredCards.length <= 1}
        onClick={scrollPrev}
      >
        <ArrowLeftCircle className="absolute inset-0 w-[50%] h-[50%] top-[25%] left-[25%]" />
      </Button>
      <Button
        variant="primary"
        className="hidden lg:block size-12 p-0 md:p-0 rounded-full absolute top-1/2 -translate-y-1/2 right-2"
        disabled={filteredCards.length <= 1}
        onClick={scrollNext}
      >
        <ArrowRightCircle className="absolute inset-0 w-[50%] h-[50%] top-[25%] left-[25%]" />
      </Button>
      <div className="grid grid-cols-[5rem_minmax(0,1fr)_5rem] lg:grid-cols-1 mx-auto mt-6 lg:mt-10 max-w-fit">
        <Button
          variant="primary"
          className="block lg:hidden relative size-12 p-0 md:p-0 rounded-full self-start justify-self-start"
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
          className="block lg:hidden relative size-12 p-0 md:p-0 rounded-full self-start justify-self-end"
          disabled={filteredCards.length <= 1}
          onClick={scrollNext}
        >
          <ArrowRightCircle className="absolute inset-0 w-[50%] h-[50%] top-[25%] left-[25%]" />
        </Button>
      </div>
      <div className="absolute bottom-12 -left-12 size-48 lg:bottom-4 lg:left-0 lg:size-72">
        <Image
          src={PandaKiri}
          alt="Left Panda"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-12 -right-12 size-48 lg:bottom-4 lg:right-0 lg:size-72">
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

export { Desktop, DesktopCarousel, DesktopOverview, NavMenuDesktop }
