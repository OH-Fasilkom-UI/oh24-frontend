'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 backdrop-blur-sm fixed w-full flex justify-between items-center px-4 md:px-12 py-4 bg-[#0000001A]"
    >
      <Link href='/'>
        <div className="relative w-[170px] h-[44px]">
          <Image
            alt="contoh"
            src="/logo-navbar.svg"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </Link>
      {pathname !== '/login' && (
        <>
          <NavbarDesktop />
          <NavbarMobile />
        </>
      )}
    </motion.nav>
  )
}
