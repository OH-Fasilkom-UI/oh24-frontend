'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { AlignRight, ChevronDown, LogOut } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Button from '@/components/ui/Button'
import paths from '@/lib/paths'
import { useUserData } from '@/hooks/user'
import { useLogout } from '@/hooks/auth'
import { NAVBAR_LINKS, NAVBAR_LOGIN } from './Navbar.data'

export const Navbar = () => {
  const pathname = usePathname()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { userData, isLoading: userDataLoading } = useUserData(
    { personal: true },
    false
  )
  const { mutate: logout } = useLogout()

  console.log(typeof userData)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 backdrop-blur-sm fixed w-full flex justify-between items-center px-4 md:px-12 py-4 bg-[#0000001A]"
    >
      <Link href={'/'}>
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
          {NAVBAR_LINKS.map((link, index) => (
            <Link
              href={link.href}
              aria-disabled={!link.isExist}
              tabIndex={link.isExist ? undefined : -1}
              key={index}
              className={twMerge(
                'items-center text-[16px] max-xl:text-[12px] max-lg:hidden gap-2 flex font-semibold',
                link.isExist && pathname === link.href
                  ? 'text-RedRegion/Monza/700 hover:text-RedRegion/Monza/500'
                  : 'text-BlueRegion/Portgage/700 hover:text-RedRegion/Monza/500',
                link.isExist
                  ? 'duration-300 hover:scale-105 cursor-pointer'
                  : 'text-[#454F59] pointer-events-none'
              )}
            >
              {link.icon && <span>{React.createElement(link.icon)}</span>}
              {link.label}
            </Link>
          ))}
          <div className="max-lg:hidden">
            {userDataLoading ? (
              'loading...'
            ) : userData ? (
              <Popover open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
                <PopoverTrigger asChild>
                  <button className="max-lg:hidden items-center text-BlueRegion/Portgage/700 flex flex-row gap-2 max-xl:text-[12px] text-[16px] font-bold whitespace-nowrap hover:text-RedRegion/Monza/700 font-tex-gyre">
                    Welcome, {userData.personal.fullName}{' '}
                    <ChevronDown
                      size={24}
                      className={`transition-all ${isUserMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-fit rounded-[8px] flex flex-col gap-3 justify-center p-4 bg-[#f3f3f3]">
                  {NAVBAR_LOGIN.map((link, index) => (
                    <Link href={link.href} key={index}>
                      <p
                        onClick={() => setIsUserMenuOpen(false)}
                        className="text-BlueRegion/Portgage/700 hover:text-RedRegion/Monza/700 duration-300 cursor-pointer justify-start flex flex-row gap-3 font-tex-gyre font-bold p-2 items-center text-[16px]"
                      >
                        {link.icon && (
                          <span className="w-[20px] h-[20px]">
                            {React.createElement(link.icon)}
                          </span>
                        )}
                        {link.label}
                      </p>
                    </Link>
                  ))}
                  <p
                    onClick={() => logout()}
                    className="text-BlueRegion/Portgage/700 hover:text-RedRegion/Monza/700 duration-300 cursor-pointer justify-start flex flex-row gap-3 font-tex-gyre font-bold p-2 items-center text-[16px]"
                  >
                    <span className="w-[20px] h-[20px]">
                      <LogOut />
                    </span>
                    Logout
                  </p>
                </PopoverContent>
              </Popover>
            ) : (
              <Link href={paths.login}>
                <Button className="">Login</Button>
              </Link>
            )}
          </div>

          <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <PopoverTrigger asChild>
              <button className="lg:hidden block">
                <AlignRight className="text-white" size={24} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-fit h-fit p-5 flex flex-col rounded-[8px] gap-5 bg-[#f3f3f3]">
              {NAVBAR_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-disabled={!link.isExist}
                  tabIndex={link.isExist ? undefined : -1}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={twMerge(
                    'font-tex-gyre flex cursor-pointer whitespace-nowrap flex-row items-center gap-4 text-[12px] justify-start',
                    link.isExist && pathname === link.href
                      ? 'text-RedRegion/Monza/700'
                      : 'text-BlueRegion/Portgage/700',
                    link.isExist
                      ? 'duration-300 hover:scale-105 cursor-pointer'
                      : 'text-Misc/ShuttleGray/700 pointer-events-none'
                  )}
                >
                  {link.icon && (
                    <span className="text-[10px]">
                      {React.createElement(link.icon)}
                    </span>
                  )}
                  {link.label}
                </Link>
              ))}
              {userDataLoading ? (
                'loading...'
              ) : userData ? (
                <>
                  {NAVBAR_LOGIN.map((link, index) => (
                    <Link href={link.href} key={index}>
                      <p
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-BlueRegion/Portgage/700 cursor-pointer justify-start flex flex-row font-tex-gyre items-center gap-4 text-[12px]"
                      >
                        {link.icon && (
                          <span>{React.createElement(link.icon)}</span>
                        )}
                        {link.label}
                      </p>
                    </Link>
                  ))}
                  <p
                    onClick={() => logout()}
                    className="text-BlueRegion/Portgage/700 cursor-pointer justify-start flex flex-row font-tex-gyre items-center gap-4 text-[12px]"
                  >
                    <span>
                      <LogOut />{' '}
                    </span>
                    Logout
                  </p>
                </>
              ) : (
                <Link href={paths.login}>
                  <Button className="w-full h-fit px-8">Log In</Button>
                </Link>
              )}
            </PopoverContent>
          </Popover>
        </>
      )}
    </motion.nav>
  )
}
