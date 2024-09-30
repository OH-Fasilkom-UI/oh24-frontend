import { z } from 'zod'

enum Domicile {
  JABODETABEK = 'JABODETABEK',
  NON_JABODETABEK = 'NON_JABODETABEK',
}

enum Class {
  SMP_SEDERAJAT = 'SMP_SEDERAJAT',
  SMA_KELAS_10_SEDERAJAT = 'SMA_KELAS_10_SEDERAJAT',
  SMA_KELAS_11_SEDERAJAT = 'SMA_KELAS_11_SEDERAJAT',
  SMA_KELAS_12_SEDERAJAT = 'SMA_KELAS_12_SEDERAJAT',
  GAPYEAR = 'GAPYEAR',
  SEMIGAP = 'SEMIGAP',
}

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
  class: Class
  phone: string
  lineId: string
  domicile: Domicile
  parentName: string
  parentPhone: string
}

export interface TicketData {
  updatedAt: string
  createdAt: string
  id: string
  userId: string
  rombel: RombelData | null
  group: GroupData | null
}

export interface RombelData {
  name: string
  leaders: string[]
  linkWA: string
  updatedAt: string
  createdAt: string
}

export interface GroupData {
  number: number
  leaders: string[]
  linkWA: string
  updatedAt: string
  createdAt: string
}

export function formatPersonalData(
  data?: PersonalData
): PersonalData | undefined {
  if (!data) {
    return undefined
  }

  // This looks so bad lmao

  return {
    ...data,
    dob: new Date(data.dob).toLocaleDateString('id-ID', { dateStyle: 'long' }),
    class: {
      [Class.SMP_SEDERAJAT]: 'SMP',
      [Class.SMA_KELAS_10_SEDERAJAT]: 'Kelas 10',
      [Class.SMA_KELAS_11_SEDERAJAT]: 'Kelas 11',
      [Class.SMA_KELAS_12_SEDERAJAT]: 'Kelas 12',
      [Class.GAPYEAR]: 'Gap Year',
      [Class.SEMIGAP]: 'Semigap',
    }[data.class] as Class,
    domicile: {
      [Domicile.JABODETABEK]: 'Jabodetabek',
      [Domicile.NON_JABODETABEK]: 'Luar Jabodetabek',
    }[data.domicile] as Domicile,
  }
}

export interface UserDataJoins {
  personal?: boolean
  referral?: boolean
  attending?: boolean
  ambassador?: boolean
  ticket?: boolean
}

export interface UserData<T extends UserDataJoins = {}> {
  updatedAt: string
  createdAt: string
  id: string
  email: string
  role: Role
  eligibleFor: EventName[]
  hasPersonal: boolean
  hasQuestionnaire: boolean
  hasTicket: boolean
  hasAttending: boolean
  hasAmbassador: boolean
  hasAmbassadorForm: boolean
  hasAmbassadorFiles: boolean
  referralCode: any

  personal: T['personal'] extends true ? PersonalData : undefined
  ticket: T['ticket'] extends true ? TicketData : undefined
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
