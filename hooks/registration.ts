import { SubmitPersonalData, submitPersonalData } from '@/lib/api/registration'
import { submitAmbassador, SubmitAmbassadorData } from '@/lib/api/registration-ambas'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useSubmitPersonalData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg'],
    mutationFn: async (data: SubmitPersonalData) => {
      const res = await submitPersonalData(data)

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}

export const useSubmitAmbassadorData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg', 'ambas'],
    mutationFn: async (data: SubmitAmbassadorData) => {
      const res = await submitAmbassador(data)

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}
