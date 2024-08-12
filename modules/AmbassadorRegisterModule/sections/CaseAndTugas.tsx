'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/Toast'
import {
  SubmitAmbassadorData,
  submitAmbassadorSchema,
} from '@/lib/api/registration-ambas'
import RadioGroup from '@/components/ui/RadioGroup'
import { InfoSourceRadio } from '../elements/InfoSourceRadio'
import FileInput from '@/components/ui/FileInput'
import Button from '@/components/ui/Button'
import { Textarea } from '@/components/ui/textarea'
import { Calendly } from './Calendly'
import InputForm from '../elements/InputForm'
import { AccomodationRadio } from '../elements/AccomodationRadio'
import { ArrowLeft, AtSign } from 'lucide-react'
import { BackModal } from '../elements/BackModal'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSubmitAmbassadorData } from '@/hooks/registration'
import Image from 'next/image'

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
    <section>
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
      <p className='text-Text/TextLightBG md:text-[20px] text-[11px] pt-[4px] pb-[60px] text-center'>
        Sebelum kamu mengisi tugas ini, pastikan kamu telah membaca ddan mendownloadd template yang disediakan di guidebook yaa!
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            'flex flex-col justify-center lg:flex-row xl:mx-40 gap-4',
            page === 1 && 'hidden'
          )}
        >
          <div className="bg-[#2E3881E5] rounded-t-[32px] lg:rounded-[32px] py-8 px-5 lg:px-10 flex flex-col gap-[22px] lg:gap-8 lg:w-1/2">
            <FormField
              control={form.control}
              name="infoSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="infoSource"
                    className="max-lg:text-[12px]"
                  >
                    Dari mana kamu mendapatkan informasi mengenai Oprec ini?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      size="normal"
                      color="light"
                      className="flex flex-col space-y-1 max-lg:text-[12px]"
                      onValueChange={(value: string) => field.onChange(value)}
                      {...field}
                    >
                      <InfoSourceRadio />
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reasonForJoining"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      label="Alasan ingin menjadi Ambassador Open House Fasilkom UI"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectations"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      label="Ekspektasi dengan menjadi OH Ambassador"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <InputForm
              form={form}
              icon={<AtSign />}
              name="instagramLink"
              label="Akun Instagram"
              placeholder="Isikan dengan nama akun Instagram"
            />
            <InputForm
              placeholder="Isikan dengan nama akun Tiktok"
              icon={<AtSign />}
              form={form}
              name="tiktokLink"
              label="Akun Tiktok"
            />
            <InputForm
              placeholder="Isikan dengan nama akun Twitter"
              icon={<AtSign />}
              form={form}
              name="twitterLink"
              label="Akun Twitter (opsional)"
            />
            <FormField
              control={form.control}
              name="followIG"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileInput
                      label="Bukti Follow IG OH Fasilkom"
                      file={field.value}
                      setFile={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="story"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileInput
                      label="Bukti Post Insta Story"
                      file={field.value}
                      setFile={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="bg-[#2E3881E5] max-lg:-translate-y-4 rounded-b-[32px] lg:rounded-[32px] pb-8 lg:py-8 px-5 lg:px-10 flex flex-col gap-[22px] lg:gap-8 h-full lg:w-1/2">
            <FormField
              control={form.control}
              name="twibbon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileInput
                      label="Bukti Post Twibbon"
                      file={field.value}
                      setFile={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <InputForm
              placeholder="Isikan dengan tautan video perkenalan"
              form={form}
              name="introductionVideoLink"
              label="Bukti post video perkenalan"
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileInput
                      label="Upload CV"
                      file={field.value}
                      setFile={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mou"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileInput
                      label="Upload MoU"
                      file={field.value}
                      setFile={field.onChange}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ableToAttend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="ableToAttend"
                    className="max-lg:text-[12px]"
                  >
                    Para Ambassador berperan penting dalam kegiatan Open House
                    2024. Bagi pendaftar yang berada di Jabodetabek, kehadiran
                    di Main Event akan menjadi salah satu penilaian kami. Namun,
                    jika pendaftar berada di luar Jabodetabek dan memang tidak
                    dapat menghadiri Main Event, ketidakhadiran pendaftar tidak
                    akan mempengaruhi penilaian kami.
                    <br />
                    <br />
                    Dengan mempertimbangkan hal tersebut, apakah dapat
                    menghadiri Main Event yang berada di Fasilkom UI, Depok pada
                    tanggal 16 November 2024 atau 23 November 2024?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      size="normal"
                      color="light"
                      className="flex flex-col space-y-1"
                      onValueChange={(value: string) => field.onChange(value)}
                      {...field}
                    >
                      <RadioGroup.Item
                        value="Dapat Menghadiri"
                        id="Dapat Menghadiri"
                      >
                        Dapat Menghadiri
                      </RadioGroup.Item>
                      <RadioGroup.Item
                        value="Tidak Menghadiri"
                        id="Tidak Menghadiri"
                      >
                        Tidak Menghadiri
                      </RadioGroup.Item>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accommodation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="Accommodation"
                    className="max-lg:text-[12px]"
                  >
                    Jika iya, apakah akomodasi yang digunakan?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      size="normal"
                      color="light"
                      className="flex flex-col space-y-1"
                      onValueChange={(value: string) => field.onChange(value)}
                      {...field}
                    >
                      <AccomodationRadio />
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              id="submitAmbas"
              type="submit"
              variant={'secondary'}
              className="w-full"
            >
              Next
            </Button>
          </div>
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
