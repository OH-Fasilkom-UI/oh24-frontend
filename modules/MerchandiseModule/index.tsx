'use client'

import { useEffect, useState } from 'react'
import { Hero } from './sections/Hero'
import { Merchandise } from './sections/Merchandise'

export const MerchandiseModule = () => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const page = localStorage.getItem('merchandisePage')
    if (page) {
      setPage(parseInt(page))
    }
  }, [page])

  return (
    <main className="min-h-[100vh]">
      {page === 0 && (
        <Hero
          onClick={() => {
            setPage(1)
            localStorage.setItem('merchandisePage', '1')
          }}
        />
      )}
      {page === 1 && <Merchandise />}
    </main>
  )
}
