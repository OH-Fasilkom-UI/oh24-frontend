'use client'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import RadioGroup from '@/components/ui/RadioGroup'
import { useSubmitPersonalData } from '@/hooks/registration'
import { useUserData } from '@/hooks/user'
import {
  Class,
  Domicile,
  SubmitPersonalData,
  submitPersonalDataSchema,
} from '@/lib/api/registration'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/Toast'
import { Loader } from '@/components/elements/Loader'

const DetailForm = () => {
  const { isLoading } = useUserData({ personal: true })
  const { mutate: submit, isPending } = useSubmitPersonalData()

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SubmitPersonalData>({
    resolver: zodResolver(submitPersonalDataSchema),
  })

  async function onSubmit(data: SubmitPersonalData) {
    submit(data, {
      // gw gatau kenapa harus pake redirect T_T
      // kalo pake router di useRouter, bakal client
      // side error
      onSuccess: () => {
        toast.success('Berhasil mengirimkan data')
        redirect('/profile')
      },
    })
  }

  if (isLoading) {
    return <Loader />
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

          <RadioGroup
            label="Domisili"
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

        <div className="space-y-4 mt-4 lg:mt-0">
          <RadioGroup
            label="Kelas"
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
            <Button
              type="submit"
              className="w-full lg:w-auto"
              variant="secondary"
              disabled={isPending}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default DetailForm
