import { DetailFormModule } from '@/modules/DetailFormModule'
import Footer from '@/components/elements/Footer'
import React from 'react'

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <div className="z-10 relative">
        <DetailFormModule />
      </div>
      <div className="w-full absolute bottom-0 z-0">
        <Footer />
      </div>
    </div>
  )
}

export default Page
