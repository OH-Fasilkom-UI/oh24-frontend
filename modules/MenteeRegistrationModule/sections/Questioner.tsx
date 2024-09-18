'use client'
import React from 'react'
import bg from '@/public/KotaBelakang.png'
import bg2 from '@/public/KotaDikit.png'
import {
  submitQuestionnaireSchema,
  SubmitQuestionnaireData,
} from '@/lib/api/registration-mentee'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import Button from '@/components/ui/Button'
import RadioGroup from '@/components/ui/RadioGroup'
import {
  AccomodationRadio,
  CompanionRadio,
  InterestRadio,
} from '../elements/RadioItem'
import { Accommodation, Companion } from '@/lib/api/registration-mentee'

export const Questioner = () => {
  const form = useForm<SubmitQuestionnaireData>({
    resolver: zodResolver(submitQuestionnaireSchema),
  })

  const onSubmit = async (data: SubmitQuestionnaireData) => {}
  return (
    <section
      className="min-h-[100vh] w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg2.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="rounded-[32px] bg-Text/TextLightBG/90 shadow-timeline px-[70px] py-10 max-w-[660px]">
            <FormField
              control={form.control}
              name={'answers.0'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 text-center font-tex-gyre tracking-wider mb-[18px]">
                    Seberapa tertarik Kamu terhadap bidang Ilmu Komputer/Sistem
                    Informasi/Teknologi
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="grid grid-rows-2 grid-flow-col gap-[26px] justify-center items-center tracking-wide"
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
            <hr className="my-9" />
            <FormField
              control={form.control}
              name={'answers.1'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 text-center font-tex-gyre tracking-wider mb-[18px]">
                    Seberapa besar keinginan Kamu untuk masuk Fasilkom UI
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="grid grid-rows-2 grid-flow-col gap-[26px] justify-center items-center tracking-wide"
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
            <hr className="my-9" />
            <FormField
              control={form.control}
              name={'answers.2'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 text-center font-tex-gyre tracking-wider mb-[18px]">
                    Seberapa besar keinginan Kamu untuk mengikuti rangkaian
                    acara Open House Fasilkom UI
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="grid grid-rows-2 grid-flow-col gap-[26px] justify-center items-center tracking-wide"
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
            <hr className="my-9" />
            <FormField
              control={form.control}
              name={'accommodation'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 text-center font-tex-gyre tracking-wider mb-[18px]">
                    Apabila ingin mengikuti Main Event yang berada di Fasilkom
                    UI, Depok pada tanggal 16 November 2024 atau 17 November
                    2024, akomodasi yang digunakan?
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="flex flex-row gap-[26px] justify-center items-center tracking-wide"
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
            <hr className="my-9" />
            <FormField
              control={form.control}
              name={'companion'}
              render={({ field }) => (
                <FormItem>
                  <h1 className="text-Text/TextDarkBG font-bold text-t7 text-center font-tex-gyre tracking-wider mb-[18px]">
                    Apabila ingin mengikuti Main Event yang berada di Fasilkom
                    UI, Depok pada tanggal 16 November 2024 atau 17 November
                    2024, mengunjungi dengan siapa?
                  </h1>
                  <FormControl>
                    <RadioGroup
                      size="small"
                      color="light"
                      className="flex flex-row gap-[26px] justify-center items-center tracking-wide"
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
          </div>
          <Button type="submit" className="w-full" variant={'ghost'}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
