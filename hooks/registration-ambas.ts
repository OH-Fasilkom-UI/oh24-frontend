import { useMutation } from '@tanstack/react-query'

// TODO: define interfaces

export interface SubmitAmbassadorData {}

export interface UploadAmbassadorFile {
  field: string
}

export const useSubmitAmbassador = () => {
  return useMutation({
    mutationKey: ['reg', 'questionnaire'],
    mutationFn: async (data: SubmitAmbassadorData) => {
      const res = await fetch('/api/reg/ambas', {
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

export const useUploadAmbassadorFile = () => {
  return useMutation({
    mutationKey: ['reg', 'ambas', 'file'],
    mutationFn: async ({ field, ...data }: UploadAmbassadorFile) => {
      const res = await fetch(`/api/reg/ambas/${field}`, {
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
