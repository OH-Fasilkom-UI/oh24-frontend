'use client'

import Image from 'next/image'
import { LoginPage } from './sections/LoginPage'

export const LoginModule = () => {
  return (
    <main className="min-h-screen flex flex-col gap-[60vh] md:gap-[70vh] lg:gap-[110vh]">
      <LoginPage />
      <div className="relative">
        <Image
          src="/login-desktop.png"
          alt="login"
          layout="responsive"
          width={1920}
          height={1500}
          className="hidden md:block w-full absolute z-0 bottom-0"
        />
        <Image
          src="/login-mobile.png"
          alt="login"
          layout="cover"
          width={375}
          height={812}
          className="block md:hidden w-full absolute z-0 bottom-0 min-[350px]:-bottom-[200px] min-[500px]:-bottom-[400px] min-[600px]:-bottom-[600px]"
        />
      </div>
    </main>
  )
}
