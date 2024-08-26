'use client'

import GoogleLogin from '@/components/ui/GoogleLogin'
import { useLogin } from '@/hooks/auth'
import { motion } from 'framer-motion'

export const LoginPage = () => {
  const { mutate: login } = useLogin()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="flex flex-col items-center pt-20 md:pt-32 z-20"
    >
      <div className="font-bold flex flex-col md:gap-8 tracking-[1.5px] leading-[36px] font-riffic text-center md:text-[50px] lg:text-[60px] max-md:text-[30px] text-[#2E3881] pt-[64px]">
        <span className="font-riffic">Welcome to </span>
        Open House <br className="md:hidden" /> Fasilkom UI 2024
      </div>
      <GoogleLogin
        onCredential={(credential) => login(credential)}
        className="mt-10"
      />
    </motion.div>
  )
}
