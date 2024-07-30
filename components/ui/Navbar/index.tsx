'use client'
import React from 'react'
import { NAVBAR_LINKS } from './constant'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '../Button'
import { AlignRight } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-[#0000001A]">
      <div className="max-md:w-[150px] max-md:h-[41px]">
        <Image src="/logo-navbar.svg" alt="logo" width={204} height={61} />
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
      <Button className="max-lg:hidden block">Login</Button>
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
              <Button className="max-lg:block mt-5 hidden w-fit h-fit px-8">
                Log In
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
