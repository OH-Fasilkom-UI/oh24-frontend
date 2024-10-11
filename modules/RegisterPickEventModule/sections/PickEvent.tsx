'use client'

import { Loader } from '@/components/elements/Loader'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import RadioGroup from '@/components/ui/RadioGroup'
import { toast } from '@/components/ui/Toast'
import { useSubmitEvent } from '@/hooks/registration'
import { useUserData } from '@/hooks/user'
import { submitEventSchema } from '@/lib/api/registration-mentee'
import Image from 'next/image'
import { useEffect, useState } from 'react'
interface Event {
  events: {
    name: string
    canRegister: boolean
  }[]
}

export const PickEventSection = ({ onClick }: { onClick: () => void }) => {
  const { userData, isLoading } = useUserData({ personal: true })
  const [eventDate, setEventDate] = useState<string>('')
  const [referralCode, setReferralCode] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isOneofExperienceFull, setIsOneofExperienceFull] = useState<number>(0)
  const { mutate: submit, isPending } = useSubmitEvent()

  const [isFullExperienceFull, setIsFullExperienceFull] =
    useState<boolean>(false)
  const [isOnlineExperienceFull, setIsOnlineExperienceFull] =
    useState<boolean>(false)

  // Placeholder fetch kapasitas event
  useEffect(() => {
    const fetchEligibility = async () => {
      const data = await fetch('/api/event')
      const response: Event = await data.json()
      let isFullExperience1Full = false
      let isFullExperience2Full = false
      response.events.forEach((event) => {
        if (event.name === 'FULL_EXPERIENCE_1' && !event.canRegister) {
          isFullExperience1Full = true
        } else if (event.name === 'ONLINE_EXPERIENCE' && !event.canRegister) {
          setIsOnlineExperienceFull(true)
        } else if (event.name === 'FULL_EXPERIENCE_2' && !event.canRegister) {
          isFullExperience2Full = true
        }
      })

      if (isFullExperience1Full && isFullExperience2Full) {
        return setIsFullExperienceFull(
          isFullExperience1Full && isFullExperience2Full
        )
      } else if (isFullExperience1Full) {
        return setIsOneofExperienceFull(1)
      } else if (isFullExperience2Full) {
        return setIsOneofExperienceFull(2)
      }
    }
    fetchEligibility()
    const eligibleFor: string[] = userData?.eligibleFor || []

    setIsFullExperienceFull(
      !eligibleFor.includes('FULL_EXPERIENCE_1') ||
      !eligibleFor.includes('FULL_EXPERIENCE_2')
    )
    setIsOnlineExperienceFull(!eligibleFor.includes('ONLINE_EXPERIENCE'))
  }, [isLoading])

  const handleSubmit = async () => {
    const result = submitEventSchema.safeParse({
      event: eventDate,
      referral: referralCode,
    })

    if (result.success) {
      // Check if eventDate is selected
      if (!eventDate) {
        toast.error('Please select an event date.')
        return
      }

      submit(result.data, {
        onSuccess: () => {
          toast.success('Berhasil mendaftar')
          onClick()
        },
        onError: () => {
          toast.error('Referral tidak valid')
        },
      })
    } else {
      const errorMessages = result.error.errors
        .map((err) => err.message)
        .join(', ')
      toast.error(`Validation Failed: ${errorMessages}`)
      // console.error("Validation Failed", result.error);
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (userData?.hasTicket) {
    onClick()
    return null
  }

  return (
    <section className="mt-5 overflow-x-hidden">
      <div className="absolute w-full max-lg:h-[100vh] h-[145vh] z-0 max-lg:top-60">
        <Image
          className="absolute object-cover"
          fill
          sizes="none"
          src="/register/pick-event-background.png"
          alt="Background"
        />
      </div>
      <div className="flex flex-col items-center px-5 md:px-10 lg:px-3 pb-5">
        <div className="w-full flex justify-center items-center mt-[2vw] z-20 gap-16 max-lg:flex-col">
          {/* Card Main Event */}
          <Card
            className={`w-[561px] h-[516px] flex flex-col justify-between items-center py-10 max-lg:h-fit max-md:w-[84vw] max-sm:w-[90vw] ${isFullExperienceFull ? 'bg-[#5C5A5AE6] pointer-events-none' : ''}`}
            style={{
              background: isFullExperienceFull
                ? 'rgba(92, 90, 90, 0.9)'
                : 'rgba(46, 56, 129, 0.9)',
              boxShadow:
                '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
              borderRadius: '32px',
            }}
          >
            <div className="h-[60%]">
              <h1 className="h-fit text-t3 text-shadow-pickEvent text-[#E0ECFF] flex justify-center mt-6 text-nowrap max-sm:text-t4 max-[400px]:text-[26px]">
                Full Experience
              </h1>
              <div className="flex flex-col gap-5 mt-8 text-t7 max-sm:text-t8 max-[400px]:text-[12px]">
                <div className="leading-[24px]">
                  <h1>1. CS Connect</h1>
                  <ul className="list-disc ml-10">
                    <li>
                      <strong>Tanggal:</strong> Sabtu, 9 November 2024
                    </li>
                    <li>
                      <strong>Waktu:</strong> 12.00 - 16.00
                    </li>
                    <li>
                      <strong>Tempat:</strong> Zoom Meeting
                    </li>
                  </ul>
                </div>

                <div className="leading-[24px]">
                  <h1>2. Main Event</h1>
                  <ul className="list-disc ml-10">
                    <li>
                      <strong>Tanggal:</strong> Sabtu, 23 November 2024
                    </li>
                    <li>
                      <strong>Waktu:</strong> 07.00 - 13.00 <strong>(Sesi Pagi)</strong> dan 12.00 - 18.00 <strong>(Sesi Siang)</strong>
                    </li>
                    <li>
                      <strong>Tempat:</strong> Gedung Lama, Fasilkom UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-8">
              <h1 className="text-t6 max-sm:text-t7 ">
                Pilih sesi Main Event:
              </h1>
              <div className="flex gap-8 mt-2 mb-6">
                <RadioGroup
                  size="small"
                  color="light"
                  value={eventDate}
                  onValueChange={(value) => setEventDate(value)}
                  className="flex-row flex gap-6 max-sm:flex-col max-sm:gap-4"
                >
                  <RadioGroup.Item
                    value="FULL_EXPERIENCE_1"
                    id="16nov"
                    className="inline-block"
                    disabled={
                      isFullExperienceFull || isOneofExperienceFull === 1
                    }
                  >
                    Sesi Pagi
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="FULL_EXPERIENCE_2"
                    id="17nov"
                    className="inline-block"
                    disabled={
                      isFullExperienceFull || isOneofExperienceFull === 2
                    }
                  >
                    Sesi Siang
                  </RadioGroup.Item>
                </RadioGroup>
              </div>
            </div>
          </Card>

          {/* Card Online */}
          <Card
            className={`w-[561px] h-[516px] flex flex-col justify-between items-center py-10 max-lg:h-fit max-md:w-[84vw] max-sm:w-[90vw] ${isOnlineExperienceFull ? 'bg-[#5C5A5AE6] pointer-events-none' : ''}`}
            style={{
              background: isOnlineExperienceFull
                ? 'rgba(92, 90, 90, 0.9)'
                : 'rgba(46, 56, 129, 0.9)',
              boxShadow:
                '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
              borderRadius: '32px',
            }}
          >
            <div className="h-[60%]">
              <h1 className="h-fit text-t3 text-shadow-pickEvent text-[#E0ECFF] flex justify-center mt-6 text-nowrap max-sm:text-t4 max-[400px]:text-[26px]">
                Online Experience
              </h1>
              <div className="flex flex-col gap-5 mt-8 text-t7 max-sm:text-t8 max-[400px]:text-[12px]">
                <div className="leading-[24px] md:-ml-[1vw]">
                  <h1>1. CS Connect &#40;penjelasan&#41;</h1>
                  <ul className="list-disc ml-10">
                    <li>
                      <strong>Tanggal:</strong> Sabtu, 9 November 2024
                    </li>
                    <li>
                      <strong>Waktu:</strong> 13.00 - 16.00
                    </li>
                    <li>
                      <strong>Tempat:</strong> Zoom Meeting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-8">
              <h1 className="text-t6 max-sm:text-t7 max-[400px]:text-t8">
                Pilih tanggal CS Connect:
              </h1>

              <div className="flex flex-row gap-10 mt-2 mb-6">
                <RadioGroup
                  size={'small'}
                  color={'light'}
                  value={eventDate}
                  onValueChange={(value) => setEventDate(value)}
                >
                  <RadioGroup.Item
                    value="ONLINE_EXPERIENCE"
                    id="9nov"
                    disabled={isOnlineExperienceFull}
                  >
                    9 November 2024
                  </RadioGroup.Item>
                </RadioGroup>
              </div>
            </div>
          </Card>
        </div>

        <form
          className="w-[27rem] mt-6 py-6 px-8 max-md:mt-16 max-lg:w-[561px] max-md:w-[84vw] z-10"
          style={{
            background: 'rgba(46, 56, 129, 0.9)',
            boxShadow:
              '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
            borderRadius: '32px',
          }}
        >
          <Input
            label="Kode Referral"
            placeholder="Masukkan Kode Referral"
            className="w-full border-[#ffffff2a]"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        </form>
        <div className="mt-6 max-md:mt-10 z-10">
          <Button
            onClick={handleSubmit}
            className={`bg-BlueRegion/Cornflower/50 text-Text/TextLightBG py-2 px-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>
      <Image
        src="/pesawat-kanan-2.png"
        alt="pesawat-kanan"
        width={400}
        height={266}
        className="absolute right-0 top-56 animate-float-horizontal z-20 max-lg:hidden"
      />
    </section>
  )
}
