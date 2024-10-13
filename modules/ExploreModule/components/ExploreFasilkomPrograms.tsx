'use client'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import scrollbar from '../animations/scrollbar.module.css'

const FlipCard = ({
  defaultIcon,
  hoverIcon,
  background,
  title,
  children,
}: {
  defaultIcon: ReactNode
  hoverIcon: ReactNode
  background: ReactNode
  title: string
  children: ReactNode
}) => {
  const [opened, setOpened] = useState(false)

  return (
    <div
      id="jurusan"
      className="relative aspect-square group cursor-pointer w-full max-sm:max-h-96 max-sm:max-w-96"
      onClick={() => setOpened(!opened)}
    >
      <div
        className={`${opened ? 'rotate-x-180' : 'rotate-x-0'} z-30 absolute w-full h-full top-0 left-0 bg-[#2E3881E5] rounded-[5%] backface-hidden transition-transform duration-500 flex items-center flex-col justify-center gap-4 xl:gap-8 overflow-hidden shadow-[4px_4px_12px_#62A3CB80,-4px_-4px_12px_#4E56C480]`}
      >
        {defaultIcon}
        {hoverIcon}
        <h2 className="font-tex-gyre font-bold text-[24px] lg:text-[30px] text-Misc/Mischka/50">
          {title}
        </h2>
        {background}
      </div>
      <div
        className={`${opened ? 'rotate-x-0' : 'rotate-x-180'} z-50 absolute w-full h-full top-0 left-0 bg-[#2E3881E5] rounded-[5%] backface-hidden transition-transform duration-500 pl-10 pr-4 md:pl-12 md:pr-5 py-10 lg:pl-16 lg:pr-6 lg:py-12 overflow-hidden shadow-[4px_4px_12px_#62A3CB80,-4px_-4px_12px_#4E56C480]`}
      >
        <div
          className={`${opened ? 'pointer-events-auto' : 'pointer-events-none'} ${scrollbar.darkScrollbar} xl:text-3xl md:text-2xl text-xl overflow-y-auto h-full w-full overflow-x-hidden pr-6 md:pr-7 lg:pr-8`}
        >
          <h2 className="text-center mb-4 md:mb-6 xl:mb-8 font-tex-gyre font-bold text-Misc/Mischka/50">
            {title}
          </h2>
          <p className="font-tex-gyre text-Text/TextDarkBG text-justify text-lg md:text-xl">
            {children}
          </p>
        </div>
        {background}
      </div>
    </div>
  )
}

const ExploreFasilkomPrograms = () => {
  const defaultIcon1 = (
    <div className="relative h-[173.82px] w-[180px] mt-[6.179px] md:h-[202.79px] md:w-[210px] md:mt-[7.209px] lg:h-[260.731px] lg:w-[270px] lg:mt-[9.269px] block group-hover:hidden">
      <Image
        src="/panda-1-passive.png"
        alt="panda-laptop"
        fill
        sizes="none"
        className="object-contain block"
      />
    </div>
  )
  const hoverIcon1 = (
    <div className="relative h-[169.859px] w-[180px] mt-[9.47px] mb-[0.674px] md:h-[198.169px] md:w-[210px] md:mt-[11.04px] md:mb-[0.786px] lg:h-[254.789px] lg:w-[270px] lg:mt-[14.2px] lg:mb-[1.011px] hidden group-hover:block">
      <Image
        src="/panda-1-active.png"
        alt="panda-laptop"
        fill
        sizes="none"
        className="object-contain"
      />
    </div>
  )
  const background1 = (
    <div className="absolute w-full h-[68.8%] left-0 -bottom-[2%] -z-10 opacity-30">
      <Image
        src="/programs-city-1.png"
        alt="city-background"
        fill
        sizes="none"
        className="object-contain"
      />
    </div>
  )
  const defaultIcon2 = (
    <div className="relative h-[180px] w-[130.67px] md:h-[210px] md:w-[152.444px] lg:h-[270px] lg:w-[196px] block group-hover:hidden scale-[108%] left-[2%] bottom-[3%]">
      <Image
        src="/panda-2-passive.png"
        alt="panda-laptop"
        fill
        sizes="none"
        className="object-contain block"
      />
    </div>
  )
  const hoverIcon2 = (
    <div className="relative h-[180px] w-[130.67px] md:h-[210px] md:w-[152.444px] lg:h-[270px] lg:w-[196px] hidden group-hover:block scale-[108%] left-[2%] bottom-[3%]">
      <Image
        src="/panda-2-active.png"
        alt="panda-laptop"
        fill
        sizes="none"
        className="object-contain block"
      />
    </div>
  )
  const background2 = (
    <div className="absolute w-full h-[68.0%] left-0 -bottom-[2%] -z-10 opacity-30">
      <Image
        src="/programs-city-2.png"
        alt="city-background"
        fill
        sizes="none"
        className="object-contain"
      />
    </div>
  )

  return (
    <div className="my-20 px-5 md:px-20">
      <h1 className="text-center text-Text/TextLightBG font-riffic mb-8 sm:mb-12 text-[30px] sm:text-[48px] tracking-wider">
        Program Studi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 xl:gap-24 lg:gap-20 md:gap-12 sm:gap-6 gap-12 justify-items-center">
        <div className="absolute w-[150px] h-[103.75px] max-sm:top-[47%] max-sm:left-[60%] sm:right-2 sm:top-40 md:w-[180px] md:h-[124.05px] md:right-4 md:top-36 lg:w-[240px] lg:h-[165.87px] lg:top-32 lg:right-12 xl:w-[270px] xl:h-[186.6px] xl:right-20 xl:top-28 z-40">
          <Image
            src="/drone.png"
            alt="drone"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <FlipCard
          defaultIcon={defaultIcon1}
          hoverIcon={hoverIcon1}
          background={background1}
          title="Ilmu Komputer"
        >
          Jurusan ini cocok buat kamu yang suka ngoding dan penasaran dengan
          dunia teknologi komputasi. Di sini, kamu bakal belajar berbagai hal
          mulai dari pemrograman, algoritma, kecerdasan buatan, hingga keamanan
          informasi. Lulusan Ilmu Komputer Fasilkom UI biasanya menjadi
          pengembang perangkat lunak, peneliti di bidang komputasi, atau ahli di
          bidang keamanan siber.
        </FlipCard>
        <FlipCard
          defaultIcon={defaultIcon2}
          hoverIcon={hoverIcon2}
          background={background2}
          title="Sistem Informasi"
        >
          Kalau kamu tertarik dengan bagaimana teknologi bisa mempermudah bisnis
          dan organisasi, jurusan ini untuk kamu. Di Sistem Informasi, kamu akan
          mempelajari bagaimana mendesain, mengembangkan, dan mengelola sistem
          informasi yang mendukung kinerja perusahaan. Lulusan jurusan ini
          biasanya bekerja sebagai analis sistem, konsultan IT, atau manajer
          proyek teknologi.
        </FlipCard>
      </div>
    </div>
  )
}

export default ExploreFasilkomPrograms
