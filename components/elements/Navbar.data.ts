import { Building, CircleUserRound, FileText, House, SquareUserRound, Users } from 'lucide-react'

export const NAVBAR_LINKS = [
  {
    href: '/',
    icon: House,
    label: 'Home',
    isExist: false,
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
    href: '/register',
    icon: FileText,
    label: 'Registration Page',
    isExist: true,
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
