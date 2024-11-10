// import Footer from '@/components/elements/Footer'
// import MerchandiseDetails from '@/modules/MerchandiseModule/sections/MerchandiseDetails'
import { redirect } from 'next/navigation'

interface MerchandisePageProps {
  params: {
    productId: string
  }
}

const MerchandisePage = ({ params }: MerchandisePageProps) => {
  return redirect('/')
  // return (
  //   <main className="relative">
  //     <MerchandiseDetails productId={params.productId} />
  //     <div className="mt-[1420px] sm:mt-[900px] lg:mt-[1100px]">
  //       <Footer />
  //     </div>
  //   </main>
  // )
}

export default MerchandisePage
