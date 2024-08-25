import FileInput from '@/components/ui/FileInput'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import RadioGroup from '@/components/ui/RadioGroup'
import React from 'react'
import { FieldValues, Path } from 'react-hook-form'
import { CustomFormProps } from '../interface'
import { AccomodationRadio } from './AccomodationRadio'
import InputForm from './InputForm'

export const RightSideForm = <
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined,
>({
  form,
  children,
}: CustomFormProps<T, U, V> & { children: React.ReactNode }) => {
  return (
    <div className="bg-[#2E3881E5] max-lg:-translate-y-4 rounded-b-[32px] lg:rounded-[32px] pb-8 lg:py-8 px-5 lg:px-10 flex flex-col gap-[22px] lg:gap-8 h-full lg:w-1/2">
      <FormField
        control={form.control}
        name={'twibbon' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FileInput
                label="Bukti Post Twibbon"
                secondaryMessage='Unggah file JPG/PNG/JPEG dengan maksimum 2MB'
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
        name={'introductionVideoLink' as Path<T>}
        label="Bukti post video perkenalan"
      />
      <FormField
        control={form.control}
        name={'cv' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FileInput
                label="Upload CV"
                secondaryMessage='Unggah file PDF dengan maksimum 2MB'
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
        name={'mou' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FileInput
                label="Upload MoU"
                secondaryMessage='Unggah file PDF dengan maksimum 2MB'
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
        name={'ableToAttend' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="ableToAttend" className="max-lg:text-[12px]">
              Para Ambassador berperan penting dalam kegiatan Open House 2024.
              Bagi pendaftar yang berada di Jabodetabek, kehadiran di Main Event
              akan menjadi salah satu penilaian kami. Namun, jika pendaftar
              berada di luar Jabodetabek dan memang tidak dapat menghadiri Main
              Event, ketidakhadiran pendaftar tidak akan mempengaruhi penilaian
              kami.
              <br />
              <br />
              Dengan mempertimbangkan hal tersebut, apakah dapat menghadiri Main
              Event yang berada di Fasilkom UI, Depok pada tanggal 23 November
              2024 atau 24 November 2024?
            </FormLabel>
            <FormControl>
              <RadioGroup
                size="normal"
                color="light"
                className="flex flex-col space-y-1"
                onValueChange={(value: string) => field.onChange(value)}
                {...field}
              >
                <RadioGroup.Item value="Dapat Menghadiri" id="Dapat Menghadiri">
                  Dapat Menghadiri
                </RadioGroup.Item>
                <RadioGroup.Item value="Tidak Menghadiri" id="Tidak Menghadiri">
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
        name={'accommodation' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="Accommodation" className="max-lg:text-[12px]">
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
      {children}
    </div>
  )
}
