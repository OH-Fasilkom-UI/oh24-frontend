import Image from 'next/image'
import Button from '@/components/ui/Button'
import bgWallofFame from '@/public/bg-hero-walloffame.png'
import mobileBgWof from '@/public/mobile-bg-wof-hero.png'

const HeroWallofFame = () => {
    return (
        <div className='relative flex justify-center items-center h-screen overflow-x-hidden'>
            <Image
                src={bgWallofFame}
                alt='Hero Wall of Fame'
                width={2000}
                className='absolute hidden lg:block  max-w-none lg:right-[-45%] md:right-[-120%] lg:-bottom-72 md:-bottom-44'
            />
            <Image
                src={mobileBgWof}
                alt='Hero Wall of Fame'
                width={2000}
                className='absolute left-[-40%] lg:hidden max-w-none m min-[768px]:left-[-33%] min-[768px]:w-[1800px] '
            />
            <div className='absolute top-[20%] min-[820px]:top-[35%] min-[1182px]:left-[55%] min-[1180px]:left-[50%] min-[768px]:left-[42%] min-[1182px]:top-[42%] min-[1180px]:top-[55%] min-[1107px]:top-[65%] min-[1107px]:left-[45%]  md:top-[30%] text-left inline-block p-[15px]'>
                <h2 className='text-white font-tex-gyre font-bold text-[35px] lg:text-[36px] md:text-[40px]'>Open House Fasilkom</h2>
                <h1 className='text-[50px] lg:text-[60px]  md:text-[50px] font-riffic text-gray-300'>Wall of Fame</h1>
                <p className='text-[20px] md:text-[20px] lg:text-[18px] text-gray-200 max-w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button className="mt-4 bg-blue-700 text-white w-1/1/2">Come Visit!</Button>
            </div>
        </div>  
    )
}

export default HeroWallofFame