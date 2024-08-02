import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useIsAuthenticated = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['auth', 'is_logged_in'],
    queryFn: async () => {
      const res = await fetch('/api/auth/user')
      return res.ok
    },
  })

  return { isAuthenticated: data, ...rest }
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  const { mutate, ...rest } = useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async (credential: string) => {
      const res = await fetch('/api/auth/user/google', {
        method: 'POST',
        body: JSON.stringify({ credential }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res.ok) {
        queryClient.invalidateQueries({ queryKey: ['auth', 'is_logged_in'] })
      }

      return res.json()
    },
  })

  return { login: mutate, ...rest }
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const { mutate, ...rest } = useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async () => {
      const res = await fetch('/api/auth/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res.ok) {
        queryClient.invalidateQueries({ queryKey: ['auth', 'is_logged_in'] })
      }

      return res.json()
    },
  })

  return { logout: mutate, ...rest }
}
