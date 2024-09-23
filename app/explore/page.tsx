import Footer from '@/components/elements/Footer'
import ExploreAlumni from '@/modules/ExploreFasilkomModule/sections/ExploreAlumni'
import ExploreFasilkomPrograms from '@/modules/ExploreFasilkomModule/sections/ExploreFasilkomPrograms'
import ExploreModule from '@/modules/ExploreModule'
import PrestasiModule from '@/modules/PrestasiModule'

const Page = () => {
    return (
        <main className="relative">
            <ExploreModule />
            <PrestasiModule />
            <ExploreAlumni />
            <ExploreFasilkomPrograms />
            {/* <Footer /> */}
        </main>
    )
}

export default Page
