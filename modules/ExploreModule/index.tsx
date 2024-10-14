import ExploreAlumni from './components/ExploreAlumni'
import ExploreContact from './components/ExploreContact'
import ExploreFacility from './components/ExploreFacility'
import ExploreFasilkomPrograms from './components/ExploreFasilkomPrograms'
import ExploreHero from './components/ExploreHero'
import { JalurMasukSectionDesktop } from './components/JalurMasuk/JalurMasukSectionDesktop'
import { JalurMasukSectionMobile } from './components/JalurMasuk/JalurMasukSectionMobile'
import PacilTour from './components/PacilTour'
import { PrestasiSection } from './components/PrestasiSection'
import { RegistOrtuPopup } from './components/RegisOrtuPopup'

const ExploreModule = () => {
  return (
    <main className="flex flex-col z-20 w-full relative">
      <RegistOrtuPopup />
      <div className="relative flex-grow">
        <ExploreHero />
        <ExploreAlumni />
        <PrestasiSection />
        <ExploreFasilkomPrograms />
        <ExploreFacility />
        <div className="lg:block hidden" id="jalur-masuk">
          <JalurMasukSectionDesktop />
        </div>
        <div className="lg:hidden block" id="jalur-masuk">
          <JalurMasukSectionMobile />
        </div>
        <PacilTour />
        <ExploreContact />
      </div>
    </main>
  )
}

export default ExploreModule
