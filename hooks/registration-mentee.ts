import {
  submitEvent,
  SubmitEventData,
  submitQuestionnaire,
  SubmitQuestionnaireData,
} from '@/lib/api/registration-mentee'
import { useMutation } from '@tanstack/react-query'

export const useSubmitQuestionnaire = () => {
  return useMutation({
    mutationKey: ['reg', 'questionnaire'],
    mutationFn: async (data: SubmitQuestionnaireData) => {
      const res = await submitQuestionnaire(data)
      return res
    },
  })
}

export const useSubmitEvent = () => {
  return useMutation({
    mutationKey: ['reg', 'event'],
    mutationFn: async (data: SubmitEventData) => {
      const res = submitEvent(data)
      return res
    },
  })
}
