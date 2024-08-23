import Image from 'next/image'

const WhatsAmbassador = () => {
  return (
    <section
      id="ambass-desc"
      className="flex justify-center p-8 max-md:mt-[100px] md:mt-[200px]"
    >
      <div className="flex md:max-w-2xl lg:max-w-3xl xl:max-w-4xl items-center">
        <div className="flex-1 mr-8 max-md:mx-3">
          <div className="flex max-[300px]:flex-col-reverse items-center gap-4 flex-col relative py-3 w-full">
            <p className="text-Text/TextLightBG max-md:leading-6 md:text-[24px] sm:mr-3 md:whitespace-nowrap max-md:text-base max-lg:text-[16px] max-sm:text-center tracking-widest font-riffic font-bold text-[36px] leading-[40px]">
              Apa itu <br className="max-sm:block hidden" /> Ambassador Open
              House?
            </p>
            <Image
              src="/ambass-hp-kecil.png"
              alt="ambas"
              width={42}
              quality={100}
              height={59}
              className='max-sm:block hidden min-[300px]:absolute -top-10 min-[450px]:-top-5 min-[550px]:right-10 max-sm:right-0 max-[320px]:right-1 max-[360px]:right-2 max-[400px]:right-4 max-[430px]:right-6 sm:right-5 transform animate-swing'
            />
          </div>
          <p className="font-tex-gyre text-[16px] max-md:leading-4  font-bold leading-6 max-md:text-[12px] max-xl:text-[13px] max-sm:text-center text-Text/TextLightBG">
            Ambassador Open House FASILKOM UI 2024 merupakan program yang
            bertujuan untuk memperluas brand awareness Fasilkom UI melalui
            partisipasi anak-anak SMA/K sederajat dan influencers. Program ini
            dijalankan dengan beberapa Ambassador yang dipilih secara seksama
            oleh Divisi Ambassador. Mereka diberikan tugas untuk membuat konten
            digital yang nantinya diunggah ke akun media sosial pribadi mereka,
            serta menyebarkan informasi terkait Open House Fasilkom UI dan
            Fasilkom UI secara keseluruhan.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div>
            <Image
              src="/panda-ambassador.png"
              alt="panda"
              quality={100}
              width={225}
              height={353}
              className="max-sm:hidden block max-lg:w-[200px] max-lg:h-[250px] cursor-pointer hover:scale-110 animate-float-vertical"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAmbassador
