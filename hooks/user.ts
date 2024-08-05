import {
  getMyUserData,
  updateMyPersonalData,
  UpdatePersonalData,
  UserData,
  UserDataJoins,
} from '@/lib/api/user'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useUserData<T extends UserDataJoins>(joins: T | {} = {}) {
  const { data, ...rest } = useQuery<UserData<T>>({
    queryKey: ['personal', 'my'],
    queryFn: async () => {
      const res = await getMyUserData(joins)
      const data = await res.json()

      return res.ok ? data.user : null
    },
  })

  return { userData: data, ...rest }
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
