'use client'
import { Copy, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  return (
    <motion.footer
      ref={ref}
      initial={{ y: 200 }}
      animate={{ y: inView ? 0 : 200 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className="relative flex items-end z-0"
    >
      <Image
        src={'/footer.png'}
        alt="Footer Background"
        width={1920}
        height={412}
        className="w-full absolute bottom-[412px] sm:bottom-[262px] md:bottom-[412px] object-top object-cover -z-10 hidden sm:flex"
      />
      <Image
        src={'/footer-mobile.png'}
        alt="Footer Background"
        width={1920}
        height={412}
        className="w-full absolute bottom-[262px] object-top object-cover -z-10 sm:hidden"
      />
      <section className="z-20 flex flex-col gap-4 bg-[#343FC0] h-[262px] md:h-[412px] p-5 md:p-10 w-full">
        <div className="flex items-center justify-center text-white font-bold text-sm font-tex-gyre gap-2 md:hidden">
          <h5 className="">Supported by</h5>
          <Image
            src={'/fasilkom.png'}
            alt="Fasilkom UI Logo"
            width={84}
            height={120}
          />
        </div>
        <div className="flex items-center justify-between w-full h-fit gap-4">
          <div className="flex gap-12">
            <Image
              src={'/oh-logo-text-white.png'}
              alt="Open House Logo"
              width={251}
              height={303.23}
              className="w-[124.8px] h-[156px] md:w-[251px] md:h-[303.23px] hover:scale-105 duration-100"
            />
            <div className="hidden lg:flex flex-col justify-center gap-8 font-tex-gyre text-Text/TextDarkBG font-bold text-base">
              {[
                'Ambassador',
                'Dashboard',
                'Registration Page',
                'Merchandise',
                'Wall of Fame',
              ].map((item, i) => {
                return (
                  <a
                    key={i}
                    href={item}
                    className="list-none hover:text-RedRegion/Monza/700 hover:scale-105 duration-200 cursor-pointer"
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex gap-10 lg:gap-16 xl:gap-32 font-tex-gyre font-bold text-white justify-end">
            <div className="flex flex-col gap-4 md:gap-8 text-xl ">
              <div className="flex flex-col items-end md:items-start gap-4">
                <h5 className="text-right md:text-left text-xs md:text-xl">
                  Find Us on Social Media
                </h5>
                <div className="flex gap-3 lg:gap-9 items-center cursor-pointer">
                  <a href="">
                    <Instagram className="w-4 lg:w-8 aspect-square cursor-pointer" />
                  </a>
                  <a href="">
                    <Twitter className="fill-white w-4 lg:w-8 cursor-pointer" />
                  </a>
                  <a href="">
                    <Youtube
                      className="w-4 lg:w-10 cursor-pointer"
                      fill="white"
                    />
                  </a>
                  <a href="">
                    <Image
                      src={'/tiktok.svg'}
                      alt="Tiktok Logo"
                      width={24}
                      height={24}
                      className="min-w-3 w-3 lg:min-w-4 lg:w-4 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-end md:items-start">
                <h5 className="text-lg md:text-xl">Contact Us</h5>
                <div className="flex gap-2 items-center">
                  <span className="font-normal text-xs flex md:text-base">
                    openhouse@cs.ui.ac.id
                  </span>
                  <Copy
                    onClick={() => {
                      // Copy to clipboard
                      navigator.clipboard.writeText('openhouse@cs.ui.ac.id')
                    }}
                    className="w-3 md:w-4 aspect-square cursor-pointer hover:scale-110 duration-100"
                  />
                </div>
              </div>
              <h3 className="text-xl text-right md:hidden">#MoreThanIT</h3>
            </div>
            <div className="hidden md:flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h5 className="">Supported by</h5>
                <Image
                  src={'/fasilkom.png'}
                  alt="Fasilkom UI Logo"
                  width={160}
                  height={120}
                />
              </div>
              <h3 className="text-4xl flex">#MoreThanIT</h3>
            </div>
          </div>
        </div>
      </section>
    </motion.footer>
  )
}

export default Footer
