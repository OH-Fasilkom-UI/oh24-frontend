'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, LogOut } from 'lucide-react'
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

const NavbarDesktop = () => {
  const pathname = usePathname()
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
  const { isAuthenticated } = useIsAuthenticated()
  const { mutate: logout, isPending } = useLogout()
  const { userData, isLoading: userDataLoading } = useUserData(
    { personal: true },
    false
  )

  return (
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
        {(userDataLoading || isPending) ? (
          'loading...'
        ) : isAuthenticated ? (
          <Popover open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
            <PopoverTrigger asChild>
              <button className="max-lg:hidden items-center text-BlueRegion/Portgage/700 flex flex-row gap-2 max-xl:text-[12px] text-[16px] font-bold whitespace-nowrap hover:text-RedRegion/Monza/700 font-tex-gyre">
                Welcome, {userData?.personal.fullName}{' '}
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
                onClick={() => {
                  logout()
                  setIsUserMenuOpen(false)
                }}
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
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </>
  )
}

export default NavbarDesktop
