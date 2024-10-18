'use client'
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'
import { useState } from 'react'

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

  return (
    <>
      <Desktop
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Mobile
        navmenuData={NavmenuData}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  )
}

export default BidangTabs
