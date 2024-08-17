'use client'
import React from 'react'
import Card from '@/components/ui/Card'
import AmbassadorHeroContent from './AmbassadorHeroContent'
import bg from '@/public/kota-di-ambassador.png'
import mbg from '@/public/ambassador-kecil.png'

const AmbassadorHero = () => {
  return (
    <div className="xl:mt-[194px] max-sm:mt-[100px] md:mt-[140px] flex flex-col">
      <div className="flex flex-col">
        <Card
          title=""
          className="max-md:hidden block"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '100% 75%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <AmbassadorHeroContent />
        </Card>
        <Card
          title=""
          className="max-md:block hidden"
          style={{
            backgroundImage: `url(${mbg.src})`,
            backgroundSize: '100% 50%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <AmbassadorHeroContent />
        </Card>
      </div>
    </div>
  )
}

export default AmbassadorHero
