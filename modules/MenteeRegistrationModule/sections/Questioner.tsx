'use client'

import { Loader } from '@/components/elements/Loader'
import Button from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import RadioGroup from '@/components/ui/RadioGroup'
import { toast } from '@/components/ui/Toast'
import { useSubmitQuestionnaire } from '@/hooks/registration'
import { useUserData } from '@/hooks/user'
import {
  Accommodation,
  Companion,
  SubmitQuestionnaireData,
  submitQuestionnaireSchema,
} from '@/lib/api/registration-mentee'
import { cn } from '@/lib/utils'
import bg2 from '@/public/KotaBelakang.png'
import bg from '@/public/KotaDikit.png'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import {
  AccomodationRadio,
  CompanionRadio,
  InterestRadio,
} from '../elements/RadioItem'

export const Questioner = ({ onClick }: { onClick: () => void }) => {
  const { userData, isLoading } = useUserData({ personal: true })
  const { mutate: submit, isPending } = useSubmitQuestionnaire()

  const form = useForm<SubmitQuestionnaireData>({
    resolver: zodResolver(submitQuestionnaireSchema),
  })

  const onSubmit = async (data: SubmitQuestionnaireData) => {
    submit(data, {
      onSuccess: async () => {
        toast.success('Berhasil mengirimkan data')
        await new Promise((resolve) => setTimeout(resolve, 5000))
        onClick()
      },
      onError: () => {
        toast.error('Terjadi Kesalahan!')
      },
    })
  }

  if (isLoading) {
    return <Loader />
  }

  if (userData?.hasQuestionnaire) {
    onClick()
    return null
  }

  return (
    <section
      className={cn(
        'min-h-[100vh] w-full px-[10vw] flex justify-center items-center py-52',
        userData?.personal?.domicile === 'NON_JABODETABEK' && 'py-[20vh]'
      )}
      style={{
        backgroundImage: `url(${userData?.personal?.domicile === 'JABODETABEK' ? bg2.src : bg.src})`,
        backgroundSize:
          userData?.personal?.domicile === 'JABODETABEK' ? 'cover' : 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="rounded-[32px] bg-Text/TextLightBG/90 shadow-timeline px-[30px] md:px-[70px] py-8 md:py-10 max-w-[660px] space-y-[34px]">
            <FormField
              control={form.control}
              name={'answers.0'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 max-sm:text-[10px] text-center font-tex-gyre tracking-wider mb-[18px] max-sm:mb-[14px]">
                    Seberapa tertarik Kamu terhadap bidang Ilmu Komputer/Sistem
                    Informasi/Teknologi
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="flex flex-col flex-wrap sm:flex-row md:gap-x-[26px] gap-y-2 gap-x-2 justify-center md:items-center tracking-wide max-sm:text-[8px]"
                      onValueChange={(value: string) =>
                        field.onChange(value as unknown as Number)
                      }
                      {...field}
                      value={field.value as unknown as string}
                    >
                      <InterestRadio />
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <hr className="my-9 max-sm:hidden" />
            <FormField
              control={form.control}
              name={'answers.1'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 max-sm:text-[10px] text-center font-tex-gyre tracking-wider mb-[18px] max-sm:mb-[14px]">
                    Seberapa besar keinginan Kamu untuk masuk Fasilkom UI
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="flex flex-col flex-wrap sm:flex-row md:gap-x-[26px] gap-y-2 gap-x-2 justify-center md:items-center tracking-wide max-sm:text-[8px]"
                      onValueChange={(value: string) =>
                        field.onChange(value as unknown as Number)
                      }
                      {...field}
                      value={field.value as unknown as string}
                    >
                      <InterestRadio />
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <hr className="my-9 max-sm:hidden" />
            <FormField
              control={form.control}
              name={'answers.2'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 max-sm:text-[10px] text-center font-tex-gyre tracking-wider mb-[18px] max-sm:mb-[14px]">
                    Seberapa besar keinginan Kamu untuk mengikuti rangkaian
                    acara Open House Fasilkom UI
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="flex flex-col flex-wrap sm:flex-row md:gap-x-[26px] gap-y-2 gap-x-2 justify-center md:items-center tracking-wide max-sm:text-[8px]"
                      onValueChange={(value: string) =>
                        field.onChange(value as unknown as Number)
                      }
                      {...field}
                      value={field.value as unknown as string}
                    >
                      <InterestRadio />
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {userData?.personal?.domicile === 'NON_JABODETABEK' && (
              <>
                <div className="absolute max-lg:w-[410px] max-md:w-[300px] max-[400px]:w-[300px] max-[400px]:h-[100px] w-[500px] h-[400px] right-0 top-[40vh] max-xl:hidden z-10 animate-float-vertical">
                  <Image
                    alt="contoh"
                    src="/PesawatBiru.png"
                    fill
                    sizes="none"
                    className="object-contain"
                  />
                </div>
                <div className="absolute max-lg:w-[410px] max-md:w-[300px] max-[400px]:w-[300px] max-[400px]:h-[100px] w-[500px] h-[400px] left-[10vw] top-[40vh] max-xl:hidden -z-10 animate-float-vertical">
                  <Image
                    alt="contoh"
                    src="/pesawat-kanan-2.png"
                    fill
                    sizes="none"
                    className="object-contain"
                  />
                </div>
                <hr className="my-9 max-sm:hidden" />
                <FormField
                  control={form.control}
                  name={'accommodation'}
                  render={({ field }) => (
                    <FormItem>
                      <h1 className="text-Text/TextDarkBG font-bold text-t7 max-sm:text-[10px] text-center font-tex-gyre tracking-wider mb-[18px] max-sm:mb-[14px]">
                        Apabila ingin mengikuti Main Event yang berada di
                        Fasilkom UI, Depok pada tanggal 23 November, akomodasi yang digunakan?
                      </h1>
                      <FormControl>
                        <RadioGroup
                          size="small"
                          color="light"
                          className="flex flex-col flex-wrap sm:flex-row md:gap-x-[26px] gap-y-2 gap-x-2 justify-center md:items-center tracking-wide max-sm:text-[8px]"
                          onValueChange={(value: string) =>
                            field.onChange(value as unknown as Accommodation)
                          }
                          {...field}
                          value={field.value as unknown as string}
                        >
                          <AccomodationRadio />
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <hr className="my-9 max-sm:hidden" />
                <FormField
                  control={form.control}
                  name={'companion'}
                  render={({ field }) => (
                    <FormItem>
                      <h1 className="text-Text/TextDarkBG font-bold text-t7 max-sm:text-[10px] text-center font-tex-gyre tracking-wider mb-[18px] max-sm:mb-[14px]">
                        Apabila ingin mengikuti Main Event yang berada di
                        Fasilkom UI, Depok pada tanggal 23 November 2024, mengunjungi dengan siapa?
                      </h1>
                      <FormControl>
                        <RadioGroup
                          size="small"
                          color="light"
                          className="flex flex-col flex-wrap sm:flex-row md:gap-x-[26px] gap-y-2 gap-x-2 justify-center md:items-center tracking-wide max-sm:text-[8px]"
                          onValueChange={(value: string) =>
                            field.onChange(value as unknown as Companion)
                          }
                          {...field}
                          value={field.value as unknown as string}
                        >
                          <CompanionRadio />
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <Button
            disabled={isPending}
            type="submit"
            className="w-full max-sm:w-[90px] mx-auto"
            variant={'ghost'}
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
