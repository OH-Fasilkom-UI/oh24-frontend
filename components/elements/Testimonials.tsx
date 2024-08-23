'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea'
import bg from '@/public/background-testi.png'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { testimonials } from './Testimonials.data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger timing
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = ({
  testimonyData = testimonials,
}: {
  testimonyData?: typeof testimonials
}) => {
  const [active, setActive] = useState(0)

  const mainCardRef = useRef(null)
  const childrenRef = useRef(null)
  const inView = useInView(mainCardRef, { once: true })
  const inViewChildren = useInView(childrenRef, { once: true })

  return (
    <section
      className='w-full'
    >
      <motion.div
        ref={mainCardRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          inView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        }
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}

        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex flex-col items-center rounded-xl w-full relative h-fit max-h-[570px]"
      >
        <Image
          src={'/whoosh.png'}
          alt="whoosh"
          width={300}
          height={200}
          objectFit="contain"
          className="absolute z-0 -translate-y-6 md:hidden sm:w-[400px]"
        />
        <div className="flex lg:gap-[60px] md:gap-[30px] px-[30px] w-full h-fit max-md:gap-[20px] max-md:items-center max-md:flex-col justify-center flex-row lg:px-[40px] max-md:py-8 py-[64px] items-start z-20">
          <Avatar>
            <AvatarImage
              src={(testimonyData ?? testimonials)[active].foto}
              alt="quote"
              width={180}
              height={180}
              className="max-md:w-[120px] max-md:h-[120px] aspect-square object-cover rounded-full"
            />
          </Avatar>
          <div className="flex gap-[24px] md:gap-[20px] flex-col lg:w-[780px] md:w-[530px] max-sm:w-fit max-sm:px-[10px]">
            <p className="text-Text/TextDarkBG max-md:text-[14px] leading-9 max-md:leading-[25px] font-extrabold text-justify md:text-[18px] text-[24px] max-h-[350px] overflow-y-auto pr-2 md:pr-4">
              {(testimonyData ?? testimonials)[active].testimonial}
            </p>
            <p className="text-Text/TextDarkBG font-tex-gyre max-md:text-[14px] md:text-[20px] font-normal text-[24px]">
              {(testimonyData ?? testimonials)[active].namaDanSekolah}
            </p>
          </div>
        </div>
      </motion.div>
      <div>
        <ScrollArea className="pt-10 pb-10 overflow-visible">
          <motion.div
            ref={childrenRef}
            className="flex flex-row max-md:gap-[10px] gap-[40px] justify-center min-h-[180px] md:min-h-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate={inViewChildren ? 'visible' : 'hidden'}
          >
            {(testimonyData ?? testimonials).map((testi, index) => (
              <motion.div
                onClick={() => setActive(index)}
                key={index}
                className="flex flex-col justify-center items-center gap-2 lg:gap-[24px] duration-300 cursor-pointer h-fit"
                variants={itemVariants}
              >
                <motion.div
                  className={`flex p-2 md:p-6 rounded-2xl items-center flex-col ${active === index ? 'bg-Text/TextLightBG' : 'bg-[#1C274F]'
                    } text-center gap-2 max-md:w-[120px] max-md:h-[142px] max-md:pt-[12px] w-[190px] h-[236px]`}
                  variants={itemVariants}
                >
                  <Avatar>
                    <AvatarImage
                      src={testi.foto}
                      alt="foto"
                      width={140}
                      height={140}
                      className="w-[60px] h-[60px] md:h-[100px] md:w-[100px] aspect-square object-cover rounded-full"
                    />
                  </Avatar>
                  <p className="text-Text/TextDarkBG font-tex-gyre font-bold text-sm md:text-lg h-full flex items-center">
                    {testi.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <ScrollBar orientation="horizontal" className="-translate-y-10" />
        </ScrollArea>
      </div>
    </section>
  )
}

export default Testimonials
