import React from 'react'
import Image from 'next/image'

const WhatsAmbassador = () => {
  return (
    <section
      id='ambass-desc'
      className="flex justify-center p-8 max-md:mt-[100px] md:mt-[200px]">
      <div className="flex md:max-w-2xl lg:max-w-3xl xl:max-w-4xl items-center">
        <div className="flex-1 mr-8 max-md:mx-3">
          <div className="flex flex-row items-center py-3">
            <p className="text-Text/TextLightBG max-md:leading-6 md:text-[24px] mr-1 sm:mr-3 md:whitespace-nowrap max-md:text-[14px] max-lg:text-[16px] tracking-widest font-riffic font-bold text-[36px] leading-[40px]">
              Apa itu Ambassador Open House?
            </p>
            <Image
              src="/panda-ambassador.png"
              alt="panda"
              width={40}
              height={64}
              className="max-sm:block mr-5 hidden"
            />
          </div>
          <p className="font-tex-gyre text-[16px] max-md:leading-4 max-sm:text-[10px] font-bold leading-6 max-lg:text-[12px] max-lg:text-justify text-Text/TextLightBG">
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
              width={225}
              height={353}
              className="max-sm:hidden block max-lg:w-[200px] max-lg:h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAmbassador
