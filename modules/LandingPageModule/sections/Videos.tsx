import Card from '@/components/ui/Card'
import KapalKiri from '@/public/kapal-kiri2.png'
import CityBackground from '@/public/kota-landingpage.png'
import Image from 'next/image'

const Videos = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-32 lg:pb-72">
      <Image
        src={KapalKiri}
        alt="kapal-kiri"
        className="left-0 min-w-[150px] absolute animate-float-vertical z-20 w-[20vw] h-auto"
      />
      <div className="flex flex-col justify-center items-center">
        {/* Background Image */}
        <Image
          src={CityBackground}
          alt="background"
          className="h-full object-cover object-top absolute top-0 -z-10"
        />

        {/* Heading */}
        <h1 className="text-center text-Text/TextLightBG font-riffic mb-2 sm:mb-4 text-[36px] sm:text-[48px] tracking-wider">
          Check out Our Videos!
        </h1>

        {/* Video Cards */}
        <div className="relative z-10 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2  items-center sm:gap-12 gap-6 p-4 mt-8">
          {/* First Card */}
          <div className="flex justify-center items-center">
            <Card className="flex bg-opacity-90 w-full sm:w-[450px] rounded-[18px] shadow-lg shadow-blue-900">
              <div className="flex flex-col items-center">
                <p className="text-white text-lg md:text-[25px] font-semibold mb-6">
                  Fasilkom Rewind
                </p>
                <iframe
                  className="rounded-[10px] h-[200px] sm:h-[200px] "
                  width="100%"
                  height="120%"
                  src="https://www.youtube.com/embed/VmN6he5Yct4"
                  title="Fasilkom Rewind Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>

          {/* Second Card */}
          <div className="flex justify-center items-center">
            <Card className="flex bg-opacity-90 w-full sm:w-[450px] rounded-[18px] shadow-lg shadow-blue-900">
              <div className="flex flex-col items-center">
                <p className="text-white text-lg md:text-[25px] font-semibold mb-6">
                  Grand Opening
                </p>
                <iframe
                  className="rounded-[10px] h-[200px] sm:h-[200px]"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/I17YAEdLTxY"
                  title="Fasilkom Rewind Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Image
        src="/dua-mobil-kanan.png"
        alt="dua-mobil-kanan"
        width={600}
        height={100}
        className="-right-56 md:-right-28 bottom-0 q min-w-[150px] absolute animate-float-vertical z-20 lg:w-[500px] w-[300px] h-auto"
      />
    </section>
  )
}

export default Videos
