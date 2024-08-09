import React from 'react'
import Image from 'next/image'

const AmbassadorHelp = () => {
  return (
    <div className="flex max-md:flex-col flex-row w-full">
      <div className="max-sm:translate-x-7 max-sm:mx-auto">
        <Image
          src="/city-road.png"
          alt="city"
          width={1440}
          height={400}
          className="max-md:w-[300px] max-sm:w-[250px] max-lg:w-[500px]"
        />
      </div>
      <div className="my-auto max-w-xl max-sm:mx-5 md:-translate-x-10 lg:-translate-x-1/4">
        <h1 className="text-[48px] md:text-[30px] max-md:text-2xl whitespace-nowrap font-tex-gyre mb-3 leading-[48px] tracking-widest text-[#B91B70] font-bold text-center">
          Need more help?
        </h1>
        <p className="lg:text-[20px] md:text-[15px] max-md:text-[15px] leading-[20px] font-tex-gyre font-bold text-center text-[#530C32]">
          Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini!
        </p>
      </div>
    </div>
  )
}

export default AmbassadorHelp
