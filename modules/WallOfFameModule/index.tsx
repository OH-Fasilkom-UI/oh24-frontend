'use client'

import { useEffect, useState } from 'react'
import BidangTabs from './sections/BidangTabs'
import Hero from './sections/Hero'

export const WallOfFameModule = () => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const page = localStorage.getItem('wallOfFamePage')
    if (page) {
      setPage(parseInt(page))
    }
  }, [page])

  return (
    <>
      {page === 0 && (
        <Hero
          onClick={() => {
            setPage(1)
            localStorage.setItem('wallOfFamePage', '1')
          }}
        />
      )}
      {page === 1 && <BidangTabs />}
    </>
  )
}
