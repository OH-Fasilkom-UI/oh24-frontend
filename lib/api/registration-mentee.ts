import { z } from 'zod'

export enum Accommodation {
  MOBILKERETAPESAWATBUS,
  TIDAK_IKUT,
}

export enum Companion {
  TEMAN,
  KELUARGA,
  TIDAK_IKUT,
}

export enum EventName {
  ONLINE_EXPERIENCE,
  OFFLINE_EXPERIENCE_1,
  OFFLINE_EXPERIENCE_2,
}

export const submitQuestionnaireSchema = z.object({
  answers: z.tuple([z.string(), z.string(), z.string()]),
  accommodation: z.string().optional(),
  companion: z.string().optional(),
})

export type SubmitQuestionnaireData = z.infer<typeof submitQuestionnaireSchema>

export function submitQuestionnaire(data: SubmitQuestionnaireData) {
  return fetch('/api/reg/mentee/questionnaire', {
    method: 'POST',
    body: JSON.stringify({
      answers: data.answers.map((answer) => Number(answer)) as unknown as [
        Number,
        Number,
        Number,
      ],
      accommodation: data.accommodation,
      companion: data.companion,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const submitEventSchema = z.object({
  event: z.string(),
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
