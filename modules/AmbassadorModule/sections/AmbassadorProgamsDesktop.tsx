import { AnimatedTrain } from '@/components/animated/Train'
import Card from '@/components/ui/Card'
import Image from 'next/image'

const AmbassadorProgramsDesktop = () => {
  return (
    <section className="p-6 flex justify-center">
      <div className="max-w-4xl flex gap-x-3 gap-y-8">
        <div className="flex flex-col gap-x-3 gap-y-8">
          {/* Section 1 */}
          <Card
            title=""
            className="text-BlueRegion/Cornflower/100 p-6 rounded-[32px] relative before:h-[480px] before:w-96 before:absolute before:top-12 before:left-28 before:bg-gradient-to-tr before:from-[#2C366D] before:via-[#2C366D] before:to-[#13172E] before:rotate-[60deg] before:-z-50 shadow-lg shadow-[#435F9B]"
          >
            <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
              1. Welcoming Ambassador
            </h2>
            <p className="font-tex-gyre text-[16px] font-bold leading-6">
              Welcoming OH Ambassador merupakan sebuah inisiatif yang dirancang
              untuk memfasilitasi pertemuan dan interaksi antar OH Ambassador
              dan staf yang bertujuan untuk memperkenalkan mereka secara lebih
              dalam tentang kegiatan-kegiatan yang terdapat di Open House
              Fasilkom UI maupun keuntungan yang akan didapatkan para OH
              Ambassador.
            </p>
          </Card>

          {/* Section 3 */}
          <Card
            title=""
            className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] relative before:h-[500px] before:w-96 before:absolute before:top-12 before:left-32 before:bg-gradient-to-tr before:from-[#2C366D] before:via-[#2C366D] before:to-[#13172E] before:rotate-[55deg] before:-z-50 shadow-lg shadow-[#435F9B]"
          >
            <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
              3. Ristek Class
            </h2>
            <p className="font-tex-gyre text-[16px] font-bold leading-6">
              Para OH Ambassador akan mendapatkan akses eksklusif ke kelas
              RISTEK yang dirancang untuk meningkatkan keterampilan teknis dan
              menambah pemahaman lebih dalam tentang topik IT yang dibawakan
              oleh narasumber. RISTEK Class akan memberikan OH Ambassador
              pengalaman hands-on mengenai ilmu yang dapat diaplikasikan di
              dunia nyata.
            </p>
            <AnimatedTrain className="-left-32 bottom-8 " />
          </Card>

          {/* Section 5 */}
          <Card
            title=""
            className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] relative before:h-[500px] before:w-96 before:absolute before:bottom-16 before:left-32 before:bg-gradient-to-br before:from-[#2C366D] before:via-[#2C366D] before:to-[#13172E] before:-rotate-[55deg] before:-z-50 shadow-lg shadow-[#435F9B]"
          >
            <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
              5. Farewell Party
            </h2>
            <p className="font-tex-gyre text-[16px] font-bold leading-6">
              Kegiatan penghujung acara yang akan dilaksanakan untuk para OH
              Ambassador yang telah aktif mempromosikan OH Fasilkom. Kegiatan
              ini bertujuan untuk menimbulkan kesan akhir yang baik bagi para OH
              Ambassador yang telah turut serta dalam rangkaian acara OH
              Fasilkom. Melalui Farewell party, diharapkan para OH Ambassador
              dapat merasakan apresiasi dalam menyukseskan acara OH Fasilkom itu
              sendiri.
            </p>
          </Card>
        </div>

        <div className="flex flex-col gap-x-3 gap-y-8 justify-center">
          {/* Section 2 */}
          <Card
            title=""
            className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] relative before:h-[500px] before:w-96 before:absolute before:top-16 before:right-32 before:bg-gradient-to-tl before:from-[#2C366D] before:via-[#2C366D] before:to-[#13172E] before:-rotate-[55deg] before:-z-50 shadow-lg shadow-[#435F9B]"
          >
            <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
              2. Webinar with Alumni
            </h2>
            <p className="font-tex-gyre text-[16px] font-bold leading-6">
              OH Ambassador akan mendapatkan kesempatan untuk berpartisipasi
              dalam webinar mengenai aplikasi IT dan prospek kerja yang akan
              dibawakan oleh alumni Fasilkom UI yang telah sukses dalam bidang
              IT. Melalui webinar ini, para OH Ambassador akan mendapatkan
              wawasan dan pengetahuan berharga langsung dari ahli industri, agar
              update dengan tren dan perkembangan terbaru di dunia teknologi.
            </p>
            <Image
              src="/pesawat-kanan-2.png"
              alt="pesawat-kanan"
              width={600}
              height={400}
              className="absolute right-0 -top-60 animate-float-horizontal"
            />
          </Card>
          {/* Section 4 */}
          <Card
            title=""
            className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] relative"
          >
            <h2 className="text-[20px]  font-bold font-riffic mb-4 tracking-wider">
              4. 1-on-1 Mentoring
            </h2>
            <p className="font-tex-gyre text-[16px] font-bold leading-6">
              One-on-one mentoring memberikan kesempatan kepada para OH
              Ambassador untuk dapat berinteraksi secara 1-on-1 dengan mentor,
              saling berdiskusi, dan mendapatkan informasi mengenai Fakultas
              Ilmu Komputer UI secara eksklusif. Selain itu, sesi ini juga
              melatih kemampuan komunikasi dan kepercayaan diri Ambassador.
            </p>
            <Image
              src="/pesawat-kanann.png"
              alt="pesawat-kanann"
              width={200}
              height={200}
              className="absolute right-0 -bottom-32 animate-float-vertical"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AmbassadorProgramsDesktop
