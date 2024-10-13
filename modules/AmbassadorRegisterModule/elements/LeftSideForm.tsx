import FileInput from '@/components/ui/FileInput'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import RadioGroup from '@/components/ui/RadioGroup'
import { Textarea } from '@/components/ui/textarea'
import { AtSign } from 'lucide-react'
import { FieldValues, Path } from 'react-hook-form'
import { CustomFormProps } from '../interface'
import { InfoSourceRadio } from './InfoSourceRadio'
import InputForm from './InputForm'

export const LeftSideForm = <
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined,
>({
  form,
}: CustomFormProps<T, U, V>) => {
  return (
    <div className="bg-[#2E3881E5] rounded-t-[32px] lg:rounded-[32px] py-8 px-5 lg:px-10 flex flex-col gap-[22px] lg:gap-8 lg:w-1/2">
      <FormField
        control={form.control}
        name={'infoSource' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="infoSource" className="max-lg:text-[12px]">
              Dari mana kamu mendapatkan informasi mengenai Oprec ini?
            </FormLabel>
            <FormControl>
              <RadioGroup
                size="normal"
                color="light"
                className="flex flex-col space-y-1 max-lg:text-[12px]"
                onValueChange={(value: string) => field.onChange(value)}
                {...field}
              >
                <InfoSourceRadio />
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={'reasonForJoining' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                {...field}
                label="Alasan ingin menjadi Ambassador Open House Fasilkom UI"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={'expectations' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                {...field}
                label="Ekspektasi dengan menjadi OH Ambassador"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <InputForm
        form={form}
        icon={<AtSign />}
        name={'instagramLink' as Path<T>}
        label="Akun Instagram"
        placeholder="Isikan dengan nama akun Instagram"
      />
      <InputForm
        placeholder="Isikan dengan nama akun Tiktok"
        icon={<AtSign />}
        form={form}
        name={'tiktokLink' as Path<T>}
        label="Akun Tiktok"
      />
      <InputForm
        placeholder="Isikan dengan nama akun Twitter"
        icon={<AtSign />}
        form={form}
        name={'twitterLink' as Path<T>}
        label="Akun Twitter (opsional)"
      />
      <FormField
        control={form.control}
        name={'followIG' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FileInput
                label="Bukti Follow IG OH Fasilkom"
                secondaryMessage="Unggah file JPG/PNG/JPEG dengan maksimum 2MB"
                file={field.value}
                setFile={field.onChange}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={'story' as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FileInput
                label="Bukti Post Insta Story"
                secondaryMessage="Unggah file JPG/PNG/JPEG dengan maksimum 2MB"
                file={field.value}
                setFile={field.onChange}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
