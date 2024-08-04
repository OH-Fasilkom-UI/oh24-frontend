import { z } from 'zod'

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

export const getMyPersonalData = () => {
  return fetch('/api/personal/my')
}

export const updatePersonalDataSchema = z.object({
  profilePic: z.number().gte(0).lte(3),
})

export type UpdatePersonalData = z.infer<typeof updatePersonalDataSchema>

export const updateMyPersonalData = (data: UpdatePersonalData) => {
  return fetch('/api/personal/my', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
