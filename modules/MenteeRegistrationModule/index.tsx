'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import AfterRegistrationModule from '../AfterRegistrationModule'
import { PickEventModule } from '../RegisterPickEventModule'

export const MenteeRegistrationModule = () => {
  const [page, setPage] = useState(0)
  return (
    <>
      <main
        className={cn(
          'flex items-center justify-center',
        )}
      >
        {/* {page === 0 && <WarnModal onClick={() => setPage(page + 1)} />} */}
        {/* {page === 1 && <Questioner onClick={() => setPage(page + 1)} />} */}
      </main>
      <main>
        {page === 0 && <PickEventModule onClick={() => setPage(page + 1)} />}
        {page === 1 && <AfterRegistrationModule />}
      </main>
    </>
  )
}
