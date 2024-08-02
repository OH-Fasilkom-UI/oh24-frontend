'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Card from '@/components/ui/Card'
import { Form } from '@/components/ui/form'
import InputForm from '../components/InputForm'
import Button from '@/components/ui/Button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Label } from '@/components/ui/label'

export const formSchema = z.object({
  namaLengkap: z.string().min(3, 'Nama Lengkap harus diisi'),
  domisili: z.enum(['Jabodetabek', 'Luar Jabodetabek']),
  tanggalLahir: z
    .string()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/,
      'Format harus DD-MM-YYYY'
    ),
  asalSekolah: z.string().min(5, 'Asal Sekolah hsarus diisi'),
  nomorWhatsApp: z
    .string()
    .regex(
      /^(\+62|62|0)8[1-9][0-9]{8,10}$/,
      'Nomor harus berawalan 08 dan minimal 10 digit'
    ),
  kelas: z.enum([
    'Kelas 10',
    'Kelas 11',
    'Kelas 12',
    'Gap Year/Semi Gap',
    'SMP',
  ]),
  namaOrangtua: z.string().min(5, 'Nama Orangtua harus diisi'),
  nomorTeleponOrangtua: z
    .string()
    .regex(
      /^(\+62|62|0)8[1-9][0-9]{8,10}$/,
      'Nomor harus berawalan 08 dan minimal 10 digit'
    ),
})

const DetailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaLengkap: '',
      domisili: 'Jabodetabek',
      tanggalLahir: '',
      asalSekolah: '',
      nomorWhatsApp: '',
      kelas: 'Kelas 10',
      namaOrangtua: '',
      nomorTeleponOrangtua: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // nanti diubah jadi logic submit
    console.log(values)
  }

  return (
    <Card title="" className="w-full p-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:gap-x-[45px] lg:grid-cols-2 lg:gap-x-[210px] gap-y-[20px]"
        >
          <div className="space-y-4">
            <InputForm
              label="Nama Lengkap"
              placeholder="Nama lengkap harus diisi"
              name="namaLengkap"
              form={form}
            />

            <div>
              <Label className="text-xs md:text-base font-bold mb-2 block">
                Domisili
              </Label>
              <RadioGroup
                size="normal"
                color="light"
                onValueChange={(value) =>
                  form.setValue(
                    'domisili',
                    value as 'Jabodetabek' | 'Luar Jabodetabek'
                  )
                }
                defaultValue={form.getValues('domisili')}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Jabodetabek" id="jabodetabek" />
                  <label htmlFor="jabodetabek">Jabodetabek</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="Luar Jabodetabek"
                    id="luar-jabodetabek"
                  />
                  <Label htmlFor="luar-jabodetabek">Luar Jabodetabek</Label>
                </div>
              </RadioGroup>
            </div>

            <InputForm
              label="Tanggal Lahir"
              placeholder="DD-MM-YYYY"
              name="tanggalLahir"
              form={form}
            />

            <InputForm
              label="Asal Sekolah"
              placeholder="Jika Gap Year/Semi Gap Year, maka isi '-'"
              name="asalSekolah"
              form={form}
            />

            <InputForm
              label="Nomor WhatsApp"
              placeholder="Contoh: 08123456789"
              name="nomorWhatsApp"
              form={form}
            />
          </div>

          <div className="space-y-4 md:mt-4">
            <div>
              <Label className="text-xs md:text-base font-bold mb-2 block">
                Kelas
              </Label>
              <RadioGroup
                size="normal"
                color="light"
                onValueChange={(value) =>
                  form.setValue(
                    'kelas',
                    value as z.infer<typeof formSchema>['kelas']
                  )
                }
                defaultValue={form.getValues('kelas')}
                className="flex flex-col space-y-1"
              >
                {[
                  'Kelas 10',
                  'Kelas 11',
                  'Kelas 12',
                  'Gap Year/Semi Gap',
                  'SMP',
                ].map((kelas) => (
                  <div key={kelas} className="flex items-center space-x-2">
                    <RadioGroupItem value={kelas} id={kelas} />
                    <label htmlFor={kelas}>{kelas}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <InputForm
              label="Nama Orang tua"
              placeholder="Nama orang tua harus diisi"
              name="namaOrangtua"
              form={form}
            />

            <InputForm
              label="Nomor Telepon Orang Tua"
              placeholder="Contoh: 08123456789"
              name="nomorTeleponOrangtua"
              form={form}
            />
            <div className=" flex justify-start w-full pt-3">
              <Button type="submit" className="w-full lg:w-auto">
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  )
}

export default DetailForm
