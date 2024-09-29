import Footer from '@/components/elements/Footer'
import LandingPageModule from '@/modules/LandingPageModule'

export default function Home() {
  return (
    <main className="relative">
      <LandingPageModule />

      <div className="mt-[320px]">
        <Footer />
      </div>
    </main>
  )
}
