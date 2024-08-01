import React from 'react'
import bg from '@/public/background-login.png'
import { LoginPage } from './sections/LoginPage'
import mbg from '@/public/background-login-mobile.png'

export const LoginModule = () => {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-screen max-md:hidden min-h-screen md:h-[150vh] min-[2500px]:h-[2200px]"
      >
        <LoginPage />
      </div>
      <div
        style={{
          backgroundImage: `url(${mbg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="min-w-full md:hidden max-sm:min-h-screen max-md:h-[600px]"
      >
        <LoginPage />
      </div>
    </main>
  )
}
