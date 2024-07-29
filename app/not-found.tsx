'use client'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import bg from '@/public/wave-notfound.png'

export default function NotFound() {
  const router = useRouter()
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col items-center h-[100vh] max-md:pt-[20vh]  lg:h-[150vh] gap-3"
    >
      <div className="relative md:w-[717px] md:h-[506px] w-[280px] h-[174px]">
        <Image
          alt="contoh"
          src="/404-notfound.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <Button onClick={() => router.push('/')}>Back to Home</Button>
    </div>
  )
}
