import React from 'react'
import Card from '@/components/ui/Card'

const AmbassadorProgamsDesktop = () => {
  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-9">
        {/* Section 1 */}

        <Card
          title=""
          className="text-BlueRegion/Cornflower/100 p-6 rounded-[32px] shadow-ambassadorSatu"
        >
          <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
            1. Welcoming Ambassador
          </h2>
          <p className="font-tex-gyre text-[16px] font-bold">
            Welcoming OH Ambassador merupakan sebuah inisiatif yang dirancang
            untuk memfasilitasi pertemuan dan interaksi antar OH Ambassador dan
            staf yang bertujuan untuk memperkenalkan mereka secara lebih dalam
            tentang kegiatan-kegiatan yang terdapat di Open House Fasilkom UI
            maupun keuntungan yang akan didapatkan para OH Ambassador.
          </p>
        </Card>

        {/* Section 2 */}
        <Card
          title=""
          className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] shadow-ambassadorDua translate-y-[155px]"
        >
          <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
            2. Webinar with Alumni
          </h2>
          <p className="font-tex-gyre text-[16px] font-bold">
            OH Ambassador akan mendapatkan kesempatan untuk berpartisipasi dalam
            webinar mengenai aplikasi IT dan prospek kerja yang akan dibawakan
            oleh alumni Fasilkom UI yang telah sukses dalam bidang IT. Melalui
            webinar ini, para OH Ambassador akan mendapatkan wawasan dan
            pengetahuan berharga langsung dari ahli industri, agar update dengan
            tren dan perkembangan terbaru di dunia teknologi.
          </p>
        </Card>
        {/* Section 3 */}
        <Card
          title=""
          className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] shadow-ambassadorTiga"
        >
          <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
            3. Ristek Class
          </h2>
          <p className="font-tex-gyre text-[16px] font-bold">
            Para OH Ambassador akan mendapatkan akses eksklusif ke kelas RISTEK
            yang dirancang untuk meningkatkan keterampilan teknis dan menambah
            pemahaman lebih dalam tentang topik IT yang dibawakan oleh
            narasumber. RISTEK Class akan memberikan OH Ambassador pengalaman
            hands-on mengenai ilmu yang dapat diaplikasikan di dunia nyata.
          </p>
        </Card>
        {/* Section 4 */}
        <Card
          title=""
          className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] shadow-ambassadorEmpat translate-y-1/2"
        >
          <h2 className="text-[20px]  font-bold font-riffic mb-4 tracking-wider">
            4. 1-on-1 Mentoring
          </h2>
          <p className="font-tex-gyre text-[16px] font-bold">
            One-on-one mentoring memberikan kesempatan kepada para OH Ambassador
            untuk dapat berinteraksi secara 1-on-1 dengan mentor, saling
            berdiskusi, dan mendapatkan informasi mengenai Fakultas Ilmu
            Komputer UI secara eksklusif. Selain itu, sesi ini juga melatih
            kemampuan komunikasi dan kepercayaan diri Ambassador.
          </p>
        </Card>
        {/* Section 5 */}
        <Card
          title=""
          className=" text-BlueRegion/Cornflower/100 p-6 rounded-[32px] shadow-ambassadorLima"
        >
          <h2 className="text-[20px] font-bold font-riffic mb-4 tracking-wider">
            5. Farewell Party
          </h2>
          <p className="font-tex-gyre text-[16px] font-bold">
            Kegiatan penghujung acara yang akan dilaksanakan untuk para OH
            Ambassador yang telah aktif mempromosikan OH Fasilkom. Kegiatan ini
            bertujuan untuk menimbulkan kesan akhir yang baik bagi para OH
            Ambassador yang telah turut serta dalam rangkaian acara OH Fasilkom.
            Melalui Farewell party, diharapkan para OH Ambassador dapat
            merasakan apresiasi dalam menyukseskan acara OH Fasilkom itu
            sendiri.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default AmbassadorProgamsDesktop
