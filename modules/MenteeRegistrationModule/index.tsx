'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import AfterRegistrationModule from '../AfterRegistrationModule'
import { PickEventModule } from '../RegisterPickEventModule'
import { Questioner } from './sections/Questioner'
import { WarnModal } from './sections/WarnModal'

export const MenteeRegistrationModule = () => {
  const [page, setPage] = useState(0)
  return (
    <>
      <main
        className={cn(
          'flex items-center justify-center',
          (page === 0 || page === 1) && 'min-h-screen'
        )}
      >
        {page === 0 && <WarnModal onClick={() => setPage(page + 1)} />}
        {page === 1 && <Questioner onClick={() => setPage(page + 1)} />}
      </main>
      <main>
        {page === 2 && <PickEventModule onClick={() => setPage(page + 1)} />}
        {page === 3 && <AfterRegistrationModule />}
      </main>
    </>
  )
}
