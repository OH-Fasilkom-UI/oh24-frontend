'use client'
import { useState, useEffect, useCallback } from 'react'
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'
import { CardsData } from '../constant'

const NavmenuData = [
  'High-Achieving Student',
  'Software Engineering',
  'Data Science',
  'Product Management',
  'UI/UX Design',
  'Cyber Security',
]

const BidangTabs: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoSlideActive, setAutoSlideActive] = useState(true)
  const [filteredCards, setFilteredCards] = useState(CardsData)

  const handleNavClick = useCallback((index: number) => {
    setSelectedIndex(index)
    setAutoSlideActive(false)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (autoSlideActive) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % NavmenuData.length)
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoSlideActive])

  useEffect(() => {
    if (selectedIndex === 0) {
      setFilteredCards(CardsData)
    } else {
      const filtered = CardsData.filter(
        (card) => card.bidang === NavmenuData[selectedIndex]
      )
      setFilteredCards(filtered)
    }
  }, [selectedIndex])

  return (
    <>
      <Desktop
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={handleNavClick}
        filteredCards={filteredCards}
      />
      <Mobile
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={handleNavClick}
        filteredCards={filteredCards}
      />
    </>
  )
}

export default BidangTabs
