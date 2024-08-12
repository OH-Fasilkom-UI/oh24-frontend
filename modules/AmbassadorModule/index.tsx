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
import Image from 'next/image'

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
      <div className="relative flex-grow mt-10">
        <AmbassadorCard />
        <Image
          src="/pesawat-kiri.png"
          alt="pesawat-kiri"
          width={100}
          height={100}
          className="lg:left-10 max-[400px]:w-[70px] max-lg:top-0 max-md:left-0 lg:top-[100px] min-[2000px]:mx-[300px] absolute"
        />
        <Image
          src="/pesawat-kiri.png"
          alt="pesawat-kiri"
          width={236}
          height={183}
          className="left-0 top-1/4 absolute hidden lg:block min-[2000px]:mx-[250px]"
        />
        <Image
          src="/pesawat-kanan.png"
          alt="pesawat-kanan"
          width={200}
          height={200}
          className="absolute hidden lg:block right-0 top-[100px] min-[2000px]:mx-[250px] min-[2000px]:w-[300px]"
        />
      </div>
      <WhatsAmbassador />
      <div className="max-lg:block hidden mt-[100px]">
        <AmbassadorProgramsMobile />
      </div>
      <div className="max-lg:hidden block mt-[100px]">
        <p className="text-Text/TextLightBG font-riffic mb-10 max-md:text-[16px] md:text-[24px] max-md:leading-6 text-center font-bold xl:text-[36px] leading-[40px] tracking-widest">
          Special Programs for <br className="max-md:block hidden" /> Open House
          Ambassador
        </p>
        <AmbassadorProgamsDesktop />
      </div>
      <div className="mt-20 min-[2300px]:px-[200px] ">
        <AmbassadorCarousel />
      </div>
      <div className="max-sm:mx-5 md:mx-10 lg:mx-[80px] py-20 mt-20 flex flex-col gap-y-10 min-[2000px]:px-[500px]">
        <p className="font-riffic text-center text-Text/TextLightBG font-bold text-[36px] max-sm:text-[20px] max-md:text-[24px] leading-10 tracking-widest">
          Let&rsquo;s Hear Testimony From Ambassador
        </p>
        <Testimonials />
      </div>
      <AmbassadorHelp />
      <AmbassadorAccordion />
      <div className="lg:mx-[120px] max-lg:mt-[100px] max-sm:mx-5 md:mx-20 xl:mt-[200px] min-[2000px]:mt-[300px] mb-[600px] xl:mb-[800px] min-[2000px]:mb-[1500px]">
        <ContactPerson />
      </div>
    </div>
  )
}

export default AmbassadorModule
