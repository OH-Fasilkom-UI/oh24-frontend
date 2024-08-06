import {
  formatPersonalData,
  getMyUserData,
  updateMyPersonalData,
  UpdatePersonalData,
  UserData,
  UserDataJoins,
} from '@/lib/api/user'
import paths from '@/lib/paths'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { redirect, usePathname } from 'next/navigation'

export function useUserData<T extends UserDataJoins>(joins: T | {} = {}) {
  const queryClient = useQueryClient()
  const currentPath = usePathname()

  const { data, isError, ...rest } = useQuery<UserData<T>>({
    queryKey: ['user', 'my', joins],
    queryFn: async () => {
      const res = await getMyUserData(joins)

      if (!res.ok) {
        queryClient.invalidateQueries({
          queryKey: ['auth', 'is_authenticated'],
        })

        console.log('throw')
        throw new Error()
      }

      const data = await res.json()
      data.user.personal = formatPersonalData(data.user.personal)
      return data.user
    },
    retryOnMount: false,
  })

  if (isError) {
    redirect(paths.login)
  }

  if (currentPath === paths.profilePage && data?.hasPersonal === false) {
    redirect(paths.personalDataForm)
  }

  if (currentPath === paths.personalDataForm && data?.hasPersonal === true) {
    redirect(paths.profilePage)
  }

  return { userData: data, ...rest }
}

export const usePersonalDataMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['user', 'my', 'personal'],
    mutationFn: async (data: UpdatePersonalData) => {
      const res = await updateMyPersonalData(data)

      if (res.ok) {
        queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
      }

      return res.json()
    },
  })
}
