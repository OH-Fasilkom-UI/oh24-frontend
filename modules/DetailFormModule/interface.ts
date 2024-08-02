import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

export interface InputFormProps<
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined,
> {
  label: string
  placeholder: string
  disabled?: boolean
  description?: string
  name: Path<T>
  form: UseFormReturn<T, U, V>
}
