import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitPersonalData, submitPersonalData } from '@/lib/api/registration'

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
