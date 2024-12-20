import { toast } from '@/components/ui/Toast'
import {
  getMyUserData,
  updateMyPersonalData,
  UpdatePersonalData,
  UserData,
  UserDataJoins,
} from '@/lib/api/user'
import paths from '@/lib/paths'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { redirect, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function useUserData<T extends UserDataJoins>(
  joins: T | {} = {},
  redirects: boolean = true
) {
  const queryClient = useQueryClient()
  const currentPath = usePathname()

  const { data, error, ...rest } = useQuery<UserData<T>>({
    queryKey: ['user', 'my', joins],
    queryFn: async () => {
      const res = await getMyUserData(joins)

      queryClient.setQueryData(['auth', 'is_authenticated'], res.ok)

      if (!res.ok) {
        throw new Error()
      }

      const data = await res.json()
      return data.user
    },
  })

  useEffect(() => {
    if (redirects) {
      if (error != null) {
        // not logged in users trying to visit protected URLs
        // toast.error('Silakan masuk terlebih dahulu.')
        // redirect(paths.login)
      }

      if (currentPath === paths.login) {
        redirect(paths.profilePage)
      }

      if (currentPath === paths.profilePage && data?.hasPersonal === false) {
        redirect(paths.personalDataForm)
      }

      if (
        currentPath === paths.personalDataForm &&
        data?.hasPersonal === true
      ) {
        redirect(paths.profilePage)
      }

      if (
        currentPath === paths.registerAmbassador &&
        data?.hasAmbassador === true
      ) {
        redirect(paths.profilePage)
      }
    }
  })

  return { userData: data, ...rest }
}

export const usePersonalDataMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['user', 'my', 'personal'],
    mutationFn: async (data: UpdatePersonalData) => {
      const res = await updateMyPersonalData(data)

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
