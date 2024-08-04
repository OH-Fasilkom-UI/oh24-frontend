'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import RadioGroup from '@/components/ui/RadioGroup'
import { Label } from '@/components/ui/label'
import Input from '@/components/ui/Input'
import {
  Class,
  Domicile,
  SubmitPersonalData,
  submitPersonalDataSchema,
} from '@/lib/api/registration'

const DetailForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SubmitPersonalData>({
    resolver: zodResolver(submitPersonalDataSchema),
  })

  function onSubmit(values: SubmitPersonalData) {
    // nanti diubah jadi logic submit
    console.log(values)
  }

  return (
    <Card title="" className="w-full p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:gap-x-[45px] lg:grid-cols-2 lg:gap-x-[210px]"
      >
        <div className="space-y-6">
          <Input
            label="Nama Lengkap"
            placeholder="Nama lengkap harus diisi"
            errorMessage={errors.fullName?.message}
            {...register('fullName')}
          />

          <div>
            <Label className="text-xs md:text-base font-bold mb-2 block">
              Domisili
            </Label>
            <RadioGroup
              size="normal"
              color="light"
              className="flex flex-col space-y-1"
              onValueChange={(value: unknown) =>
                setValue('domicile', value as Domicile)
              }
            >
              <RadioGroup.Item value="JABODETABEK" id="jabodetabek">
                Jabodetabek
              </RadioGroup.Item>
              <RadioGroup.Item value="NON_JABODETABEK" id="luar-jabodetabek">
                Luar Jabodetabek
              </RadioGroup.Item>
            </RadioGroup>
          </div>

          <Input
            label="Tanggal Lahir"
            placeholder="DD-MM-YYYY"
            type="date"
            errorMessage={errors.dob?.message}
            {...register('dob', { valueAsDate: true })}
          />

          <Input
            label="Asal Sekolah"
            placeholder="Jika Gap Year/Semi Gap Year, maka isi '-'"
            errorMessage={errors.school?.message}
            {...register('school')}
          />

          <Input
            label="Nomor WhatsApp"
            placeholder="Contoh: 08123456789"
            errorMessage={errors.phone?.message}
            {...register('phone')}
          />

          <Input
            label="ID Line"
            placeholder="Contoh: rickastley"
            errorMessage={errors.lineId?.message}
            {...register('lineId')}
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
              className="flex flex-col space-y-1"
              onValueChange={(value: unknown) =>
                setValue('class', value as Class)
              }
            >
              <RadioGroup.Item value="SMA_KELAS_10_SEDERAJAT" id="kelas-10">
                Kelas 10
              </RadioGroup.Item>
              <RadioGroup.Item value="SMA_KELAS_11_SEDERAJAT" id="kelas-11">
                Kelas 11
              </RadioGroup.Item>
              <RadioGroup.Item value="SMA_KELAS_12_SEDERAJAT" id="kelas-12">
                Kelas 12
              </RadioGroup.Item>
              <RadioGroup.Item value="GAPYEAR" id="gapyear">
                Gapyear
              </RadioGroup.Item>
              <RadioGroup.Item value="SEMIGAP" id="semigap">
                Semigap
              </RadioGroup.Item>
              <RadioGroup.Item value="SMP_SEDERAJAT" id="smp">
                SMP
              </RadioGroup.Item>
            </RadioGroup>
          </div>

          <Input
            label="Nama Orang tua"
            placeholder="Nama orang tua harus diisi"
            errorMessage={errors.parentName?.message}
            {...register('parentName')}
          />

          <Input
            label="Nomor Telepon Orang Tua"
            placeholder="Contoh: 08123456789"
            errorMessage={errors.parentPhone?.message}
            {...register('parentPhone')}
          />

          <div className=" flex justify-start w-full pt-3">
            <Button type="submit" className="w-full lg:w-auto">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default DetailForm
