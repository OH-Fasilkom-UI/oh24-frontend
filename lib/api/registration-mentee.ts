import { z } from 'zod'

export enum Accommodation {
  MOBIL,
  KERETA,
  PESAWAT,
  BUS,
}

export enum Companion {
  TEMAN,
  KELUARGA,
}

export enum EventName {
  ONLINE_EXPERIENCE,
  OFFLINE_EXPERIENCE_1,
  OFFLINE_EXPERIENCE_2,
}

export const submitQuestionnaireSchema = z.object({
  answers: z.tuple([z.number(), z.number(), z.number()]),
  accommodation: z.nativeEnum(Accommodation).optional(),
  companion: z.nativeEnum(Companion).optional(),
})

export type SubmitQuestionnaireData = z.infer<typeof submitQuestionnaireSchema>

export function submitQuestionnaire(data: SubmitQuestionnaireData) {
  return fetch('/api/reg/mentee/questionnaire', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const submitEventSchema = z.object({
  event: z.nativeEnum(EventName),
  referral: z.string().optional(),
})

export type SubmitEventData = z.infer<typeof submitEventSchema>

export function submitEvent(data: SubmitEventData) {
  return fetch('/api/reg/mentee/event', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}