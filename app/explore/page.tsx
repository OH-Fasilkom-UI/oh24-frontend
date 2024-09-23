import Footer from '@/components/elements/Footer'
import ExploreAlumni from '@/modules/ExploreFasilkomModule/sections/ExploreAlumni'
import ExploreFasilkomPrograms from '@/modules/ExploreFasilkomModule/sections/ExploreFasilkomPrograms'
import ExploreModule from '@/modules/ExploreModule'
import ExploreFacility from '@/modules/ExploreModule/components/ExploreFacility'
import { JalurMasukModule } from '@/modules/JalurMasukModule'
import PrestasiModule from '@/modules/PrestasiModule'

const Page = () => {
    return (
        <main className="relative">
            <ExploreModule />
            <PrestasiModule />
            <ExploreAlumni />
            <ExploreFasilkomPrograms />
            <ExploreFacility />
            <JalurMasukModule />
            <footer
                className='mt-[350px] md:mt-[800px]'
            >
                <Footer />
            </footer>
        </main>
    )
}

export default Page
