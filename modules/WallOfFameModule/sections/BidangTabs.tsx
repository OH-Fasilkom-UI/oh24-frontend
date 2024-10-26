'use client'
import { useState, useEffect, useCallback } from 'react'
import {
  Desktop,
  NavMenuDesktop,
  DesktopOverview,
  DesktopCarousel,
} from '../components/Desktop'
import {
  Mobile,
  NavMenuMobile,
  MobileOverview,
  MobileCarousel,
} from '../components/Mobile'
import { cardsData, navMenuData } from '../constant'
import { Cards } from '../components/Cards'
import Button from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

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

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoSlideActive])

  useEffect(() => {
    if (selectedIndex === 0) {
      setFilteredCards(cardsData)
    } else {
      const filtered = cardsData.filter(
        (card) => card.bidang === navMenuData[selectedIndex]
      )
      setFilteredCards(filtered)
    }
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
            className="flex items-center self-start mb-3 lg:mb-6 text-[9px] md:text-xs min-[996px]:text-xs xl:text-[14px] 2xl:text-lg"
          >
            <button className="inline relative h-[1.5em] w-[1.5em]">
              <ArrowLeft className="absolute w-full h-full top-0"></ArrowLeft>
            </button>
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
