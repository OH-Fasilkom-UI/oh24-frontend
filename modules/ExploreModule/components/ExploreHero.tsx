'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const ExploreHero = () => {
  const [isJalurMasukHovered, setIsJalurMasukHovered] = useState(false)
  const [isJurusanHovered, setIsJurusanHovered] = useState(false)
  const [isFacilityHovered, setIsFacilityHovered] = useState(false)
  const [isAlumniHovered, setIsAlumniHovered] = useState(false)
  const [isAchievementHovered, setIsAchievementHovered] = useState(false)

  return (
    <section className="relative xl:mt-[194px] mt-[120px] flex flex-col">
      <div className="relative flex flex-col text-center justify-center gap-3 sm:gap-7 md:gap-5 xl:gap-10 px-10 md:px-10 lg:px-32 z-10">
        <h1 className="font-bold font-riffic text-Text/TextLightBG leading-[48px] text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-3xl max-sm:text-2xl max-md:leading-[36px] lg:whitespace-nowrap tracking-widest">
          Fakultas Ilmu Komputer
        </h1>
        <div className="max-w-[390px] lg:max-w-[480px] mx-auto">
          <p className="font-bold font-tex-gyre text-Text/TextLightBG text-sm leading-tight min-[420px]:text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl text-center">
            Selamat Datang di Fakultas Ilmu Komputer Universitas Indonesia –
            Pusat keunggulan di bidang teknologi dan informasi.
          </p>
        </div>
      </div>
      <div className="w-screen absolute top-[68px] min-[370px]:top-[42px] min-[480px]:top-0 min-[520px]:-top-[42px] md:top-0 lg:-top-[32px] min-[1576px]:-top-[86px]">
        <div className="w-full">
          <Image
            src={
              isJalurMasukHovered
                ? '/explore-hero/jalurmasuk-shadow.svg'
                : '/explore-hero/jalurmasuk.svg'
            }
            alt="jalur-masuk"
            width={100}
            height={50}
            className={`absolute ${isJalurMasukHovered ? 'top-[40.4%]' : 'top-[40.7%]'} max-md:w-[14vw] w-[11.6vw] max-md:h-[24vw] h-auto left-[5%] md:left-[22.2%] max-md:top-[45%] max-md:opacity-0 block object-contain z-9999 duration-100`}
            onMouseEnter={() => setIsJalurMasukHovered(true)}
            onMouseLeave={() => setIsJalurMasukHovered(false)}
          />
          <Image
            src={
              isJurusanHovered
                ? '/explore-hero/jurusan-shadow.svg'
                : '/explore-hero/jurusan.svg'
            }
            alt="jurusan"
            width={100}
            height={50}
            className={`absolute ${isJurusanHovered ? 'top-[33.2%]' : 'top-[33.4%]'} max-md:w-[12.2vw] w-[8.6vw] h-auto left-[11%] md:left-[31.3%] max-md:top-[35%] max-md:opacity-0 block object-contain z-9999 duration-100`}
            onMouseEnter={() => setIsJurusanHovered(true)}
            onMouseLeave={() => setIsJurusanHovered(false)}
          />
          <Image
            src={
              isFacilityHovered
                ? '/explore-hero/facility-shadow.svg'
                : '/explore-hero/facility.svg'
            }
            alt="facility"
            width={100}
            height={50}
            className={`absolute ${isFacilityHovered ? 'top-[35.3%]' : 'top-[35.5%]'} max-md:w-[9vw] w-[5vw] h-auto right-[12%] md:right-[34.7%] max-md:top-[37%] max-md:opacity-0 block object-contain z-9999 duration-100`}
            onMouseEnter={() => setIsFacilityHovered(true)}
            onMouseLeave={() => setIsFacilityHovered(false)}
          />
          <Image
            src={
              isAlumniHovered
                ? '/explore-hero/alumni-shadow.svg'
                : '/explore-hero/alumni.svg'
            }
            alt="alumni"
            width={100}
            height={50}
            className={`absolute ${isAlumniHovered ? 'top-[44.7%]' : 'top-[45%]'} max-md:w-[11vw] w-[7.6vw] h-auto right-[19%] md:right-[36.5%] max-md:top-[49%] max-md:opacity-0 block object-contain z-9999 duration-100`}
            onMouseEnter={() => setIsAlumniHovered(true)}
            onMouseLeave={() => setIsAlumniHovered(false)}
          />
          <Image
            src={
              isAchievementHovered
                ? '/explore-hero/achievement-shadow.svg'
                : '/explore-hero/achievement.svg'
            }
            alt="achievement"
            width={100}
            height={50}
            className={`absolute ${isAchievementHovered ? 'top-[48.2%]' : 'top-[48.4%]'} max-md:w-[21vw] w-[12.7vw] h-auto right-[38%] md:right-[43.8%] max-md:top-[53%] max-md:opacity-0 block object-contain z-9999 duration-100`}
            onMouseEnter={() => setIsAchievementHovered(true)}
            onMouseLeave={() => setIsAchievementHovered(false)}
          />
          <Image
            src="/explore-hero.png"
            alt="city"
            width={1671.88}
            height={1333}
            className="w-full max-md:hidden block object-contain"
          />
          <Image
            src="/explore-hero-mobile.png"
            alt="city"
            width={774.61}
            height={617.61}
            className="w-full max-md:block hidden object-contain"
          />
          <div className="absolute bottom-[8%] min-[520px]:bottom-[16%] md:bottom-[24%] flex flex-col w-full justify-center gap-3 my-5 lg:my-20 items-center">
            <Link href="" target="_blank">
              <Button className="bg-Misc/Ziggurat/400 max-md:text-[12px] lg:text-xl">
                Lihat Pencapaian Kami
              </Button>
            </Link>
            <Link href="https://cs.ui.ac.id/" target="_blank">
              <Button className="bg-BlueRegion/Cornflower/50 text-Text/TextLightBG md:w-full max-md:text-[12px] lg:text-xl">
                Kunjungi Website Resmi Fasilkom UI
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full aspect-[0.65] min-[400px]:aspect-[0.62] min-[520px]:aspect-[0.68] md:aspect-[1.25] top-[68px] min-[370px]:top-[42px] min-[480px]:top-0 min-[520px]:-top-[42px] md:top-0 lg:-top-[32px] min-[1576px]:-top-[86px]"></div>
    </section>
  )
}

export default ExploreHero
