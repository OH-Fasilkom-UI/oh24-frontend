import { z } from 'zod'

export enum Class {
  SMP_SEDERAJAT = 'SMP_SEDERAJAT',
  SMA_KELAS_10_SEDERAJAT = 'SMA_KELAS_10_SEDERAJAT',
  SMA_KELAS_11_SEDERAJAT = 'SMA_KELAS_11_SEDERAJAT',
  SMA_KELAS_12_SEDERAJAT = 'SMA_KELAS_12_SEDERAJAT',
  GAPYEAR = 'GAPYEAR',
  SEMIGAP = 'SEMIGAP',
}

export enum Domicile {
  JABODETABEK = 'JABODETABEK',
  NON_JABODETABEK = 'NON_JABODETABEK',
}

export const submitPersonalDataSchema = z.object({
  fullName: z.string().min(1, 'Nama lengkap harus diisi'),
  dob: z.date(),
  school: z.string().optional(),
  class: z.nativeEnum(Class),
  phone: z
    .string()
    .regex(new RegExp('^[0-9]*$'))
    .min(1, 'Nomor WhatsApp harus diisi'),
  lineId: z.string().min(1, 'ID Line harus diisi'),
  domicile: z.nativeEnum(Domicile),
  parentName: z.string().min(1, 'Nama Orang Tua harus diisi'),
  parentPhone: z
    .string()
    .regex(new RegExp('^[0-9]*$'))
    .min(1, 'Nomor Telepon Orang Tua harus diisi'),
})

export type SubmitPersonalData = z.infer<typeof submitPersonalDataSchema>

export function submitPersonalData(data: SubmitPersonalData) {
  return fetch('/api/reg', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
