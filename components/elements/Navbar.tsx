'use client'
import React from 'react'
import { NAVBAR_LINKS, NAVBAR_LOGIN } from './Navbar.data'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { AlignRight } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/NavigationMenu'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false) // Nanti bakal diganti kalo be dah ok
  const [isHover, setIsHover] = useState(false)

  return (
    <nav className="flex justify-between items-center px-12 py-4 max-md:py-2 bg-[#0000001A]">
      <div className="relative w-[170px] h-[44px]">
        <Image
          alt="contoh"
          src="/logo-navbar.svg"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      {NAVBAR_LINKS.map((link, index) => (
        <p
          key={index}
          onClick={() => {
            link.isExist && router.push(link.href)
          }}
          className={`text-[16px] cursor-pointer max-xl:text-[12px] max-lg:hidden gap-2 flex font-tex-gyre font-semibold ${
            link.isExist
              ? pathname === link.href
                ? 'text-[#C10F1F]'
                : 'text-[#3733CF]'
              : 'text-[#454F59]'
          }`}
        >
          {link.icon && <span>{React.createElement(link.icon)}</span>}
          {link.label}
        </p>
      ))}
      {isLogin ? (
        <NavigationMenu className="max-lg:hidden block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="text-[#3733CF] flex flex-row gap-2 max-xl:text-[12px] text-[16px] font-bold whitespace-nowrap hover:text-[#C10F1F]"
              >
                Welcome, Nak Oha{' '}
                <span>
                  <ChevronDown
                    size={24}
                    className={`transition-all ${isHover ? 'rotate-180' : ''}`}
                  />
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-fit rounded-[20px] justify-center h-fit px-10 pb-4 bg-[#8D8D8D1A]">
                {NAVBAR_LOGIN.map((link, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      link.label === 'Logout'
                        ? setIsLogin(false)
                        : router.push(link.href)
                    }}
                    className="text-[#3733CF] hover:text-[#C10F1F] cursor-pointer justify-start flex flex-row font-tex-gyre font-bold items-center gap-2 text-[16px] mt-5"
                  >
                    {link.icon && <span>{React.createElement(link.icon)}</span>}
                    {link.label}
                  </p>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Button
          onClick={() => setIsLogin(true)}
          className={`max-lg:hidden block`}
        >
          Login
        </Button>
      )}

      <NavigationMenu className="max-lg:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AlignRight
                className="max-lg:block hidden translate-x-[80px] text-white"
                size={24}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-fit h-fit p-5 rounded-[20px] bg-[#8D8D8D1A]">
              {NAVBAR_LINKS.map((link, index) => (
                <p
                  key={index}
                  onClick={() => {
                    link.isExist && router.push(link.href)
                  }}
                  className={`flex cursor-pointer whitespace-nowrap flex-row items-center gap-4 text-[12px] mt-5 justify-start ${
                    link.isExist
                      ? pathname === link.href
                        ? 'text-[#C10F1F]'
                        : 'text-[#3733CF]'
                      : 'text-[#454F59]'
                  }`}
                >
                  {link.icon && (
                    <span className="text-[10px]">
                      {React.createElement(link.icon)}
                    </span>
                  )}
                  {link.label}
                </p>
              ))}
              {isLogin ? (
                NAVBAR_LOGIN.map((link, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      link.label === 'Logout'
                        ? setIsLogin(false)
                        : router.push(link.href)
                    }}
                    className="text-[#3733CF] justify-start flex flex-row font-tex-gyre  items-center gap-4 text-[12px] mt-5"
                  >
                    {link.icon && <span>{React.createElement(link.icon)}</span>}
                    {link.label}
                  </p>
                ))
              ) : (
                <Button
                  onClick={() => setIsLogin(true)}
                  className="max-lg:block mt-5 hidden w-fit h-fit px-8"
                >
                  Log In
                </Button>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
