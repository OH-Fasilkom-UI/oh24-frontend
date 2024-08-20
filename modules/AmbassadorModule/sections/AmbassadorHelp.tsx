import Image from 'next/image'

const AmbassadorHelp = () => {
  return (
    <section className="flex max-md:flex-col flex-row w-full mb-8">
      <div>
        <Image
          src="/city-road.png"
          alt="city"
          width={1440}
          height={400}
          className="w-[1000px] max-md:hidden block object-contain -translate-x-10 lg:-translate-x-24"
        />
        <Image
          src="/city-amb.png"
          alt="city"
          width={1440}
          height={400}
          className="w-screen max-md:block hidden object-contain"
        />
      </div>
      <div className="my-auto max-w-xl max-sm:mx-5 md:-translate-x-10 lg:-translate-x-1/4">
        <h1 className="text-[48px] max-md:text-[24px] max-xl:text-[30px] whitespace-nowrap font-riffic mb-3 leading-[48px] tracking-widest text-[#B91B70] font-bold text-center">
          Need more help?
        </h1>
        <p className="lg:text-[20px] max-md:text-[14px] leading-[20px] font-tex-gyre font-bold text-center text-[#530C32]">
          Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini!
        </p>
      </div>
    </section>
  )
}

export default AmbassadorHelp
