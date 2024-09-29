import { UserData } from './user'

export const isAuthenticated = () => {
  return fetch('/api/auth/user')
}

export interface LoginWithGoogleData {
  success: boolean
  user: UserData
}

export const loginWithGoogle = (credential: string) => {
  return fetch('/api/auth/user/google', {
    method: 'POST',
    body: JSON.stringify({ credential }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const logout = () => {
  return fetch('/api/auth/user/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
