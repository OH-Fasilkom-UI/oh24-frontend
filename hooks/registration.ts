import { SubmitPersonalData, submitPersonalData } from '@/lib/api/registration'
import {
  submitAmbassador,
  SubmitAmbassadorData,
} from '@/lib/api/registration-ambas'
import {
  submitEvent,
  SubmitEventData,
  submitQuestionnaire,
  SubmitQuestionnaireData,
} from '@/lib/api/registration-mentee'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useSubmitPersonalData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg'],
    mutationFn: async (data: SubmitPersonalData) => {
      const res = await submitPersonalData(data)

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}

export const useSubmitAmbassadorData = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg', 'ambas'],
    mutationFn: async (data: SubmitAmbassadorData) => {
      const res = await submitAmbassador(data)

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}

export const useSubmitQuestionnaire = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg', 'mentee', 'questionnaire'],
    mutationFn: async (data: SubmitQuestionnaireData) => {
      const res = await submitQuestionnaire(data)

      if (!res.ok) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}

export const useSubmitEvent = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['reg', 'mentee', 'event'],
    mutationFn: async (data: SubmitEventData) => {
      const res = await submitEvent(data)

      if (res.status === 400) {
        throw new Error()
      }

      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'my'] })
    },
  })
}
