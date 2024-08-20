import Footer from '@/components/elements/Footer'
import { DetailFormModule } from '@/modules/DetailFormModule'

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <div className="z-10 relative">
        <DetailFormModule />
      </div>
      <div className="w-full absolute bottom-0 z-0">
        <Footer />
      </div>
    </div>
  )
}

export default Page
