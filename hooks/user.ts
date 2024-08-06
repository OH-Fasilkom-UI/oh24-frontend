import {
  formatPersonalData,
  getMyUserData,
  updateMyPersonalData,
  UpdatePersonalData,
  UserData,
  UserDataJoins,
} from '@/lib/api/user'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useUserData<T extends UserDataJoins>(joins: T | {} = {}) {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data, isError, ...rest } = useQuery<UserData<T>>({
    queryKey: ['personal', 'my'],
    queryFn: async () => {
      const res = await getMyUserData(joins)

      if (!res.ok) {
        queryClient.invalidateQueries({
          queryKey: ['auth', 'is_authenticated'],
        })

        throw new Error()
      }

      const data = await res.json()
      data.user.personal = formatPersonalData(data.user.personal)
      return data
    },
    retryOnMount: false,
  })

  if (isError) {
    router.push('/login')
  }

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
