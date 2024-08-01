import Input from './InputDetail'
import { AlertCircle } from 'lucide-react'
import React from 'react'
import { InputFormProps } from '../interface'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FieldValues } from 'react-hook-form'

const InputForm = <
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined,
>({
  label,
  placeholder,
  description,
  disabled = false,
  name,
  form,
}: InputFormProps<T, U, V>) => {
  return (
    <FormField
      disabled={disabled}
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col gap-1 text-xs md:text-base text-Text/TextDarkBG">
            <FormLabel className="text-xs font-tex-gyre font-bold text-Text/TextDarkBG">
              {label}
            </FormLabel>
            <FormControl>
              <Input
                className="text-xs md:text-base text-Text/TextDarkBG border-1 border-Text/TextDarkBG"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            {description && (
              <FormDescription className="flex gap-2 items-center">
                <div>
                  <AlertCircle width={14} height={14} className="md:w-[16px]" />
                </div>
                <span className="text-xs opacity-60">{description}</span>
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default InputForm
