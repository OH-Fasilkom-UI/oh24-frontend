import Image from 'next/image'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const ExploreContact = () => {
  return (
    <section className="grid grid-cols-[3fr_2fr] grid-rows-[auto_auto_1fr] sm:grid-rows-[2fr_1fr_2fr] mt-12 mb-[400px] min-[440px]:mb-[560px] sm:mb-[400px] md:mb-[500px] lg:mb-[600px] xl:mb-[800px] 2xl:mb-[960px] text-Text/TextLightBG px-20">
      <div className="text-2xl md:text-4xl xl:text-5xl flex items-center">
        <h1>Ingin lebih dekat dengan dunia Mahasiswa Fasilkom UI?</h1>
      </div>
      <div className="sm:row-span-3 flex items-center md:p-2">
        <Image
          src="/panda-contact.png"
          alt="contact"
          width={480}
          height={478}
          className="w-full object-contain"
        />
      </div>
      <h1 className="max-sm:col-span-2 max-sm:text-center text-sm md:text-xl lg:text-4xl font-tex-gyre font-semibold py-4 sm:py-3">
        Yuk Follow Sosial Media Kami!
      </h1>
      <div className="flex items-center">
        <div className="h-full w-full">
          <a
            href="https://www.instagram.com/ohfasilkom"
            target="_blank"
            className="flex py-1 items-center gap-2"
          >
            <Instagram className="w-5 lg:w-7 mr-2 h-auto gap-2" />
            <h1 className="font-tex-gyre font-semibold text-sm md:text-xl lg:text-4xl hover:underline">
              @ohfasilkom
            </h1>
          </a>
          <a
            href="https://twitter.com/OHFasilkom"
            target="_blank"
            className="flex py-1 items-center gap-2"
          >
            <Twitter className="w-5 lg:w-7 mr-2 h-auto" />
            <h1 className="font-tex-gyre font-semibold text-sm md:text-xl lg:text-4xl hover:underline">
              @OHFasilkom
            </h1>
          </a>
          <a
            href="https://www.youtube.com/@FasilkomUIOfficial"
            target="_blank"
            className="flex py-1 items-center gap-2"
          >
            <Youtube className="w-5 lg:w-7 mr-2 h-auto" />
            <h1 className="font-tex-gyre font-semibold text-sm md:text-xl lg:text-4xl hover:underline">
              @FasilkomUIOfficial
            </h1>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ExploreContact
