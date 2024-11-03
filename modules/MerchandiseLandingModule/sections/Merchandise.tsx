import Button from '@/components/ui/Button'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CardMerchandise } from '../constant'

export const Merchandise = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-full py-[15dvh] px-6 md:px-[93px]">
      <h1 className="md:text-t2 text-t5 text-[#B92677] font-riffic font-bold text-center">
        Merchandise Open House Fasilkom UI 2024
      </h1>
      <p className="md:text-t5 text-center text-t9 text-Text/TextLightBG font-bold">
        Open House Fasilkom UI merupakan acara tahunan yang diselenggarakan oleh
        BEM Fasilkom UI untuk memperkenalkan Fakultas Ilmu Komputer Universitas
        Indonesia kepada masyarakat luas dan membantu para calon mahasiswa dalam
        memantapkan pilihan program studinya di Fasilkom UI
      </p>
      <div className="bg-[#2E3881E5] rounded-[32px] w-full sm:h-[220px] md:h-[330px] h-[150px] md:mt-[60px] mt-7 relative flex flex-col justify-between items-center py-4 shadow-timeline">
        <div className="absolute w-full 2xl:h-[330px] lg:h-[240px] xl:h-[300px] sm:h-[150px] max-sm:hidden rounded-[32px] bottom-0">
          <Image
            alt="Banner"
            src="/Merchandise/MerchandiseBanner.png"
            fill
            sizes="none"
            className="object-contain rounded-[32px]"
          />
        </div>
        <div className="absolute w-full h-[120px] sm:hidden rounded-[32px] bottom-0">
          <Image
            alt="Banner"
            src="/Merchandise/MerchandiseBannerMob.png"
            fill
            sizes="none"
            className="object-cover rounded-[32px]"
          />
        </div>
        <div className="absolute md:w-[190px] md:h-[197px] max-lg:hidden pt-8 lg:right-[10%] animate-float-horizontal">
          <Image
            alt="Pesawat"
            src="/Merchandise/Pesawat.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="relative sm:w-[120px] sm:h-[197px] w-[45px] h-[75px] pt-8 animate-swing">
          <Image
            alt="Tabung"
            src="/Merchandise/TabungBaju.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="flex gap-[6px] md:gap-3 z-10">
          <Button
            variant={'tertiary'}
            className="flex items-center justify-center gap-3 max-sm:text-t9"
          >
            <User className="max-sm:size-[18px]" />
            Beli
          </Button>
          <Button
            variant={'secondary'}
            className="flex items-center justify-center gap-3 max-sm:text-t9"
          >
            <User className="max-sm:size-[18px]" />
            Cara Pembelian
          </Button>
        </div>
      </div>
      <div className="my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-11 gap-y-14 px-2 md:px-6 lg:px-10">
        {CardMerchandise.map((card, index) => (
          <Link
            href={`merchandise/${index}`}
            key={index}
            className="flex flex-col gap-3 px-4 py-5 md:p-8 lg:p-[52px] bg-[#2E3881E5] shadow-timeline rounded-[32px] transition-all delay-150 duration-300 hover:animate-swing"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="mx-auto max-sm:h-[112px] h-[200px] object-contain"
            />
            <h3 className="md:text-t5 text-t9 font-bold font-riffic text-white">
              {card.title}
            </h3>
            <p className="text-justify text-t7 max-sm:text-[9px] text-Text/TextDarkBG">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
