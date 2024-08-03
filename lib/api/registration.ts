import { z } from 'zod'

export enum Class {
  SMP_SEDERAJAT,
  SMA_KELAS_10_SEDERAJAT,
  SMA_KELAS_11_SEDERAJAT,
  SMA_KELAS_12_SEDERAJAT,
  GAPYEAR,
  SEMIGAP,
}

export enum Domicile {
  JABODETABEK,
  NON_JABODETABEK,
}

export const submitPersonalDataSchema = z.object({
  fullName: z.string(),
  dob: z.date(),
  school: z.string().optional(),
  class: z.nativeEnum(Class),
  phone: z.string().regex(new RegExp('^[0-9]*$')),
  lineId: z.string(),
  domicile: z.nativeEnum(Domicile),
  parentName: z.string(),
  parentPhone: z.string().regex(new RegExp('^[0-9]*$')),
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
