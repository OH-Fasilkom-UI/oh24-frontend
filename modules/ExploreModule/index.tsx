import ExploreAlumni from './components/ExploreAlumni'
import ExploreFacility from './components/ExploreFacility'
import ExploreFasilkomPrograms from './components/ExploreFasilkomPrograms'
import ExploreHero from './components/ExploreHero'
import { JalurMasukSectionDesktop } from './components/JalurMasuk/JalurMasukSectionDesktop'
import { JalurMasukSectionMobile } from './components/JalurMasuk/JalurMasukSectionMobile'
import { PrestasiSection } from './components/PrestasiSection'
import ExploreContact from './components/ExploreContact'

const ExploreModule = () => {
  return (
    <main className="flex flex-col z-20 w-full relative">
      <div className="relative flex-grow">
        <ExploreHero />
        <ExploreAlumni />
        <PrestasiSection />
        <ExploreFasilkomPrograms />
        <ExploreFacility />
        <div className="lg:block hidden">
          <JalurMasukSectionDesktop />
        </div>
        <div className="lg:hidden block">
          <JalurMasukSectionMobile />
        </div>
        <ExploreContact />
      </div>
    </main>
  )
}

export default ExploreModule
