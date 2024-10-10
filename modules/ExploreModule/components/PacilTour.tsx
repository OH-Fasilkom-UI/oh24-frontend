import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import GedungLama from '@/public/gedlam.png'
import Image from 'next/image'
import Link from 'next/link'

export const PacilTour = () => {
  return (
    <section className="pt-80 pb-16 md:pt-64 md:pb-10 relative flex items-center max-w-6xl mx-auto">
      {/* Image for mobile view, made smaller and positioned at the bottom */}
      <Image
        className="md:pl-56 max-sm:h-72 object-cover"
        src={GedungLama}
        alt="Gedung Lama"
      />
      <div className="absolute top-24 w-full flex items-center justify-center md:left-5 md:block">
        <Card className="w-[60%]  sm:w-[500px] h-[40%] p-5 md:p-8 bg-opacity-90 rounded-[24px] md:rounded-[32px] text-center items-center justify-center shadow-lg shadow-blue-900">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold">360 Campus View</h2>
            <p className="mt-2 text-white-700 text-xs md:text-base">
              Ikut tur dan dapatkan pengalaman berkunjung ke Fasilkom secara
              unik! Kunjungi kampus kami yang nyaman dan lihatlah ruang belajar
              yang kondusif, auditorium, ruang kuliah, lounge, dan masih banyak
              lagi.
            </p>
            <Link href="https://cs.ui.ac.id/tour/" className="w-full">
              <Button className="mt-4 bg-white text-blue-900 w-full">
                Come Visit!
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default PacilTour
