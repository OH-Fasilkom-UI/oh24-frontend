'use client'
import React from 'react'
import Card from '@/components/ui/Card'
import IsiCardAmbassador from './IsiCardAmbassador'
import bg from '@/public/kota-di-ambassador.png'
import mbg from '@/public/ambassador-kecil.png'

const AmbassadorCard = () => {
  return (
    <div className="xl:mt-[194px] max-sm:mt-[100px] md:mt-[140px] flex flex-col">
      <div className="flex flex-col mx-3 sm:mx-5 md:mx-10 lg:mx-20 min-[2000px]:mx-[400px]">
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
          <IsiCardAmbassador />
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
          <IsiCardAmbassador />
        </Card>
      </div>
    </div>
  )
}

export default AmbassadorCard
