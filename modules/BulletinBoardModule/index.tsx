import BulletinBoard from './sections/BulletinBoard'
import HeroSection from './sections/HeroSection'

const BulletinBoardModule = () => {
  return (
    <main className="px-5 md:px-10 lg:px-16 xl:px-20 pb-[450px] md:pb-[550px] lg:pb-[650px] xl:pb-[700px] 2xl:pb-[750px] max-w-[1440px] w-full mx-auto">
      <HeroSection />
      <BulletinBoard />
    </main>
  )
}

export default BulletinBoardModule
