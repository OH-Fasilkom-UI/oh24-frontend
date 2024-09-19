import Card from '@/components/ui/Card'
import React from 'react'
import bg from '@/public/kota-prestasi.png'
import { ISI_PRESTASI } from '../constant'
import Image from 'next/image'

export const PrestasiSection = () => {
  return (
    <section className="pt-20 mx-20 max-md:mx-6">
      <h2 className="font-riffic text-Text/TextLightBG text-5xl font-bold text-center tracking-widest mb-[80px] max-md:mb-8">
        Prestasi
      </h2>
      <Card
        title=""
        className="w-full h-full relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(46, 56, 129, 0.85), rgba(46, 56, 129, 0.85)), url(${bg.src})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src="/piala-prestasi.png"
          alt="Piala Prestasi"
          fill
          sizes="none"
          className="object-contain max-md:rotate-12 absolute -translate-y-1/3 mx-auto max-w-[207px] max-h-[231px] top-0 max-md:max-w-[68px] max-md:max-h-[75px] max-md:translate-x-[250%] max-[380px]:translate-x-[175%]"
        />
        <div className="grid grid-cols-1 max-md:mx-auto md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:min-w-[288px] max-md:max-w-[180px]">
          {ISI_PRESTASI.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center mb-[58px] max-md:mb-[38px]"
              >
                <Icon className="w-[70px] h-[70px] max-md:mb-3 mb-8 mt-[74px max-md:w-[21px] max-md:h-[21px]" />
                <h3 className="text-[30px] max-md:text-[14px] font-bold mb-3 font-riffic tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xl max-md:text-xs font-riffic font-bold tracking-widest mb-1">
                  {item.description}
                </p>
                <p className="text-[20px] mb-3 max-md:text-xs  font-bold font-tex-gyre">
                  {item.status}
                </p>
                <p className="text-2xl font-bold max-md:text-xs  font-tex-gyre">
                  {item.metrics}
                </p>
              </div>
            )
          })}
        </div>
        <Image
          src="/ufoo.png"
          alt="Ufo"
          fill
          sizes="none"
          className="object-contain absolute bottom-0 max-lg:translate-y-[60%] max-[900px]:translate-y-[40%] translate-y-1/4 left-1/2 -translate-x-[47%] max-w-[1006px] max-h-[676px] max-md:max-w-[605px] max-md:max-h-[407px] max-md:translate-y-[110%] max-md:-translate-x-[31%]"
        />
      </Card>
    </section>
  )
}
