'use client'
import Button from '@/components/ui/Button'
import { Form } from '@/components/ui/form'
import { toast } from '@/components/ui/Toast'
import { useSubmitAmbassadorData } from '@/hooks/registration'
import {
  SubmitAmbassadorData,
  submitAmbassadorSchema,
} from '@/lib/api/registration-ambas'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BackModal } from '../elements/BackModal'
import { LeftSideForm } from '../elements/LeftSideForm'
import { RightSideForm } from '../elements/RightSideForm'
import { Calendly } from './Calendly'

export const CaseAndTugas = () => {
  const [page, setPage] = useState(0)
  const [showModal, setShowModal] = useState(false)
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
        redirect('/ambassador')
      },
    })
  }

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
      <p
        className={cn(
          'text-Text/TextLightBG md:text-[20px] text-[11px] pt-[4px] pb-[60px] text-center',
          page === 1 && 'hidden'
        )}
      >
        Sebelum kamu mengisi tugas ini, pastikan kamu telah membaca ddan
        mendownloadd template yang disediakan di guidebook yaa!
      </p>
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
            className="absolute right-0 max-lg:top-0 max-lg:-translate-y-6 lg:bottom-1 translate-x-12 z-10"
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
