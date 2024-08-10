import { z } from 'zod'

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

  twibbon: z.instanceof(File),
  followIG: z.instanceof(File),
  story: z.instanceof(File),
  cv: z.instanceof(File),
  mou: z.instanceof(File),
})

export type SubmitAmbassadorData = z.infer<typeof submitAmbassadorSchema>

export function submitAmbassador(data: SubmitAmbassadorData) {
  const body = new FormData()
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof SubmitAmbassadorData];
    if (value !== undefined) {
      body.append(key, value);
    }
  });
  return fetch('/api/reg/ambas', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}