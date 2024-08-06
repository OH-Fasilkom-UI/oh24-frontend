import { House } from 'lucide-react'
import { SquareUserRound } from 'lucide-react'
import { Building } from 'lucide-react'
import { FileText } from 'lucide-react'
import { Users } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'
import { LogOut } from 'lucide-react'

export const NAVBAR_LINKS = [
  {
    href: '/',
    icon: House,
    label: 'Home',
    isExist: true,
  },
  {
    href: '/ambassador',
    icon: SquareUserRound,
    label: 'Ambassador',
    isExist: true,
  },
  {
    href: '/fwefwefw',
    icon: Building,
    label: 'About Fasilkom',
    isExist: false,
  },
  {
    href: '/wefwfew',
    icon: FileText,
    label: 'Registration Page',
    isExist: false,
  },
  {
    href: '/wefwefw',
    icon: Users,
    label: 'Wall of Fame',
    isExist: false,
  },
]

export const NAVBAR_LOGIN = [
  {
    href: '/profile',
    icon: CircleUserRound,
    label: 'Profile',
  },
  // {
  //   href: '/logout',
  //   icon: LogOut,
  //   label: 'Logout',
  // },
]
