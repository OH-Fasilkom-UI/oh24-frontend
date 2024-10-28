'use client'
import React, { useState, useEffect } from 'react'
import { Hero } from './sections/Hero'
import { Merchandise } from './sections/Merchandise'

export const MerchandiseLandingModule = () => {
  const [page, setPage] = useState(1)
  const handleChangePage = () => {
    setPage(2)
    localStorage.setItem('merchandisePage', '2')
  }

  useEffect(() => {
    checkPage()
  }, [])

  const checkPage = () => {
    const page = localStorage.getItem('merchandisePage')
    if (page) {
      setPage(parseInt(page))
    }
  }
  return (
    <main className="min-h-[100vh]">
      {page === 1 && <Hero onClick={() => handleChangePage()} />}
      {page === 2 && <Merchandise />}
    </main>
  )
}
