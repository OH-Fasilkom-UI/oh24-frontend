import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export interface PersonalData {
  updatedAt: string
  createdAt: string
  id: string
  userId: string
  fullName: string
  profilePic: number
  dob: string
  age: number
  school: string | null
  class: string
  phone: string
  lineId: string
  domicile: string
  parentName: string
  parentPhone: string
}

export interface UpdatePersonalData {
  profilePic: Number
}

export const usePersonalData = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['personal', 'my'],
    queryFn: async () => {
      const res = await fetch('/api/personal/my')
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
      const res = await fetch('/api/personal/my', {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res.ok) {
        queryClient.invalidateQueries({ queryKey: ['personal', 'my'] })
      }

      return res.json()
    },
  })
}
