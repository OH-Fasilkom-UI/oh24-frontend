import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import paths from '@/lib/paths'
import {
  isAuthenticated,
  loginWithGoogle,
  LoginWithGoogleData,
  logout,
} from '@/lib/api/auth'

export const useIsAuthenticated = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['auth', 'is_authenticated'],
    queryFn: async () => {
      const res = await isAuthenticated()

      if (!res.ok) {
        throw new Error()
      }

      return res.ok
    },
  })

  return { isAuthenticated: data, ...rest }
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async (credential: string) => {
      const res = await loginWithGoogle(credential)

      if (!res.ok) {
        throw new Error()
      }

      return res.json() as Promise<LoginWithGoogleData>
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['auth', 'is_authenticated'], true)
      queryClient.setQueryData(['user', 'my'], data.user)

      if (data.user.hasPersonal) {
        router.push(paths.profilePage)
      } else {
        router.push(paths.personalDataForm)
      }
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: async () => {
      const res = await logout()

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.setQueryData(['auth', 'is_authenticated'], false)
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })

      // if logout is success return to home page
      router.push('/')
    },
  })
}
