import LandingPageHero from './components/LandingPageHero'
import Image from 'next/image'
import glow from '@/public/landing-page-glow.png'
import cities from '@/public/landing-page-cities.png'
import bridge from '@/public/landing-page-bridge.png'
import train1 from '@/public/landing-page-train1.png'
import train2 from '@/public/landing-page-train2.png'
import effect from '@/public/landing-page-effect.png'
import styles from './moving.module.css'

const LandingPageModule = () => {
  return (
    <main className="min-h-screen flex flex-col z-20 w-full relative overflow-hidden pb-[800px] ">
      <div className="relative h-[200vh] flex-grow px-5  md:px-10 mt-20 lg:mt-0 lg:px-32 ">
        <Image
          src={effect}
          alt="effect"
          width={1400}
          className="object-contain z-20 absolute inset-0 m-auto mt-0"
        />
        <Image
          src={glow}
          alt="glow"
          width={900}
          height={900}
          className="object-contain -z-40 absolute inset-0 m-auto mt-0"
        />
        <Image
          src={cities}
          alt="city"
          width={1920}
          height={1080}
          className="object-contain -z-30 absolute left-0 m-auto mt-[22rem] sm:mt-[28rem] lg:mt-[26rem] max-w-[700px]  sm:max-w-[1000px]  lg:max-w-[1600px] max-h-[1080px]"
        />
        <Image
          src={bridge}
          alt="bridge"
          className="object-contain -z-10 absolute inset-0 m-auto mt-[29.8rem] sm:mt-[40rem] lg:mt-[44rem] max-w-[700px]  sm:max-w-[1000px] lg:max-w-[1600px] max-h-[1080px]"
        />
        <Image
          src={train1}
          alt="train1"
          width={900}
          height={900}
          className={`object-contain -z-20 absolute  mt-[28rem] sm:mt-[38rem] lg:mt-[40rem] right-0 max-w-[300px] sm:max-w-[400px] lg:max-w-[800px] max-h-[300px] ${styles.animateMove}`}
        />
        <Image
          src={train2}
          alt="train2"
          width={500}
          height={500}
          className={`object-contain -z-30 absolute mt-[29rem] sm:mt-[39rem] lg:mt-[42rem] right-0   max-w-[200px] sm:max-w-[300px] lg:max-w-[800px] max-h-[300px] animate-move2 ${styles.animateMove2}`}
        />
        <div className="min-h-screen bg-[#075C9D] -z-50 absolute inset-0 m-auto mt-[30rem] sm:mt-[40rem]  lg:mt-[46rem]"></div>
        <LandingPageHero />
      </div>
    </main>
  )
}

export default LandingPageModule
