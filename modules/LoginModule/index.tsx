'use client'
import mbg from '@/public/background-login-mobile.png'
import bg from '@/public/background-login.png'
import { LoginPage } from './sections/LoginPage'

export const LoginModule = () => {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full max-md:hidden min-h-screen md:h-[160vh] min-[2500px]:h-[2200px]"
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
        className="w-full md:hidden min-h-screen md:h-[150vh] min-[2500px]:h-[2200px]"
      >
        <LoginPage />
      </div>
    </main>
  )
}
