import { isAuthenticated, loginWithGoogle, logout } from '@/lib/api/auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useIsAuthenticated = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['auth', 'is_authenticated'],
    queryFn: async () => {
      const res = await isAuthenticated()
      return res.ok
    },
  })

  return { isAuthenticated: data, ...rest }
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async (credential: string) => {
      const res = await loginWithGoogle(credential)

      if (res.ok) {
        queryClient.invalidateQueries({
          queryKey: ['auth', 'is_authenticated'],
        })
      }

      return res.json()
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: async () => {
      const res = await logout()

      if (res.ok) {
        queryClient.invalidateQueries({
          queryKey: ['auth', 'is_authenticated'],
        })
      }

      return res.json()
    },
  })
}