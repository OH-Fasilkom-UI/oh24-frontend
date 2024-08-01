import { Toaster } from '@/components/ui/Toast'
import { Alerter } from '@/components/ui/Alert'
import { Navbar } from '@/components/elements/Navbar'
import Footer from '@/components/elements/Footer'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

const rifficFont = localFont({
  src: './fonts/rifficfree-bold.ttf',
  weight: '700',
  style: 'normal',
  variable: '--font-riffic',
})

const texGyreAdventorFont = localFont({
  src: [
    {
      path: './fonts/texgyreadventor-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/texgyreadventor-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/texgyreadventor-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/texgyreadventor-bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-tex-gyre-adventor',
})

export const metadata: Metadata = {
  title: 'Open House Fasilkom UI 2024',
  description: 'Open House Fasilkom UI 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${texGyreAdventorFont.variable} ${rifficFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="font-tga font-normal flex flex-col justify-between bg-[#B5D3DD] min-h-screen" suppressHydrationWarning suppressContentEditableWarning>
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-center" />
        <Alerter />
        <Footer />
      </body>
    </html>
  )
}
