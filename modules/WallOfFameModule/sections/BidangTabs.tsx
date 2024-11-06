import Button from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import {
  Desktop,
  DesktopCarousel,
  DesktopOverview,
  NavMenuDesktop,
} from '../components/Desktop'
import {
  Mobile,
  MobileCarousel,
  MobileOverview,
  NavMenuMobile,
} from '../components/Mobile'
import { cardsData, navMenuData } from '../constant'

const BidangTabs: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoSlideActive, setAutoSlideActive] = useState(true)
  const [filteredCards, setFilteredCards] = useState(cardsData)
  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(
    undefined
  )

  const handleNavClick = useCallback((index: number) => {
    setSelectedIndex(index)
    setAutoSlideActive(false)
    setFocusedIndex(undefined)
  }, [])

  const handleCardClick = (index: number) => {
    setFocusedIndex(index)
    setAutoSlideActive(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (autoSlideActive) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % navMenuData.length)
      }, 5000)
    }

    // Di bawah ini buat clear auto-slidenya
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoSlideActive])

  useEffect(() => {
    const filtered = cardsData.filter(
      (card) => card.bidang === navMenuData[selectedIndex]
    )
    setFilteredCards(filtered)
  }, [selectedIndex])

  if (focusedIndex !== undefined) {
    return (
      <>
        <Desktop>
          <Button
            onClick={() => {
              setFocusedIndex(undefined)
            }}
            variant="primary"
            className="flex justify-center items-center self-start mt-4 text-base sm:text-lg"
          >
            <ArrowLeft className="w-5"></ArrowLeft>
            Back
          </Button>
          <NavMenuDesktop
            selectedIndex={selectedIndex}
            handleNavClick={handleNavClick}
          />
          <DesktopCarousel
            filteredCards={filteredCards}
            focusedIndexInitial={focusedIndex}
          />
        </Desktop>
        <Mobile>
          <Button
            onClick={() => {
              setFocusedIndex(undefined)
            }}
            variant="primary"
            className="flex justify-center items-center self-start mt-4 text-base sm:text-lg"
          >
            <ArrowLeft className="w-5"></ArrowLeft>
            Back
          </Button>
          <NavMenuMobile
            selectedIndex={selectedIndex}
            handleNavClick={handleNavClick}
          />
          <MobileCarousel
            filteredCards={filteredCards}
            focusedIndexInitial={focusedIndex}
          />
        </Mobile>
      </>
    )
  } else {
    return (
      <>
        <Desktop>
          <NavMenuDesktop
            selectedIndex={selectedIndex}
            handleNavClick={handleNavClick}
          />
          <DesktopOverview selectedIndex={selectedIndex}>
            <Cards cards={filteredCards} handleCardClick={handleCardClick} />
          </DesktopOverview>
        </Desktop>
        <Mobile>
          <NavMenuMobile
            selectedIndex={selectedIndex}
            handleNavClick={handleNavClick}
          />
          <MobileOverview selectedIndex={selectedIndex}>
            <Cards cards={filteredCards} handleCardClick={handleCardClick} />
          </MobileOverview>
        </Mobile>
      </>
    )
  }
}

export default BidangTabs
