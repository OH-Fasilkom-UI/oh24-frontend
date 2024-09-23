import Footer from '@/components/elements/Footer'
import ExploreModule from '@/modules/ExploreModule'
import ExplorePrestasiModule from '@/modules/PrestasiModule'

const Page = () => {
    return (
        <main className="relative">
            <ExploreModule />
            <ExplorePrestasiModule />

            <div
                className='mt-[700px] md:mt-[1200px]'
            >
                <Footer />
            </div>
        </main>
    )
}

export default Page
