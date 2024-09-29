'use client'
import { CheckCircleIcon, CircleDotIcon } from 'lucide-react'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

const TimelineData = [
  {
    title: 'Grand Opening',
    content:
      'Grand Opening adalah acara pembuka yang menandai dimulainya Open House Fasilkom UI 2024. Di sini, kamu bakal disambut dengan berbagai sambutan dari elemen Fasilkom UI, nonton video teaser dan overview acara, menikmati penampilan guest star, dan juga persembahan spesial dari UKF Fasilkom UI. Seru banget, kan?',
    imageSrc: '/',
  },
  {
    title: 'Open Registration',
    content:
      'Daftarkan segera dirimu untuk mengikuti exclusive mentoring dan dapatkan pengalaman tak terlupakan di Main Event Open House Fasilkom UI 2024!',
    imageSrc: '/',
  },
  {
    title: 'Fasilkom Rewind',
    content:
      'Fasilkom Rewind adalah video seru yang merangkum semua momen keren mahasiswa selama di Fasilkom. Video ini dibuat buat kasih kamu gambaran asik tentang kehidupan di Fasilkom dan bikin kamu makin tertarik buat ikutan Open House Fasilkom UI.',
    imageSrc: '/',
  },
  {
    title: 'CS Connect',
    content:
      'CS Connect adalah acara seru yang punya Talkshow Online buat ngobrol santai seputar Fasilkom UI. Setelah itu, ada sesi mentoring online yang bikin kamu lebih kenal jurusan-jurusan di Fasilkom UI dan dapet info penting buat Main Event selanjutnya. Jangan sampai ketinggalan!',
    imageSrc: '/',
  },
  {
    title: 'Main Event',
    content:
      'Rasakan serunya jadi mahasiswa Fasilkom UI lewat rangkaian Main Event, acara utama dari Open House Fasilkom! Kamu bakal diajak keliling gedung Fasilkom, kenalan sama kultur-kultur unik di dalamnya, ikut kelas interaktif bareng dosen Fasilkom, mencoba teknologi-teknologi canggih, dan pastinya, seru-seruan dengan fun coding. Acara ini bakal bikin kamu lebih dekat dengan Fasilkom UI dan membantu kamu melihat apakah Fasilkom UI adalah tempat yang pas buatmu.',
    imageSrc: '/',
  },
  {
    title: 'Grand Closing',
    content:
      'Grand Closing merupakan acara penutupan dari seluruh rangkaian acara Open House Fasilkom UI 2024. Pada Grand Closing, akan ditampilkan video rekap perjalanan acara Open House Fasilkom UI 2024 serta video apresiasi dari mentor serta panitia untuk peserta. Harapannya, peserta dapat mengakhiri rangkaian acara Open House Fasilkom UI 2022 dengan kesan yang baik dan tertarik untuk bergabung ke dalam keluarga besar Fasilkom UI.',
    imageSrc: '/',
  },
]

const TimelineSelector = ({
  status,
  children,
  index,
  onClick,
}: {
  status: 'active' | 'inactive-0' | 'inactive-1'
  children: string
  index: number
  onClick: () => void
}) => {
  let icon: ReactNode
  let panda: ReactNode
  switch (status) {
    case 'active':
      icon = (
        <CheckCircleIcon className="absolute object-contain h-full w-full" />
      )
      panda = (
        <Image
          src="/panda-hepi.png"
          alt="panda-senang"
          fill
          sizes="none"
          className="object-contain"
        />
      )
      break
    case 'inactive-0':
      icon = <CircleDotIcon className="absolute object-contain h-full w-full" />
      panda = (
        <Image
          src="/panda-bingung-1.png"
          alt="panda-senang"
          fill
          sizes="none"
          className="object-contain"
        />
      )
      break
    case 'inactive-1':
      icon = <CircleDotIcon className="absolute object-contain h-full w-full" />
      panda = (
        <Image
          src="/panda-bingung-2.png"
          alt="panda-senang"
          fill
          sizes="none"
          className="object-contain"
        />
      )
      break
  }
  const [title1, title2] = children.split(' ')
  return (
    <button
      className={`${status == 'active' ? 'text-[#E3DEF9] bg-BlueRegion/CeruleanBlue/900' : 'text-BlueRegion/CeruleanBlue/900 bg-[#E3DEF9]'} 
        relative flex-1 aspect-square border-BlueRegion/CeruleanBlue/900 border-solid border-[1px]`}
      onClick={onClick}
    >
      <div className="absolute -top-[calc(0.8rem+40%)] size-[calc(1rem+50%)] left-1/2 -translate-x-1/2">
        {panda}
      </div>
      <div className="absolute top-[calc(24%-0.4rem)] left-1/2 -translate-x-1/2 w-[calc(40%)] h-[calc(35%)] bg-inherit z-50">
        {icon}
      </div>
      {index > 0 && (
        <div className="absolute top-[calc(39.5%-0.4rem)] -left-[1px] h-[4%] w-1/2 bg-current z-40"></div>
      )}
      {index < 5 && (
        <div className="absolute top-[calc(39.5%-0.4rem)] -right-[1px] h-[4%] w-1/2 bg-current z-40"></div>
      )}
      <h3 className="font-tex-gyre font-bold absolute bottom-[calc(22%+2px)] lg:bottom-[calc(32%-1.0rem)] left-1/2 -translate-x-1/2 text-[calc(2px+1.6vw)] lg:text-[min(26px,4px+1.2vw)]">
        {title1}
      </h3>
      <h3 className="font-tex-gyre font-bold absolute bottom-[8%] lg:bottom-[calc(22%-1.6rem)] left-1/2 -translate-x-1/2 text-[calc(2px+1.6vw)] lg:text-[min(26px,4px+1.2vw)]">
        {title2}
      </h3>
    </button>
  )
}

const TimelineContent = ({ selectedIndex }: { selectedIndex: number }) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-4 sm:gap-x-6 lg:gap-x-8 xl:gap-x-10 relative width-full bg-BlueRegion/CeruleanBlue/900 p-6 py-7 sm:p-12 lg:p-16 xl:p-24 rounded-b-[0.8rem] md:rounded-b-[1.4rem] lg:rounded-b-[2rem]">
      <div className="relative z-20 bg-[#E3DEF9] aspect-[4/3] rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] xl:rounded-[2rem] shadow-[4px_4px_12px_#62A3CB80,-4px_-4px_12px_#4E56C480]"></div>
      <div className=" relative z-20">
        <h1 className="text-[#E3DEF9] font-riffic mb-2 xl:mb-6 text-[16px] sm:text-[22px] lg:text-[28px] tracking-wider">
          {TimelineData[selectedIndex].title}
        </h1>
        <div className="flex overflow-hidden">
          {TimelineData.map((content, index) => (
            <p
              key={index}
              className={`${index == selectedIndex ? 'visible' : 'invisible'} w-full -mr-[100%] text-[#E3DEF9] text-[10px] sm:text-[15px] lg:text-[17px] xl:text-[20px] font-bold`}
            >
              {content.content}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute z-10 w-[115px] h-[145px] sm:w-[18vw] sm:h-[23vw] xl:w-[18rem] xl:h-[23rem] bottom-0 left-[12px] sm:left-[4vw] xl:left-8">
        <Image
          src="/city-timeline-1.png"
          alt="city asset 1"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="absolute z-10 w-[115px] h-[115px] sm:w-[18vw] sm:h-[18vw] xl:w-[18rem] xl:h-[18rem] -bottom-[0.5px] left-[130px] sm:left-[23vw] xl:left-[20rem]">
        <Image
          src="/city-timeline-2.png"
          alt="city asset 2"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  )
}

const Timeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectorConfig: ('active' | 'inactive-0' | 'inactive-1')[] = [
    'inactive-0',
    'inactive-1',
    'inactive-0',
    'inactive-1',
    'inactive-0',
    'inactive-1',
  ]
  selectorConfig[selectedIndex] = 'active'

  const selectorItems = selectorConfig.map((config, index) => {
    return (
      <TimelineSelector
        status={config}
        onClick={() => setSelectedIndex(index)}
        key={index}
        index={index}
      >
        {TimelineData[index].title}
      </TimelineSelector>
    )
  })

  return (
    <div className="flex-1">
      <div className="flex">{selectorItems}</div>
      <TimelineContent selectedIndex={selectedIndex} />
    </div>
  )
}

const LandingPageTimeline = () => {
  return (
    <section className="md:my-20 max-w-screen-xl mx-auto px-5">
      <h1 className="text-center text-Text/TextLightBG font-riffic mb-2 sm:mb-4 text-[36px] sm:text-[48px] tracking-wider">
        Timeline
      </h1>
      <div className="flex justify-center pt-16 sm:pt-24 lg:pt-32">
        <Timeline />
      </div>
    </section>
  )
}

export default LandingPageTimeline
