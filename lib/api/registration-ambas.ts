import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 2
const FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']

export const submitAmbassadorSchema = z.object({
  infoSource: z.string(),
  reasonForJoining: z.string(),
  expectations: z.string(),

  introductionVideoLink: z.string().url(),
  instagramLink: z.string().url(),
  tiktokLink: z.string().url(),
  twitterLink: z.string().url().optional(),
  ableToAttend: z.string(),
  Accommodation: z.string(),

  twibbon: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Invalid file type',
    }),
  followIG: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Invalid file type',
    }),
  story: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Invalid file type',
    }),
  cv: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Invalid file type',
    }),
  mou: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Max file size is 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Invalid file type',
    }),
})

export type SubmitAmbassadorData = z.infer<typeof submitAmbassadorSchema>

export function submitAmbassador(data: SubmitAmbassadorData) {
  const body = new FormData()
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof SubmitAmbassadorData]
    if (value !== undefined) {
      body.append(key, value)
    }
  })
  return fetch('/api/reg/ambas', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
