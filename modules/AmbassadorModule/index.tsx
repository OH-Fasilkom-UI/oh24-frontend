import React from 'react'
import AmbassadorCard from './components/AmbassadorCard'
import WhatsAmbassador from './sections/WhatsAmbassador'
import AmbassadorCarousel from './components/AmbassadorCarousel'
import Testimonials from '@/components/elements/Testimonials'
import AmbassadorHelp from './sections/AmbassadorHelp'
import AmbassadorAccordion from './components/AmbassadorAccordion'
import ContactPerson from '@/components/elements/ContactPerson'
import bg from '@/public/wave-notfound.png'
import AmbassadorProgramsMobile from './sections/AmbassadorProgramsMobile'
import AmbassadorProgamsDesktop from './sections/AmbassadorProgamsDesktop'

const AmbassadorModule = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col"
    >
      <AmbassadorCard />
      <WhatsAmbassador />
      <div className="max-lg:block hidden">
        <AmbassadorProgramsMobile />
      </div>
      <div className="max-lg:hidden block">
        <AmbassadorProgamsDesktop />
      </div>
      <AmbassadorCarousel />
      <div className="max-sm:mx-5 md:mx-10 lg:mx-[80px] py-20 flex flex-col gap-y-10">
        <p className="font-riffic text-center text-Text/TextLightBG font-bold text-[36px] max-sm:text-[20px] max-md:text-[24px] leading-10 tracking-widest">
          Let&rsquo;s Hear Testimony From Ambassador
        </p>
        <Testimonials />
      </div>
      <AmbassadorHelp />
      <AmbassadorAccordion />
      <div className="lg:mx-[120px] max-sm:mx-5 md:mx-20 mt-20 mb-[600px] xl:mb-[800px] min-[2000px]:mb-[1500px]">
        <ContactPerson />
      </div>
    </div>
  )
}

export default AmbassadorModule
