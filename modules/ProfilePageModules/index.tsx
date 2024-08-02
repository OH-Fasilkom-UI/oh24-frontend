import React from 'react'
import bg from '@/public/wave-notfound.png'
import { DetailProfile } from './sections/DetailProfile'

export const ProfilePageModule = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-[160vh]"
    >
      <DetailProfile />
    </main>
  )
}