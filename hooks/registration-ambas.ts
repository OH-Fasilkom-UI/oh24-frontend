import {
  submitAmbassador,
  SubmitAmbassadorData,
  uploadAmbassadorFile,
  UploadAmbassadorFile,
} from '@/lib/api/registration-ambas'
import { useMutation } from '@tanstack/react-query'

export const useSubmitAmbassador = () => {
  return useMutation({
    mutationKey: ['reg', 'questionnaire'],
    mutationFn: async (data: SubmitAmbassadorData) => {
      const res = await submitAmbassador(data)
      return res
    },
  })
}

export const useUploadAmbassadorFile = () => {
  return useMutation({
    mutationKey: ['reg', 'ambas', 'file'],
    mutationFn: async (data: UploadAmbassadorFile) => {
      const res = await uploadAmbassadorFile(data)
      return res
    },
  })
}
