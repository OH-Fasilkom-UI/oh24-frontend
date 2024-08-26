import { FieldValues, UseFormReturn } from 'react-hook-form'
export interface BackModalProps {
  showModal: boolean
  setShowModal: (show: boolean) => void
}

export interface CalendlyProps {
  isPending: boolean
  showCalendly: boolean
  onSubmit: () => void
}

export interface CustomFormProps<
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined,
> {
  form: UseFormReturn<T, U, V>
}
