import Button from '@/components/ui/Button'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const LoginPage = () => {
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
        <p>Welcome to </p>
        Open House <br className="md:hidden" /> Fasilkom UI 2024
      </div>
      <Button className="mt-[64px]">
        <Image src="/logo-google.png" alt="google" width={38} height={38} />
        Log In with Google
      </Button>
    </motion.div>
  )
}
