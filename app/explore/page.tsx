import Footer from '@/components/elements/Footer'
import ExploreModule from '@/modules/ExploreModule'
const Page = () => {
  return (
    <main className="relative">
      <ExploreModule />
      <div className="mt-[700px] md:mt-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default Page
