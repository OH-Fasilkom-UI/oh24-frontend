'use client'

import Image from 'next/image'
import { LoginPage } from './sections/LoginPage'

export const LoginModule = () => {
  return (
    <main className='relative min-h-screen'>
      <Image
        src="/login-desktop.png"
        alt="login"
        layout="responsive"
        width={1920}
        height={1500}
        className="hidden md:block w-full absolute z-[-1] mt-52"
      />
      <Image
        src="/login-mobile.png"
        alt="login"
        layout="cover"
        width={375}
        height={812}
        className="block md:hidden w-full absolute z-[-1] mt-52 bottom-0 min-[350px]:-bottom-[200px] min-[500px]:-bottom-[400px] min-[600px]:-bottom-[600px]"
      />
      <Image
        src={'/main-wave.svg'}
        alt="wave"
        layout="cover"
        width={1920}
        height={1500}
        className="fixed z-[-2] bottom-0 w-full object-cover h-screen"
      />
      <LoginPage /> 
    </main>
  )
}
