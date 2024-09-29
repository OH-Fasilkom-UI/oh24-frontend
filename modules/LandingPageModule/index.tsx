import Testimonials from '@/components/elements/Testimonials'
import Image from 'next/image'
import LandingPageHero from './components/LandingPageHero'
import { TESTIMONY_DATA } from './constant'
import FAQ from './sections/FAQ'
import LandingPageTimeline from './sections/LandingPageTimeline'
import Partners from './sections/Partners'
import Videos from './sections/Videos'
import WhatIsOpenHouse from './sections/WhatIsOpenHouse'

const LandingPageModule = () => {
  return (
    <main className="flex flex-col z-20 w-full relative overflow-hidden pb-[800px]">
      <div className="relative pb-16 md:pb-24 flex-grow px-5  md:px-10 mt-20 lg:mt-0 lg:px-32">
        <div className="min-h-screen bg-[#075C9D] -z-50 absolute inset-0 m-auto mt-[27rem] sm:mt-[46rem] lg:mt-[48rem]"></div>
        <LandingPageHero />
      </div>
      <WhatIsOpenHouse />
      <LandingPageTimeline />
      <Videos />
      <div className="relative">
        <Image
          src={'/bg-testimony-partners-faq.png'}
          alt="Gedung Kiri"
          width={4000}
          height={4000}
          className="absolute top-0 left-0 w-full -translate-y-28 sm:-translate-y-48 md:-translate-y-72 lg:-translate-y-96 -z-50"
        />
        <div className="px-5 md:px-10 lg:px-32">
          <h1 className="text-[#2E3881] text-2xl md:text-5xl text-center mb-5 md:mb-10">
            Testimony
          </h1>
          <Testimonials testimonyData={TESTIMONY_DATA} />
        </div>
      </div>
      <Partners />
      <FAQ />
    </main>
  )
}

export default LandingPageModule
