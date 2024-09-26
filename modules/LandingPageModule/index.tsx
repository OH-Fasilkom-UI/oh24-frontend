import WhatIsOpenHouse from "./sections/WhatIsOpenHouse";
import LandingPageHero from './components/LandingPageHero'
import LandingPageTimeline from './sections/LandingPageTimeline'

const LandingPageModule = () => {
  return (
    <main className="min-h-screen flex flex-col z-20 w-full relative overflow-hidden pb-[800px] ">
      <div className="relative h-[200vh] flex-grow px-5  md:px-10 mt-20 lg:mt-0 lg:px-32">
        <div className="min-h-screen bg-[#075C9D] -z-50 absolute inset-0 m-auto mt-[27rem] sm:mt-[46rem] lg:mt-[48rem]"></div>
        <LandingPageHero />
        <LandingPageTimeline />
        <WhatIsOpenHouse />
      </div>
    </main>
  )
}

export default LandingPageModule
