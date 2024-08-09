import React from 'react'
import AmbassadorCard from './components/AmbassadorCard'
import WhatsAmbassador from './sections/WhatsAmbassador'
import AmbassadorCarousel from './components/AmbassadorCarousel'
import Testimonials from '@/components/elements/Testimonials'
import AmbassadorHelp from './sections/AmbassadorHelp'

const AmbassadorModule = () => {
  return (
    <div>
      <AmbassadorCard />
      <WhatsAmbassador />
      {/* <AmbassadorCarousel /> */}
      <div className="max-sm:mx-5 md:mx-10 lg:mx-[80px] py-20 flex flex-col gap-y-10">
        <p className="font-riffic text-center text-Text/TextLightBG font-bold text-[36px] leading-10 tracking-widest">
          Let’s Hear Testimony From Ambassador
        </p>
        <Testimonials />
      </div>
      <AmbassadorHelp />
    </div>
  )
}

export default AmbassadorModule
