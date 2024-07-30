'use client'
import React from 'react'
import { NAVBAR_LINKS } from './constant'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import { AlignRight } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-[#0000001A]">
      <div className="max-md:w-[135px] max-md:h-[41px]">
        <Image src="/logo-navbar.svg" alt="logo" width={204} height={61} />
      </div>
      {NAVBAR_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`text-[16px] max-md:hidden gap-2 flex font-tex-gyre font-semibold ${
            pathname === link.href ? 'text-[#C10F1F]' : 'text-[#3733CF]'
          }`}
        >
          {link.icon && <span>{React.createElement(link.icon)}</span>}
          {link.label}
        </Link>
      ))}
      <Button className="max-md:hidden">Login</Button>
      <NavigationMenu className="max-md:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AlignRight
                className="max-md:block hidden text-white"
                size={24}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-fit h-fit p-3">
              {NAVBAR_LINKS.map((link, index) => (
                <NavigationMenuLink
                  key={index}
                  href={link.href}
                  className="flex flex-row gap-2 text-[12px] mt-5 justify-start"
                >
                  {link.icon && (
                    <span className="text-[20px]">
                      {React.createElement(link.icon)}
                    </span>
                  )}
                  {link.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
