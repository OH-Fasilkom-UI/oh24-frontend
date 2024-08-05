import { z } from 'zod'

enum Role {
  NONE = 'NONE',
  MENTEE = 'MENTEE',
  AMBASSADOR = 'AMBASSADOR',
  AMBASSADOR_CANDIDATE = 'AMBASSADOR_CANDIDATE',
}

enum EventName {
  ONLINE_EXPERIENCE = 'ONLINE_EXPERIENCE',
  OFFLINE_EXPERIENCE_1 = 'OFFLINE_EXPERIENCE_1',
  OFFLINE_EXPERIENCE_2 = 'OFFLINE_EXPERIENCE_2',
}

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

export interface UserDataJoins {
  personal?: boolean
  referral?: boolean
  attending?: boolean
  ambassador?: boolean
}

export interface UserData<T extends UserDataJoins> {
  updatedAt: string
  createdAt: string
  id: string
  email: string
  role: Role
  eligibleFor: EventName[]
  hasPersonal: boolean
  hasQuestionnaire: boolean
  hasAttending: boolean
  hasAmbassador: boolean
  hasAmbassadorForm: boolean
  hasAmbassadorFiles: boolean
  referralCode: any

  personal: T['personal'] extends true ? PersonalData : undefined
}

export const getMyUserData = (joins: UserDataJoins = {}) => {
  let query = Object.entries(joins)
    .filter(([_, v]) => v)
    .map((arr) => arr[0])
    .join('&')

  return fetch('/api/user/my?' + query)
}

export const updatePersonalDataSchema = z.object({
  profilePic: z.number().gte(0).lte(3),
})

export type UpdatePersonalData = z.infer<typeof updatePersonalDataSchema>

export const updateMyPersonalData = (data: UpdatePersonalData) => {
  return fetch('/api/user/my/personal', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
