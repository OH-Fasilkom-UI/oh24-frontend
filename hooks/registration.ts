import { useMutation } from '@tanstack/react-query'

enum Class {
  SMP_SEDERAJAT,
  SMA_KELAS_10_SEDERAJAT,
  SMA_KELAS_11_SEDERAJAT,
  SMA_KELAS_12_SEDERAJAT,
  GAPYEAR,
  SEMIGAP,
}

enum Domicile {
  JABODETABEK,
  NON_JABODETABEK,
}

export interface SubmitPersonalData {
  fullName: string
  dob: string
  school: string
  class: Class
  phone: string
  lineId: string
  domicile: Domicile
  parentName: string
  parentPhone: string
}

export const useSubmitPersonalData = () => {
  return useMutation({
    mutationKey: ['reg'],
    mutationFn: async (data: SubmitPersonalData) => {
      const res = await fetch('/api/reg', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return res
    },
  })
}
