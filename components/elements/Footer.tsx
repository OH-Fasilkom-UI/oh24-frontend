'use client'

import { Copy, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import { toast } from '../ui/Toast'

interface LinkProps {
  href: string
  children: React.ReactNode
}

const SocialMediaLink = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="hover:scale-125 duration-200"
    >
      {props.children}
    </a>
  )
}

const RouteLink = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer hover:scale-105 duration-300 hover:text-RedRegion/Monza/600"
    >
      {props.children}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="relative flex items-end z-0">
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
        <div className="flex items-center justify-center text-white font-bold text-sm gap-2 md:hidden">
          <p>Supported by</p>
          <a href="https://cs.ui.ac.id/" target="_blank">
            <Image
              src={'/fasilkom.png'}
              alt="Fasilkom UI Logo"
              width={84}
              height={120}
            />
          </a>
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
              <RouteLink href="/ambassador">Ambassador</RouteLink>
              <RouteLink href="/dashboard">Dashboard</RouteLink>
              <RouteLink href="/">Registration Page</RouteLink>
              <RouteLink href="/">Merchandise</RouteLink>
              <RouteLink href="/">Wall of Fame</RouteLink>
            </div>
          </div>
          <div className="flex gap-10 lg:gap-16 xl:gap-32 font-tex-gyre font-bold text-white justify-end">
            <div className="flex flex-col gap-4 md:gap-8 text-xl ">
              <div className="flex flex-col items-end md:items-start gap-4">
                <p className="text-right md:text-left text-xs md:text-xl">
                  Find Us on Social Media
                </p>
                <div className="flex gap-3 lg:gap-9 items-center cursor-pointer">
                  <SocialMediaLink href="https://www.instagram.com/ohfasilkom">
                    <Instagram className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://twitter.com/OHFasilkom">
                    <Twitter className="cursor-pointer min-w-5 min-h-5 lg:w-6 lg:h-6" />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.youtube.com/@FasilkomUIOfficial">
                    <Image
                      src="/youtube.svg"
                      alt="Youtube Logo"
                      width={24}
                      height={24}
                      className="min-w-5 w-5 lg:min-w-6 lg:w-6 cursor-pointer"
                    />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.tiktok.com/@openhousefasilkomui">
                    <Image
                      src="/tiktok.svg"
                      alt="Tiktok Logo"
                      width={24}
                      height={24}
                      className="min-w-5 w-5 lg:min-w-5 lg:w-5 cursor-pointer"
                    />
                  </SocialMediaLink>
                </div>
              </div>
              <div className="flex flex-col items-end md:items-start">
                <p className="text-lg md:text-xl">Contact Us</p>
                <div className="flex gap-2 items-center">
                  <span className="font-normal text-xs flex md:text-base">
                    openhouse@cs.ui.ac.id
                  </span>
                  <Copy
                    onClick={() => {
                      // Copy to clipboard
                      navigator.clipboard.writeText('openhouse@cs.ui.ac.id')
                      toast.success('Copied to clipboard!')
                    }}
                    className="w-3 md:w-4 aspect-square cursor-pointer hover:scale-110 duration-100"
                  />
                </div>
              </div>
              <p className="text-xl text-right md:hidden">#MoreThanIT</p>
            </div>
            <div className="hidden md:flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Supported by</p>
                <a href="https://cs.ui.ac.id/" target="_blank">
                  <Image
                    className="cursor-pointer"
                    src={'/fasilkom.png'}
                    alt="Fasilkom UI Logo"
                    width={160}
                    height={120}
                  />
                </a>
              </div>
              <p className="text-4xl flex">#MoreThanIT</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
