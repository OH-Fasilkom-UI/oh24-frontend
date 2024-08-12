import React from 'react'
import Card from '@/components/ui/Card'
import { AMBASSADOR_PROGRAMS } from '../constant'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const AmbassadorProgramsMobile = () => {
  return (
    <section>
      <p className="text-Text/TextLightBG font-riffic mb-10 max-md:text-[16px] md:text-[24px] max-md:leading-6 text-center font-bold xl:text-[36px] leading-[40px] tracking-widest">
        Special Programs for <br className="max-md:block hidden" /> Open House
        Ambassador
      </p>
      <div className="flex flex-col items-center justify-center">
        {AMBASSADOR_PROGRAMS.map((program, index) => (
          <div className="flex max-md:w-[280px] font-bold md:w-[524px] flex-col lg:flex-row lg:flex-wrap bg-gradient-custom pb-5 rounded-[50px]">
            <Card
              key={index}
              title=""
              className="h-full relative px-10 flex flex-col font-riffic leading-7 font-bold mx-auto md:w-[524px] shadow-timeline text-white rounded-[50px] mb-1 lg:mb-0 lg:mr-auto"
            >
              <h3 className="text-center font-riffic tracking-wide font-bold pb-3 mb-1">
                {program.title}
              </h3>
              <p className="text-xs font-tex-gyre">{program.description}</p>{' '}
              {program.image && (
                <Image
                  src={program.image}
                  alt={program.title}
                  width={200}
                  height={200}
                  className={cn(
                    'absolute',
                    index === 0 && 'right-0 top-1/2 translate-y-1/3 z-20',
                    index === 2 &&
                      'bottom-0 translate-y-1/2 -translate-x-1/3 left-0 z-20',
                    index === 4 && '-right-7 w-[150px] -top-1/3 translate-y-1/2'
                  )}
                />
              )}
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AmbassadorProgramsMobile
