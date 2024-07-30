"use client"
import React from 'react'
import bg from '@/public/background-testi.png'
import { testimonials } from './constant'
import { ScrollArea, ScrollBar } from '../scroll-area'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useState } from 'react'


const Testimonials = () => {
  const [active, setActive] = useState(0)

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex flex-col items-center rounded-xl lg:h-fit lg:w-full md:w-fit sm:h-[498px] sm:w-[389px]"
      >
          <div className="flex lg:gap-[60px] md:gap-[30px] md:px-[30px] md:w-fit md:h-fit max-md:gap-[20px] max-md:items-center max-md:flex-col justify-center flex-row lg:px-[40px] max-md:py-[20px] py-[64px] items-start">
            <Avatar>
              <AvatarImage src={testimonials[active].foto} alt="quote" width={180} height={180} className='max-md:w-[120px] max-md:h-[120px]'/>
            </Avatar>
            <div className='flex gap-[24px] md:gap-[20px] flex-col lg:w-[780px] md:w-[530px] max-sm:w-fit max-sm:px-[10px] max-md:w-[283px]'>
              <p className='text-[#E0ECFF] font-tex-gyre max-md:text-[14px] leading-9 max-md:leading-[25px] font-extrabold text-justify md:text-[18px] text-[24px]'>{testimonials[active].testimonial}</p>
              <p className='text-[#E0ECFF] font-tex-gyre max-md:text-[14px] md:text-[20px] font-normal text-[24px]'>{testimonials[active].namaDanSekolah}</p>
            </div>
          </div>
      </div>
      <div>
        <ScrollArea>
          <div className='flex flex-row max-sm:gap-[10px] gap-[60px] justify-center py-[64px]'>
            {testimonials.map((testi, index) => (
              <div onClick={() => setActive(index)} key={index} className='flex flex-col justify-center items-center gap-[24px]'>
                <div className={`flex pt-6 rounded-2xl items-center flex-col ${active === index ? "bg-[#2E3881]" : "bg-[#1C274F]"} text-center gap-[24px] max-md:gap-[8px] max-md:w-[120px] max-md:h-[132px] max-md:pt-[12px] w-[190px] h-[236px]`}>
                  <Avatar>
                    <AvatarImage src={testi.foto} alt="foto" width={140} height={140} className='max-md:w-[80px] max-md:h-[80px]'/>
                  </Avatar>
                  <p className='text-[#E0ECFF] font-tex-gyre font-normal max-md:text-[14px] md:text-[20px] text-[24px]'>{testi.name}</p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className='-translate-y-10' />
        </ScrollArea>
      </div>
    </section>
  )
}

export default Testimonials