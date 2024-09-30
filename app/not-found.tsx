'use client'

import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center h-[100vh] max-md:pt-[40vh] pt-[10vh] gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative md:w-[717px] md:h-[506px] w-[280px] h-[174px]"
      >
        <Image
          alt="contoh"
          src="/404-notfound.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </motion.div>
    </div>
  )
}
