import {
  Building,
  CircleUserRound,
  FileText,
  House,
  Users,
  ShoppingBag
} from 'lucide-react'

export const NAVBAR_LINKS = [
  {
    href: '/',
    icon: House,
    label: 'Home',
    isExist: true,
  },
  {
    href: '/explore',
    icon: Building,
    label: 'About Fasilkom',
    isExist: true,
  },
  {
    href: '/register',
    icon: FileText,
    label: 'Registration Page',
    isExist: true,
  },
  {
    href: '/merchandise',
    icon: ShoppingBag,
    label: 'Merchandise',
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
