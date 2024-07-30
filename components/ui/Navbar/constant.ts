import { House } from 'lucide-react'
import { SquareUserRound } from 'lucide-react'
import { Building } from 'lucide-react'
import { FileText } from 'lucide-react'
import { Users } from 'lucide-react'

export const NAVBAR_LINKS = [
  {
    href: '/home',
    icon: House,
    label: 'Home',
  },
  {
    href: '/',
    icon: SquareUserRound,
    label: 'Ambassador',
  },
  {
    href: '/',
    icon: Building,
    label: 'About Fasilkom',
  },
  {
    href: '/',
    icon: FileText,
    label: 'Registration Page',
  },
  {
    href: '/',
    icon: Users,
    label: 'Wall of Fame',
  },
]
