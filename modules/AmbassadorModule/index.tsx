import React from 'react'
import AmbassadorCard from './components/AmbassadorCard'
import WhatsAmbassador from './sections/WhatsAmbassador'
import AmbassadorCarousel from './components/AmbassadorCarousel'
import Testimonials from '@/components/elements/Testimonials'
import AmbassadorHelp from './sections/AmbassadorHelp'
import AmbassadorAccordion from './components/AmbassadorAccordion'
import ContactPerson from '@/components/elements/ContactPerson'
import bg from '@/public/wave-notfound.png'
import AmbassadorProgramsMobile from './sections/AmbassadorProgramsMobile'
import AmbassadorProgamsDesktop from './sections/AmbassadorProgamsDesktop'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { MessageSquare } from 'lucide-react'
import Link from 'next/link'

const ambassTestimonyData = [
  {
    name: 'Naomyscha Attalie Maza',
    foto: '/naomyscha.jpg',
    testimonial:
      '“Menjadi Ambassador Open House Fasilkom UI tahun lalu was an incredibly valuable experience! Selain mendapatkan banyak pengalaman dan skill baru, aku juga berkesempatan mengikuti hands-on session yang membantu aku memahami lebih dalam tentang Fasilkom UI. Insight dari para alumni juga sangat informatif, ditambah dengan sesi mentoring 1-on-1 yang memungkinkan aku untuk bertanya secara langsung tentang Fasilkom UI kepada kakak-kakak. Aku pun bisa networking with temen-temen yang juga berminat untuk masuk ke Fasilkom and share my enthusiasm with them! Participating as one of the ambassadors was absolutely worth it karena aku mendapat begitu banyak insights yang membuatku jauh lebih percaya diri untuk dapat masuk Fasilkom. Thankfully, sekarang aku sudah berhasil menjadi salah satu mahasiswa baru Fasilkom UI, dan pengalaman sebagai ambassador tahun lalu definitely menjadi salah satu faktor penentu in my journey!”',
    namaDanSekolah: 'Naomyscha, SMA Labschool Kebayoran',
  },
  {
    name: 'Muhammad Helmi Alfarissi',
    testimonial:
      '“Haloo teman-teman, aku Helmi, di sini aku mau sharing sedikit experienceku sebagai Ambassador OH Fasilkom di tahun 2023. My experience being an OH Ambassador adalah salah satu pengalaman yang paling berharga dan enlighting banget. As camaba yang punya mimpi jadi bagian dari Fasilkom UI di jurusan Sistem Informasi pengalaman ini memberikan aku banyak insight baru tentang Fasilkom dan dunia perkuliahan. Di mana as Ambassador kita difasilitasi banyak program yang totally beneficial dan seru pastinya. Mulai dari Welcoming Ambassador, di mana kita mendapatkan penjelasan lebih lanjut tentang tugas sebagai OH Ambassador dan Fasilkom in general. Selain itu, banyak juga program seru lainnya seperti Webinar with Alumni, RISTEK Class, 1-on-1 Mentoring Session, dan masih banyak lagi kegiatan seru lainnya. Menjadi Ambassador memberikan aku pemahaman lebih lanjut tentang dunia IT, mulai dari basicnya seperti materi Computational Thinking sampai pembelajaran skill yang diajarkan langsung oleh RISTEK Fasilkom, yaitu organisasi bergengsi yang ada di Fasilkom UI. Being an Ambassador juga memberikan aku pacuan motivasi untuk terus memperjuangkan mimpiku demi menjadi bagian dari Sistem Informasi Fasilkom UI. So, tunggu apalagi guys, yuk tambah pengalaman kalian dan lebih tau lagi tentang Fasilkom UI dengan menjadi OH Ambassador tahun 2024 🤩”',
    foto: '/helmi.jpg',
    namaDanSekolah: 'Helmi, SMAN 59 Jakarta',
  },
  {
    name: 'Nalakrishna Abimanyu W.',
    testimonial:
      '“ Jujur awalnya aku kira jadi ambassador cuma kaya promosiin acara OH ini dengan bikin video atau post story. ternyata aku salah. Dengan jadi ambassador, aku dapet banyak banget hal selain itu. Aku dapet insight yang bagus banget tentang RISTEK yang bahkan aku belum pernah denger sebelumnya. Selain itu, aku jadi tau gambaran kuliah di pacil gimana dari sesi mentoring 1 on 1 bersama kakak” dari pacil. Intinya I would recommend you buat jadi ambassador karena emang bermanfaat banget buat kalian yang tertarik masuk pacil”',
    foto: '/nalakrishna.jpg',
    namaDanSekolah: 'Nalakrishna, SMA Labschool Kebayoran',
  },
  {
    name: 'Azellea Sariyanto',
    testimonial:
      '“Menjadi bagian dari OH Fasilkom UI Student Ambassador 2023 merupakan salah satu pengalaman hidupku yang paling berkesan. Gimana enggak? Selama menjadi Student Ambassador aku belajar banyak hal mulai dari pembuatan konten, digital branding, dan bahkan insight perihal Fasilkom UI itu sendiri. Hal ini benar-benar mengembangkan skill diriku dalam berorganisasi dan memperluas pengetahuan serta relasiku. Aku sangat berterima kasih untuk semua kakak-kakak Pacil yang sudah membimbing aku. Main Event pun meninggalkan kesan berharga bagiku karena di sana aku dan teman-teman Student Ambassador lainnya bisa berkumpul secara langsung. Gak hanya itu, saat acara berlangsung kami juga diberi apresiasi oleh panitia OH Fasilkom UI atas kontribusi kami selama menjalani program Student Ambassador. Pokoknya, kalian gak akan nyesel deh kalau join Student Ambassador OH Fasilkom UI~!”',
    foto: '/azellea.jpg',
    namaDanSekolah: 'Azellea, SMKN 42 Jakarta',
  },
  {
    name: 'Apriansyah',
    testimonial:
      '“Being a student ambassador for OH Fasilkom has been an enriching experience. Aku dapat meningkatkan kepercayaan diri, melatih time management, mendapatkan banyak relasi, dan dapat mempelajari banyak hal baru tentang kegiatan OH Fasilkom ini. Selain itu, menjadi Student Ambassador juga dapat membantu aku dalam membangun personal branding and it can provide a valuable new experience."',
    foto: '/apriansyah.jpg',
    namaDanSekolah: 'Apriansyah, SMAN 1 Kabandungan',
  },
  {
    name: 'Naila Salsabilla',
    testimonial:
      '“Being part of student ambassadors OH Fasilkom UI was truly an unforgettable high school experience!! bener bener seneng bangett bisa jadi bagian dari OH Fasilkom UI!! Jadi Student Ambassador ini bikin aku termotivasi untuk bisa jadi part of anak pacil dan benefitnya ga cuma dapet sertifikat doang tapi kita jadi bisa kenal dekat sama kaka” ui dan temen” SMA yang keren” bgtt dan juga kita sering dikasi pelatihan ambassador, soo kalian wajib bgt join ambass OH FASILKOM YESS!!”',
    foto: '/naila.jpg',
    namaDanSekolah: 'Naila, SMAIT ASY SYUKRIYYAH',
  },
]

const AmbassadorModule = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col z-20"
    >
      <div className="relative flex-grow mt-10 px-5 md:px-10 lg:px-15">
        <AmbassadorCard />
        <Image
          src="/pesawat-kiri.png"
          alt="pesawat-kiri"
          width={100}
          height={100}
          className="lg:left-0 max-[400px]:w-[70px] max-lg:top-0 max-md:left-0 lg:top-[100px] min-[2000px]:mx-[300px] absolute"
        />
        <Image
          src="/pesawat-kiri.png"
          alt="pesawat-kiri"
          width={236}
          height={183}
          className="left-0 top-1/4 absolute hidden lg:block min-[2000px]:mx-[250px]"
        />
        <Image
          src="/pesawat-kanan.png"
          alt="pesawat-kanan"
          width={200}
          height={200}
          className="absolute hidden lg:block right-0 top-[100px] min-[2000px]:mx-[250px] min-[2000px]:w-[300px]"
        />
      </div>
      <WhatsAmbassador />
      <div className="max-lg:block hidden mt-[100px] px-5 md:px-10 lg:px-15">
        <AmbassadorProgramsMobile />
      </div>
      <div className="max-lg:hidden block mt-[100px] px-5 md:px-10 lg:px-15">
        <p className="text-Text/TextLightBG font-riffic mb-10 max-md:text-[16px] md:text-[24px] max-md:leading-6 text-center font-bold xl:text-[36px] leading-[40px] tracking-widest">
          Special Programs for <br className="max-md:block hidden" /> Open House
          Ambassador
        </p>
        <AmbassadorProgamsDesktop />
      </div>
      <div className="mt-20 min-[2300px]:px-[360px] px-5 md:px-10 lg:px-15">
        <AmbassadorCarousel />
      </div>
      <div className="py-20 mt-20 flex flex-col gap-y-10 min-[2000px]:px-[500px] px-5 md:px-10 lg:px-15">
        <p className="font-riffic text-center text-Text/TextLightBG font-bold text-[36px] max-sm:text-[20px] max-md:text-[24px] leading-10 tracking-widest">
          Let&rsquo;s Hear Testimony From Ambassador
        </p>
        <Testimonials testimonyData={ambassTestimonyData} />
      </div>
      <AmbassadorHelp />
      <div className="px-5 md:px-10 lg:px-15">
        <AmbassadorAccordion />
      </div>
      <div className="mt-[200px] md:mb-[75vh] mb-[40vh] px-5 md:px-10 lg:px-15">
        <ContactPerson>
          <Link href={'https://wa.me/082178452476'} target='_blank'>
            <Button>
              <MessageSquare size={24} />
              <span>Savitri</span>
            </Button>
          </Link>
          <Link href={'https://wa.me/081321037558'} target='_blank'>
            <Button>
              <MessageSquare size={24} />
              <span>Patricia</span>
            </Button>
          </Link>
        </ContactPerson>
      </div>
    </div>
  )
}

export default AmbassadorModule
