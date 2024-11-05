import Footer from '@/components/elements/Footer'
import MerchandiseDetails from '@/modules/MerchandiseModule/sections/MerchandiseDetails'

interface MerchandisePageProps {
  params: {
    productId: string
  }
}

const MerchandisePage = ({ params }: MerchandisePageProps) => {
  return (
    <main className="relative">
      <MerchandiseDetails productId={params.productId} />
      <div className="mt-[2000px] sm:mt-[1600px] lg:mt-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default MerchandisePage
