import { toast } from '@/components/ui/Toast'
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

export function useUserData<T extends UserDataJoins>(
  joins: T | {} = {},
  redirects: boolean = true
) {
  const queryClient = useQueryClient()
  const currentPath = usePathname()

  const { data, isError, ...rest } = useQuery<UserData<T>>({
    queryKey: ['user', 'my', joins],
    queryFn: async () => {
      const res = await getMyUserData(joins)

      queryClient.setQueryData(['auth', 'is_authenticated'], res.ok)

      if (!res.ok) {
        throw new Error()
      }

      const data = await res.json()
      data.user.personal = formatPersonalData(data.user.personal)
      return data.user
    },
  })

  if (redirects) {
    if (isError) {
      // not logged in users trying to visit protected URLs
      toast.error('Silakan masuk terlebih dahulu.')
      redirect(paths.login)
    }

    if (currentPath === paths.login) {
      redirect(paths.profilePage)
    }

    if (currentPath === paths.profilePage && data?.hasPersonal === false) {
      redirect(paths.personalDataForm)
    }

    if (currentPath === paths.personalDataForm && data?.hasPersonal === true) {
      toast.error('Akun anda sudah terdaftar!')
      redirect(paths.profilePage)
    }

    if (currentPath === paths.registerAmbassador && data?.hasAmbassador === true) {
      toast.error('Akun anda sudah terdaftar!')
      redirect(paths.profilePage)
    }
  }

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
    }
  })
}
