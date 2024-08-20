'use client'

import Button from '@/components/ui/Button'
import { Form } from '@/components/ui/form'
import { toast } from '@/components/ui/Toast'
import { useSubmitAmbassadorData } from '@/hooks/registration'
import { useUserData } from '@/hooks/user'
import {
  SubmitAmbassadorData,
  submitAmbassadorSchema,
} from '@/lib/api/registration-ambas'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BackModal } from '../elements/BackModal'
import { LeftSideForm } from '../elements/LeftSideForm'
import { RightSideForm } from '../elements/RightSideForm'
import { Calendly } from './Calendly'

export const CaseAndTugas = () => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const { isLoading } = useUserData({ personal: true })
  const { mutate: submit } = useSubmitAmbassadorData()

  const form = useForm<SubmitAmbassadorData>({
    resolver: zodResolver(submitAmbassadorSchema),
  })

  const handleBack = () => {
    if (page === 0) {
      setShowModal(true)
    } else {
      setPage(page - 1)
    }
  }

  const onSubmit = async (data: SubmitAmbassadorData) => {
    if (page === 0) {
      return setPage(page + 1)
    }
    submit(data, {
      onSuccess: () => {
        toast.success('Berhasil mengirimkan data')
        router.push('/ambassador')
      },
      onError: (error) => { 
        toast.error(error.message)
      }
    })
  }

  if (isLoading) {
    return 'Loading...'
  }

  useEffect(() => {
    const handleBeforeUnload = (event: { returnValue: string }) => {
      const message = 'You have unsaved changes. Are you sure you want to leave?';
      event.returnValue = message; // Standard way to display the message in modern browsers
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <section
      className='flex flex-col gap-10'
    >
      <BackModal showModal={showModal} setShowModal={setShowModal} />
      <Button
        onClick={handleBack}
        className="flex gap-[14px] cursor-pointer absolute xl:translate-y-[64px]"
      >
        <ArrowLeft />
        Back
      </Button>
      <h1
        className={cn(
          'text-Text/TextLightBG text-[24px] mx-auto text-center lg:text-[36px] pt-[60px] font-bold font-riffic tracking-wider',
          page === 1 && 'hidden'
        )}
      >
        Tugas Calon Ambassador
      </h1>
      <div
        className='w-full flex justify-center'
      >
        <p
          className={cn(
            'text-Text/TextLightBG md:text-[20px] text-sm leading-5 md:leading-9 text-center font-bold max-w-[800px]',
            page === 1 && 'hidden'
          )}
        >
          Sebelum kamu mengisi tugas ini, pastikan kamu telah membaca dan
          mendownload template yang disediakan di guidebook yaa!
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            'flex flex-col justify-center lg:flex-row xl:mx-40 gap-4 relative',
            page === 1 && 'hidden'
          )}
        >
          <Image
            src={'/medali.png'}
            alt="medali"
            width={87}
            height={125}
            className="absolute right-5 max-lg:top-0 max-lg:-translate-y-6 lg:bottom-1 translate-x-12 z-10"
          />
          <LeftSideForm form={form} />
          <RightSideForm form={form}>
            <Button
              id="submitAmbas"
              type="submit"
              variant={'secondary'}
              className="w-full"
            >
              Next
            </Button>
          </RightSideForm>
        </form>
      </Form>
      <Calendly
        showCalendly={page === 1}
        onSubmit={() => {
          document.getElementById('submitAmbas')?.click()
        }}
      />
    </section>
  )
}
