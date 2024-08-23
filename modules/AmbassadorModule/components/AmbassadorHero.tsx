'use client'
import Card from '@/components/ui/Card'
import mbg from '@/public/ambassador-kecil.png'
import bg from '@/public/kota-di-ambassador.png'
import AmbassadorHeroContent from './AmbassadorHeroContent'

const AmbassadorHero = () => {
  return (
    <div className="xl:mt-[194px] max-sm:mt-[100px] sm:mt-[120px] flex flex-col">
      <div className="flex flex-col">
        <Card
          title=""
          className="max-md:hidden block"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '100% 75%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <AmbassadorHeroContent />
        </Card>
        <Card
          title=""
          className="max-md:block hidden"
          style={{
            backgroundImage: `url(${mbg.src})`,
            backgroundSize: '100% 50%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <AmbassadorHeroContent />
        </Card>
      </div>
    </div>
  )
}

export default AmbassadorHero
