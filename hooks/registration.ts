import { submitPersonalData, SubmitPersonalData } from '@/lib/api/registration'
import { useMutation } from '@tanstack/react-query'

export const useSubmitPersonalData = () => {
  return useMutation({
    mutationKey: ['reg'],
    mutationFn: async (data: SubmitPersonalData) => {
      const res = await submitPersonalData(data)
      return res
    },
  })
}
