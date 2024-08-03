import { useMutation } from '@tanstack/react-query'

// TODO: define the interfaces

export interface SubmitQuestionnaireData {}

export interface SubmitEventData {}

export const useSubmitQuestionnaire = () => {
  return useMutation({
    mutationKey: ['reg', 'questionnaire'],
    mutationFn: async (data: SubmitQuestionnaireData) => {
      const res = await fetch('/api/reg/mentee/questionnaire', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return res
    },
  })
}

export const useSubmitEvent = () => {
  return useMutation({
    mutationKey: ['reg', 'event'],
    mutationFn: async (data: SubmitEventData) => {
      const res = await fetch('/api/reg/mentee/event', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return res
    },
  })
}
