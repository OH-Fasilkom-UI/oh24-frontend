'use client'
import Countdown from '@/components/elements/Countdown'
import Button from '@/components/ui/Button'
import bridge from '@/public/landing-page-bridge.png'
import cities from '@/public/landing-page-cities.png'
import effect from '@/public/landing-page-effect.png'
import glow from '@/public/landing-page-glow.png'
import train1 from '@/public/landing-page-train1.png'
import train2 from '@/public/landing-page-train2.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../moving.module.css'
import { useUserData } from '@/hooks/user'
import QRCode from 'react-qr-code'
import { useRef } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog'
import { QrCode } from 'lucide-react'

const LandingPageHero = () => {
  const qrCodeSmallRef = useRef<HTMLDivElement>(null)
  const { userData, isLoading } = useUserData({ personal: true, ticket: true })

  console.log(userData);
  
  const isScannedBefore = userData?.ticket?.present ?? false;

  return (
    <>
      <Image
        src={effect}
        alt="effect"
        width={1400}
        className="object-contain z-20 absolute inset-0 m-auto mt-0"
      />
      <Image
        src={glow}
        alt="glow"
        width={900}
        height={900}
        className="object-contain -z-40 absolute inset-0 m-auto mt-0 max-sm:mt-[50px] max-sm:scale-125 max-sm:max-w-auto sm:w-[900px] "
      />
      <Image
        src={cities}
        alt="city"
        width={1920}
        height={1080}
        className="object-contain -z-30 absolute -left-5 m-auto max-[400px]:-left-20 max-[400px]:mt-[20rem] mt-[18rem] sm:mt-[32rem] lg:mt-[30rem] xl:mt-[26rem] max-[400px]:max-w-[500px] max-w-[650px]  sm:max-w-[1000px] lg:max-w-[1300px]  xl:max-w-[1600px] max-h-[1080px]"
      />
      <Image
        src={bridge}
        alt="bridge"
        className="object-contain -z-10 absolute inset-0 m-auto mt-[26rem] sm:mt-[44rem] lg:mt-[45rem] max-[400px]:max-w-[500px] max-w-[650px] sm:max-w-[1000px] lg:max-w-[1300px] xl:max-w-[2100px] max-h-[1080px]"
      />
      <Image
        src={train1}
        alt="train1"
        width={900}
        height={900}
        className={`object-contain -z-20 absolute  mt-[24rem] sm:mt-[42rem] xl:mt-[40rem] right-0 max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] max-h-[300px] ${styles.animateMove}`}
      />
      <Image
        src={train2}
        alt="train2"
        width={500}
        height={500}
        className={`object-contain -z-30 absolute mt-[25rem] sm:mt-[43rem] lg:mt-[44rem] xl:mt-[43rem]  right-0   max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[800px] max-h-[300px] animate-move2 ${styles.animateMove2}`}
      />
      <div className="mt-[100px] sm:mt-[180px] flex flex-col items-center ">
        <h2 className="font-bold text-center text-Text/TextLightBG leading-[50px] text-[26px] sm:text-t2 max-sm:leading-[29px] tracking-wider">
          Open House
          <br /> &nbsp;Fasilkom UI 2024
        </h2>
        <div className="mt-6 sm:mt-12">
          <Countdown
            targetDate={new Date('2024-11-20T23:00:00+0700')}
            displayDate
            classNameType="sm:text-xl text-white"
            classNameBlock=" w-[60px] h-[70px] sm:w-20 sm:h-24 sm:w-28 sm:h-32 mt-3 mb-3 sm:mb-8"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-12 my-6 sm:my-12">
          {
            userData?.ticket?.eventName?.startsWith('FULL') &&
            <Dialog>
              <DialogTrigger>
                <Button>
                  <QrCode />
                  See QR Code
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Scan Your QR
                  </DialogTitle>
                </DialogHeader>
                <div
                  className="flex flex-col items-center gap-3.5 mt-8"
                  ref={qrCodeSmallRef}
                  >
                    {
                      userData ?
                        (
                          <>
                            <QRCode
                              value={userData?.ticket?.id ?? 'oh24'}
                              size={200}
                              className="shadow-lg bg-white p-3 rounded-md"
                            />
                            <p className="font-bold text-center">
                              {isScannedBefore ? "Kamu telah terdaftar untuk mengikuti Main Event!" : "Scan saat Main Event!"}
                            </p>
                          </>
                        )   
                        :
                        "Loading Your QR..."
                    }
                </div>
              </DialogContent>
            </Dialog>
          }
          <Link href="/explore">
            <Button className="h-[40px] sm:h-[50px] w-full sm:w-[200px] text-[10px] sm:text-[12px]" variant={'secondary'}>
              About OH 2024
            </Button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default 
LandingPageHero
