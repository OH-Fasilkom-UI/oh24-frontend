import { z } from 'zod'

export const submitAmbassadorSchema = z.object({
  infoSource: z.string(),
  reasonForJoining: z.string(),
  expectations: z.string(),

  introductionVideoLink: z.string().url(),
  instagramLink: z.string().url(),
  tiktokLink: z.string().url(),
  twitterLink: z.string().url().optional(),
})

export type SubmitAmbassadorData = z.infer<typeof submitAmbassadorSchema>

export function submitAmbassador(data: SubmitAmbassadorData) {
  return fetch('/api/reg/ambas', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const uploadAmbassadorFileSchema = z.object({
  file: z.instanceof(File),
})

export type UploadAmbassadorFile = z.infer<
  typeof uploadAmbassadorFileSchema
> & { field: 'followIG' | 'story' | 'twibbon' | 'cv' | 'mou' }

export function uploadAmbassadorFile({ field, ...data }: UploadAmbassadorFile) {
  const body = new FormData()
  body.append('file', data.file)

  return fetch('/api/reg/ambas/', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/form-data',
    },
  })
}
