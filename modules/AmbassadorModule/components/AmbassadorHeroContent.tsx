import Countdown from '@/components/elements/Countdown'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'
import { BookMinus, User } from 'lucide-react'
import Link from 'next/link'

const AmbassadorHeroContent = () => {
  return (
    <div
      className='pt-10'
    >
      <div className="flex flex-col text-center justify-center gap-5 md:gap-8 xl:gap-20 ">
        <h1 className="font-bold text-shadow-ambassador font-riffic text-Text/TextDarkBG leading-[48px] text-4xl max-md:text-2xl max-md:leading-[32px] lg:whitespace-nowrap tracking-widest">
          Open Recruitment Ambassador
          <br />
          Open House Fasilkom UI 2024
        </h1>
        <p className="font-bold font-tex-gyre text-Text/TextDarkBG leading-[28px] text-sm md:text-xl max-md:leading-4 max-md:text-center">
          Ambassador adalah salah satu divisi dari OH Fasilkom UI untuk mengajak
          siswa/i SMA/sederajat menjadi ikon dari OH Fasilkom UI 2024, dengan
          tujuan mempromosikan acara OH Fasilkom 2024 dan Fakultas Ilmu Komputer
          itu sendiri.
        </p>
      </div>
      <div className="text-center my-16 xl:my-20">
        <p className="font-bold font-tex-gyre leading-[28px] text-[20px] md:text-[14px] max-md:text-[15px] mb-5">
          Recruitment Ambassador Open House Fasilkom UI 2024 ditutup
        </p>
        <Countdown targetDate={new Date('2024-09-13T23:59:00')} displayDate />
      </div>
      <div className="flex flex-row justify-center gap-5 my-5 lg:my-20 max-md:flex-col max-md:items-center">
        <Link href="/guidebook.pdf" download="Guidebook Open Recruitment Ambassador OH Fasilkom UI 2024" target="_blank">
          <Button
            onClick={() => {
              setTimeout(() => {
                toast.success("Guidebook berhasil diunduh")
              }, 500)
            }}
            className="w-[180px] max-md:text-[12px]"
          >
            <BookMinus className="w-4" />
            Guidebook
          </Button>
        </Link>
        <Link href="/ambassador/register">
          <Button className="bg-Misc/Ziggurat/400 w-[180px] md:w-full max-w-[180px] max-md:text-[12px]">
            <User className="max-md:text-[12px]" />
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AmbassadorHeroContent
