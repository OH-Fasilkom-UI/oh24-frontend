import Card from '@/components/ui/Card'
import React from 'react'
import bg from '@/public/kota-prestasi.png'
import { ISI_PRESTASI } from '../constant'
import Image from 'next/image'

export const PrestasiSection = () => {
  return (
    <section id="prestasi" className="pt-20 mx-20 max-md:mx-6 relative">
      <h2 className="font-riffic text-Text/TextLightBG text-5xl font-bold text-center tracking-widest mb-[80px] max-md:mb-8">
        Prestasi
      </h2>
      <Card
        title=""
        className="w-full h-full relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(46, 56, 129, 0.85), rgba(46, 56, 129, 0.85)), url(${bg.src})`,
          backgroundSize: '100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src="/piala-prestasi.png"
          alt="Piala Prestasi"
          fill
          sizes="none"
          className="object-contain absolute -translate-y-1/3 mx-auto max-w-[207px] max-h-[231px] top-0 max-md:hidden"
        />
        <Image
          src="/piala-mobile.png"
          alt="Piala Prestasi"
          width={68}
          height={75}
          className="absolute md:hidden right-0 top-0 translate-x-3 -translate-y-5"
        />
        <div className="grid grid-cols-1 max-md:mx-auto md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:min-w-[288px] max-md:max-w-[180px]">
          {ISI_PRESTASI.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center my-5 md:my-16"
              >
                <Icon className="w-[70px] h-[70px] max-md:mb-3 mb-8 mt-[74px max-md:w-[21px] max-md:h-[21px]" />
                <h3 className="text-3xl max-md:text-xl font-bold mb-3 font-riffic tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xl max-md:text-sm font-riffic font-bold tracking-widest mb-1">
                  {item.description}
                </p>
                <p className="text-[20px] mb-3 max-md:text-sm  font-bold font-tex-gyre">
                  {item.status}
                </p>
                <p className="text-2xl font-bold max-md:text-sm  font-tex-gyre">
                  {item.metrics}
                </p>
              </div>
            )
          })}
        </div>
      </Card>
      <Image
        src="/ufoo.png"
        alt="Ufo"
        width={200}
        height={206}
        className="absolute -left-20 -bottom-32 animate-float-vertical"
      />
    </section>
  )
}
