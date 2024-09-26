import Footer from '@/components/elements/Footer'
import { PickEventModule } from '@/modules/RegisterPickEventModule'

const Page = () => {
    return (
        <main className='max-w-[1920px] overflow-x-hidden'>
            <PickEventModule />
            <Footer />
        </main>
    )
}

export default Page
