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
      <div className="relative h-[200vh] flex-grow px-5  md:px-10 mt-20 lg:mt-0 lg:px-32">
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
          className="object-contain -z-40 absolute inset-0 m-auto mt-0 max-sm:mt-[50px] max-sm:scale-125 max-sm:max-w-auto sm:w-[900px] "
        />
        <Image
          src={cities}
          alt="city"
          width={1920}
          height={1080}
          className="object-contain -z-30 absolute -left-5 m-auto max-[400px]:-left-20 max-[400px]:mt-[20rem] mt-[18rem] sm:mt-[32rem] lg:mt-[30rem] xl:mt-[26rem] max-[400px]:max-w-[500px] max-w-[650px]  sm:max-w-[1000px] lg:max-w-[1300px]  xl:max-w-[1600px] max-h-[1080px]"
        />
        <Image
          src={bridge}
          alt="bridge"
          className="object-contain -z-10 absolute inset-0 m-auto mt-[26rem] sm:mt-[44rem] lg:mt-[45rem] max-[400px]:max-w-[500px] max-w-[650px] sm:max-w-[1000px] lg:max-w-[1300px] xl:max-w-[2100px] max-h-[1080px]"
        />
        <Image
          src={train1}
          alt="train1"
          width={900}
          height={900}
          className={`object-contain -z-20 absolute  mt-[24rem] sm:mt-[42rem] xl:mt-[40rem] right-0 max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] max-h-[300px] ${styles.animateMove}`}
        />
        <Image
          src={train2}
          alt="train2"
          width={500}
          height={500}
          className={`object-contain -z-30 absolute mt-[25rem] sm:mt-[43rem] lg:mt-[44rem] xl:mt-[43rem]  right-0   max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[800px] max-h-[300px] animate-move2 ${styles.animateMove2}`}
        />
        <div className="min-h-screen bg-[#075C9D] -z-50 absolute inset-0 m-auto mt-[27rem] sm:mt-[46rem] lg:mt-[48rem]"></div>
        <LandingPageHero />
      </div>
    </main>
  )
}

export default LandingPageModule
