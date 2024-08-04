import {
  getMyPersonalData,
  PersonalData,
  updateMyPersonalData,
  UpdatePersonalData,
} from '@/lib/api/personal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const usePersonalData = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['personal', 'my'],
    queryFn: async () => {
      const res = await getMyPersonalData()
      const data = await res.json()

      return res.ok ? (data.personal as PersonalData) : null
    },
  })

  return { personalData: data, ...rest }
}

export const usePersonalDataMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['personal', 'my'],
    mutationFn: async (data: UpdatePersonalData) => {
      const res = await updateMyPersonalData(data)

      if (res.ok) {
        queryClient.invalidateQueries({ queryKey: ['personal', 'my'] })
      }

      return res.json()
    },
  })
}
