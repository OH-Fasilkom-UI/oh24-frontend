'use client'
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'
import { useState, useEffect, useCallback } from 'react'

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

  const handleNavClick = useCallback((index: number) => {
    setSelectedIndex(index)
    setAutoSlideActive(false)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (autoSlideActive) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % NavmenuData.length)
      }, 5000) // nge-slide setiap 5 detik
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoSlideActive])

  return (
    <>
      <Desktop
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={handleNavClick}
      />
      <Mobile
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={handleNavClick}
      />
    </>
  )
}

export default BidangTabs
