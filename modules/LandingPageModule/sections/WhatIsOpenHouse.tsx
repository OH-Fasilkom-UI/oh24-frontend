import BackgroundBottom from '@/public/what-is-oh-bg-bottom.png'
import BackgroundTop from '@/public/what-is-oh-bg-top.png'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import { WHAT_IS_OH_DATA } from '../constant'
import WhatIsOpenHouseCarousel from '../elements/WhatIsOpenHouseCarousel'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 'center',
  slidesToScroll: 1,
}

const WhatIsOpenHouse = () => {
  return (
    <section className="md:mt-40 flex flex-col items-center gap-6 relative py-24 sm:py-32 md:py-40 lg:py-64 px-5">
      <Image
        src={BackgroundTop}
        alt="background"
        className="h-[52%] w-full object-cover object-top absolute top-0 -z-10"
      />
      <Image
        src={BackgroundBottom}
        alt="background"
        className="h-[52%] w-full object-cover object-bottom absolute bottom-0 -z-10"
      />
      <h1 className="text-[#2E3881] text-2xl md:text-5xl text-center mt-28 md:mt-96">
        What is Open House Fasilkom?
      </h1>
      <div className="relative px-5 pt-6 max-w-md md:max-w-xl lg:max-w-2xl bg-[#F0F8FF] rounded-xl flex flex-col items-center gap-5">
        <p className="text-[#2E3881] font-semibold text-center max-md:text-xs">
          Open House Fasilkom UI merupakan acara tahunan yang diselenggarakan
          oleh BEM Fasilkom UI untuk memperkenalkan Fakultas Ilmu Komputer
          Universitas Indonesia kepada masyarakat luas dan membantu para calon
          mahasiswa dalam memantapkan pilihan program studinya di Fasilkom UI
        </p>
        <Image
          src={'/more-than-it.png'}
          alt="More Than IT"
          width={360}
          height={360}
          className="max-w-44 md:max-w-72 z-20"
        />
        <div className="w-full flex justify-between">
          <Image
            src={'/what-is-oh-gedung-kiri.png'}
            alt="Gedung Kiri"
            width={360}
            height={360}
            className="max-w-12 md:max-w-28"
          />

          <Image
            src={'/what-is-oh-gedung-kanan.png'}
            alt="Gedung Kanan"
            width={360}
            height={360}
            className="max-w-12 md:max-w-28"
          />
        </div>
        <Image
          src={'/panda-bingung-berdiri-biru.png'}
          alt="Panda Bingung Berdiri Biru"
          width={360}
          height={360}
          className="max-w-14 md:max-w-24 absolute top-0 -right-6 md:-right-16"
        />
        <Image
          src={'/panda-bingung-duduk-merah.png'}
          alt="Panda Bingung Duduk Merah"
          width={360}
          height={360}
          className="max-w-14 md:max-w-24 absolute top-28 -left-6 md:-left-16"
        />
      </div>
      <WhatIsOpenHouseCarousel slides={WHAT_IS_OH_DATA} options={OPTIONS} />
    </section>
  )
}

export default WhatIsOpenHouse
