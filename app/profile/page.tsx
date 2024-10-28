import Footer from '@/components/elements/Footer'
import { ProfilePageModule } from '@/modules/ProfilePageModules'

function page() {
  return (
    <>
      <ProfilePageModule />
      <div className="mt-96">
        <Footer />
      </div>
    </>
  )
}

export default page
