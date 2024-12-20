import Button from '@/components/ui/Button'
import Background from '@/public/WallOfFame/Background.png'
import ComputerDesktop from '@/public/WallOfFame/ComputerDesktop.png'
import PandaKanan from '@/public/WallOfFame/PandaKanan.png'
import PandaKiri from '@/public/WallOfFame/PandaKiri.png'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeftCircle, ArrowRightCircle, Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className="w-full flex h-14 my-6 items-center">
      <div
        className="bg-[#3B478B] gap-4 w-full h-full rounded-full px-4"
        style={{
          boxShadow: '-6px -6px 16px 0px rgba(78, 86, 196, 0.7)',
        }}
      >
        <ul className="h-full w-full flex gap-5 items-center">
          {navMenuData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(index)}
              className={`transition duration-300 cursor-pointer font-riffic tracking-wider px-4 py-2 text-sm rounded-full ${
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
      <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-5 lg:gap-y-8 w-[45%] h-[67.3%] absolute right-[3%] top-[5%] overflow-auto px-3 lg:px-8 xl:px-12 py-3 lg:py-4 xl:py-8">
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
                className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] min-w-full min-h-[36rem] xl:min-h-[40rem] bg-cover rounded-3xl overflow-hidden gap-10 px-10 py-12"
                style={{
                  backgroundImage: `url(${Background.src})`,
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
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h1 className="font-riffic tracking-wider font-bold text-3xl xl:text-4xl text-white mb-0">
                    {card.nama}
                  </h1>
                  <h2 className="font-tex-gyre font-bold text-lg xl:text-xl text-white mb-8 xl:mb-10">
                    {card.jurusan}
                  </h2>
                  <p className="w-full whitespace-pre-line font-tex-gyre font-bold text-lg text-justify max-h-[320px] pr-3 overflow-auto text-white mb-10 xl:mb-14">
                    {card.deskripsi.split('\n').map((item, index) => (
                      <p key={index} className="mt-2.5 indent-2.5">
                        {item}
                      </p>
                    ))}
                  </p>
                  <div className="flex gap-x-16 gap-y-1 flex-wrap">
                    {card.kontak.map((kontak, index) => {
                      return (
                        <Link
                          href={kontak.link}
                          target="_blank"
                          className="block font-tex-gyre text-md xl:text-lg font-bold text-white"
                          key={index}
                        >
                          <Dot className="inline-block scale-[400%] -translate-y-[10%] text-BlueRegion/Portgage/600"></Dot>
                          {kontak.teks}
                        </Link>
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
