import Countdown from '@/components/elements/Countdown'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast';
import { BookMinus, User } from 'lucide-react'
import Link from 'next/link'

function downloadPDF(url: string, filename: string) {
  // Create a new anchor element
  const link = document.createElement('a');

  // Set the href attribute to the URL of the PDF
  link.href = url;

  // Set the download attribute to the desired file name
  link.download = filename;

  // Append the anchor to the document body
  document.body.appendChild(link);

  // Trigger the download by simulating a click on the anchor element
  link.click();

  // Remove the anchor from the document body
  document.body.removeChild(link);
}

const IsiCardAmbassador = () => {
  return (
    <div>
      <div className="text-center justify-center md:mx-[60px]  max-sm:gap-5 lg:mx-[100px] md:gap-8 xl:mx-[200px] xl:gap-20 mb-5 flex flex-col">
        <h1 className="max-md:text-[20px] max-md:leading-[32px] leading-[48px] md:text-[25px] lg:text-[30px] tracking-widest lg:whitespace-nowrap font-bold text-shadow-ambassador font-riffic text-[43px] text-Text/TextDarkBG">
          Open Recruitment Ambassador
          <br />
          Open House Fasilkom UI 2024
        </h1>
        <p className="max-md:text-[11px] max-md:text-center max-md:leading-4 leading-[28px] md:text-[14px] lg:text-[20px] font-tex-gyre font-bold text-Text/TextDarkBG">
          Ambassador adalah salah satu divisi dari OH Fasilkom UI untuk mengajak
          siswa/1 SMA/sederajat menjadi ikon dari OH Fasilkom UI 2024, dengan
          tujuan mempromosikan acara OH Fasilkom 2024 dan Fakultas Ilmu Komputer
          itu sendiri.
        </p>
      </div>
      <div className="text-center max-lg:my-16 xl:my-20">
        <p className="font-bold max-md:text-[15px] md:text-[14px] mb-5 leading-[28px] text-[20px] font-tex-gyre">
          Recruitment Ambassador Open House Fasilkom UI 2024 ditutup
        </p>
        <div>
          <Countdown
            targetDate={new Date('2024-09-19T23:59:59Z')}
            displayDate
          />
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col max-md:items-center gap-5 max-md:my-5 lg:my-20 justify-center">
        <Link href="/Module_0.pdf" download={'Guidebook Ambaszzing'} target='_blank'>
          <Button
            onClick={() => {
              toast.success("Guidebook berhasil diunduh")
            }}
            className="max-md:text-[12px] w-full max-w-[180px] h-[44px]"
          >
            <BookMinus className='w-4' />
            Guidebook
          </Button>
        </Link>
        <Link href="/ambassador/register">
          <Button className="bg-Misc/Ziggurat/400 max-md:text-[12px] w-[180px] md:w-full max-w-[180px]">
            <User className="max-md:text-[12px]" />
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default IsiCardAmbassador
