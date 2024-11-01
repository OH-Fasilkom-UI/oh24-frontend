'use client'

import { useState } from 'react'
import BidangTabs from './sections/BidangTabs'
import Hero from './sections/Hero'

export const WallOfFameModule = () => {
    const [page, setPage] = useState(0)

    return (
        <>
            {page === 0 && <Hero onClick={() => setPage(1)} />}
            {page === 1 && <BidangTabs />}
        </>
    )
}