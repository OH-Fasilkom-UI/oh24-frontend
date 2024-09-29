import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export const PacilTour = () => {
  return (
    <section className="pl-12 relative flex items-center min-h-screen sm:overflow-auto overflow-x-hidden">
      {/* Image for mobile view, made smaller and positioned at the bottom */}
      <Image
        className="absolute bottom-0 sm:right-2 -right-10 sm:top-64 top-[630px] sm:object-cover z-0 sm:w-[90%] h-auto sm:h-auto"
        src="/gedlam.png"
        alt="gedung lama"
        width={2000}
        height={300}
      />

      <div className="relative z-10 mt-8 sm:mt-0">
        <Card className="w-[60%]  sm:w-[500px] h-[40%] p-8 bg-opacity-90 rounded-[32px] text-center items-center justify-center shadow-lg shadow-blue-900">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold">360 Campus View</h2>
            <p className="mt-2 text-white-700 text-sm sm:text-base">
              Ikut tur dan dapatkan pengalaman berkunjung ke Fasilkom secara
              unik! Kunjungi kampus kami yang nyaman dan lihatlah ruang belajar
              yang kondusif, auditorium, ruang kuliah, lounge, dan masih banyak
              lagi.
            </p>
            <form action="https://cs.ui.ac.id/tour/">
              <Button className="mt-4 bg-white text-blue-900">
                Come Visit!
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default PacilTour
