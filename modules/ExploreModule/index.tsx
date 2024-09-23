import ExploreAlumni from './components/ExploreAlumni'
import ExploreHero from './components/ExploreHero'
import { PrestasiSection } from './components/PrestasiSection'

const ExploreModule = () => {
  return (
    <main className="flex flex-col z-20 w-full relative">
      <div className="relative flex-grow">
        <ExploreHero />
        <ExploreAlumni />
        <PrestasiSection />
      </div>
    </main>
  )
}

export default ExploreModule
