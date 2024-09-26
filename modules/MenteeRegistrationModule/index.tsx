'use client'
import { WarnModal } from './sections/WarnModal'
import { Questioner } from './sections/Questioner'
import { useState } from 'react'

export const MenteeRegistrationModule = () => {
  const [page, setPage] = useState(0)
  return (
    <main className="min-h-screen flex items-center justify-center">
      {page === 0 && <WarnModal onClick={() => setPage(page + 1)} />}
      {page === 1 && <Questioner />}
    </main>
  )
}
