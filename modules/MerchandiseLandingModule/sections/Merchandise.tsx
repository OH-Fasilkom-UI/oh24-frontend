import Button from '@/components/ui/Button'
import { merchandiseData } from '@/modules/MerchandiseModule/constant'
import { TataCaraModule } from '@/modules/TataCaraModule'
import Banner from '@/public/Merchandise/Banner.png'
import BannerMobile from '@/public/Merchandise/BannerMobile.png'
import Pesawat from '@/public/Merchandise/Pesawat.png'
import TabungBaju from '@/public/Merchandise/TabungBaju.png'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
            src={Banner}
            fill
            sizes="none"
            className="object-contain rounded-[32px]"
          />
        </div>
        <div className="absolute w-full h-[120px] sm:hidden rounded-[32px] bottom-0">
          <Image
            alt="Banner"
            src={BannerMobile}
            fill
            sizes="none"
            className="object-cover rounded-[32px]"
          />
        </div>
        <div className="absolute md:w-[190px] md:h-[197px] max-lg:hidden pt-8 lg:right-[10%] animate-float-horizontal">
          <Image
            alt="Pesawat"
            src={Pesawat}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="relative sm:w-[120px] sm:h-[197px] w-[45px] h-[75px] pt-8 animate-swing">
          <Image
            alt="Tabung"
            src={TabungBaju}
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
          <TataCaraModule />
        </div>
      </div>
      <div className="my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-11 gap-y-14 px-2 md:px-6 lg:px-10">
        {merchandiseData.map((product) => (
          <Link
            href={`merchandise/${product.id}`}
            key={product.id}
            className="flex flex-col gap-3 px-4 py-5 md:p-8 lg:p-[52px] bg-[#2E3881E5] shadow-timeline rounded-[32px] transition-all delay-150 duration-300 hover:animate-swing"
          >
            <Image
              src={product.image[0]}
              alt={product.title}
              width={200}
              height={200}
              className="mx-auto max-sm:h-[112px] h-[200px] object-contain"
            />
            <h3 className="md:text-t5 text-t9 font-bold font-riffic text-white">
              {product.title}
            </h3>
            <p className="text-justify text-t7 max-sm:text-[9px] text-Text/TextDarkBG">
              {product.description.length > 100
                ? `${product.description.slice(0, 100)}...`
                : product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
