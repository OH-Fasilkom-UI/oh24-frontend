'use client'

import React from 'react'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import { AlignRight, LogOut } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import Button from '@/components/ui/Button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import paths from '@/lib/paths'
import { useIsAuthenticated, useLogout } from '@/hooks/auth'
import { useUserData } from '@/hooks/user'
import { NAVBAR_LINKS, NAVBAR_LOGIN } from './Navbar.data'

const NavbarMobile = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { isAuthenticated } = useIsAuthenticated()
  const { mutate: logout, isPending } = useLogout()
  const { isLoading: userDataLoading } = useUserData(
    { personal: true },
    false
  )

  return (
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
        {(userDataLoading || isPending) ? (
          'loading...'
        ) : isAuthenticated ? (
          <>
            {NAVBAR_LOGIN.map((link, index) => (
              <Link href={link.href} key={index}>
                <p
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-BlueRegion/Portgage/700 cursor-pointer justify-start flex flex-row font-tex-gyre items-center gap-4 text-[12px]"
                >
                  {link.icon && <span>{React.createElement(link.icon)}</span>}
                  {link.label}
                </p>
              </Link>
            ))}
            <p
              onClick={() => {
                logout()
                setIsMobileMenuOpen(false)
              }}
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
  )
}

export default NavbarMobile
