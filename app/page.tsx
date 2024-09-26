import Footer from '@/components/elements/Footer'
import LandingPageModule from '@/modules/LandingPageModule'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <main className="relative">
      <LandingPageModule />

      <div className="mt-[900px]">
        <Footer />
      </div>
    </main>
  )
}
