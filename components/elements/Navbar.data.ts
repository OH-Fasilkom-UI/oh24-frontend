import {
  Building,
  CircleUserRound,
  FileText,
  House,
  SquareUserRound,
  Users,
} from 'lucide-react'

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
    href: '/explore',
    icon: Building,
    label: 'About Fasilkom',
    isExist: true,
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
