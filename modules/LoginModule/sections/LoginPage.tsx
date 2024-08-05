'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLogin } from '@/hooks/auth'
import GoogleLogin from '@/components/ui/GoogleLogin'

export const LoginPage = () => {
  const router = useRouter()
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
      className="flex flex-col items-center mt-20 md:mt-32"
    >
      <div className="font-bold flex flex-col md:gap-8 tracking-[1.5px] leading-[36px] font-riffic text-center md:text-[50px] lg:text-[60px] max-md:text-[30px] text-[#2E3881] pt-[64px]">
        <span className="font-riffic">Welcome to </span>
        Open House <br className="md:hidden" /> Fasilkom UI 2024
      </div>
      <GoogleLogin
        onCredential={(credential) =>
          login(credential, {
            onSuccess(data) {
              if (data.success) {
                router.push('/detailform')
              }
            },
          })
        }
        className="mt-10"
      />
    </motion.div>
  )
}
