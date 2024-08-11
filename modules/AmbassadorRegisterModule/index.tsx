import React from 'react'
import bg from '@/public/wave-notfound.png'
import { CaseAndTugas } from './sections/CaseAndTugas'

export const AmbassadorRegisterModule = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="lg:px-20 px-8 py-28 pb-[60vh] md:pb-[100vh] min-h-[140vh] z-10"
    >
      <CaseAndTugas />
    </main>
  )
}
