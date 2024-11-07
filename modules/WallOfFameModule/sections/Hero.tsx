import Button from '@/components/ui/Button'
import HeroBackground from '@/public/WallOfFame/HeroBackground.png'
import Image from 'next/image'

const Hero = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <Image
        src={HeroBackground}
        alt="Hero Wall of Fame"
        width={2000}
        className="absolute top-0 left-0 w-full h-full object-cover max-sm:brightness-75"
      />
      <div className="flex-1/2 sm:flex-1"></div>
      <div className="px-5 flex-1 z-10 flex flex-col gap-2 md:gap-4">
        <h2 className="text-white font-tex-gyre font-bold text-xl md:text-3xl">
          Open House Fasilkom
        </h2>
        <h1 className="text-4xl md:text-6xl font-riffic text-gray-300 tracking-wide">
          Wall of Fame
        </h1>
        <p className="py-1 md:py-2 font-tex-gyre text-xs md:text-sm tracking-wider text-justify text-gray-200 max-w-xl">
          Wall of Fame Open House Fasilkom UI 2024 hadir untuk mengapresiasi
          individu-individu yang telah menciptakan inovasi berharga di
          masyarakat. Melalui platform ini, kisah inspiratif terkait perjuangan,
          kreativitas, dan dedikasi mereka ditampilkan sebagai sumber inspirasi
          dan motivasi bagi siswa-siswi SMA dan mahasiswa Fasilkom UI yang masih
          mencari passion mereka serta untuk turut berkontribusi dalam masa
          depan teknologi.
        </p>
        <Button className="bg-[#4141EA] text-white" onClick={onClick}>
          View More
        </Button>
      </div>
    </div>
  )
}

export default Hero
