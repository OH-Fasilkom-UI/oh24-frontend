import Footer from '@/components/elements/Footer'
import LandingPageModule from '@/modules/LandingPageModule'
import HeroWallofFame from '@/modules/WallofFameModule/sections/WofHero'

export default function Home() {
  return (
    <main className="relative">
      <LandingPageModule />
      <Footer />
    </main>
  )
}
