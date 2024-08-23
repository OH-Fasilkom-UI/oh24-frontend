import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 2
const FILE_TYPES = ['application/pdf']
const IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg']

export const submitAmbassadorSchema = z.object({
  infoSource: z.string(),
  reasonForJoining: z.string(),
  expectations: z.string(),

  introductionVideoLink: z.string().url(),
  instagramLink: z.string(),
  tiktokLink: z.string(),
  twitterLink: z
    .string()
    .optional()
    .or(z.literal('').transform(() => undefined)),
  ableToAttend: z.string(),
  accommodation: z.string(),

  twibbon: z
    .instanceof(File, {
      message: 'File harus diisi',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Ukuran file maksimal 2MB',
    })
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: 'Tipe file harus JPG/PNG/JPEG',
    }),
  followIG: z
    .instanceof(File, {
      message: 'File harus diisi',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Ukuran file maksimal 2MB',
    })
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: 'Tipe file harus JPG/PNG/JPEG',
    }),
  story: z
    .instanceof(File, {
      message: 'File harus diisi',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Ukuran file maksimal 2MB',
    })
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: 'Tipe file harus JPG/PNG/JPEG',
    }),
  cv: z
    .instanceof(File, {
      message: 'File harus diisi',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Ukuran file maksimal 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Tipe file harus PDF',
    }),
  mou: z
    .instanceof(File, {
      message: 'File harus diisi',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Ukuran file maksimal 2MB',
    })
    .refine((file) => FILE_TYPES.includes(file.type), {
      message: 'Tipe file harus PDF',
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
  })
}
