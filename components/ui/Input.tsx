import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { AlertTriangle } from 'lucide-react'
import { Label } from './label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
  icon?: React.ReactNode
  color?: 'light' | 'dark'
  iconPosition?: 'left' | 'right'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      errorMessage,
      icon,
      label,
      color = 'light',
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={twMerge(
          'flex flex-col gap-3',
          color === 'light'
            ? 'text-Text/TextDarkBG'
            : 'text-Text/TextLightBG/60'
        )}
      >
        {label && <Label>{label}</Label>}
        <div
          className={twMerge(
            'flex items-center w-full rounded-3xl outline-none border-2 overflow-hidden relative',
            color === 'light'
              ? 'border-Text/TextDarkBG'
              : 'border-Text/TextLightBG/30'
          )}
        >
          <div
            className={`absolute ${iconPosition === 'left' ? 'left-5' : 'right-5'}`}
          >
            {icon}
          </div>
          <input
            {...props}
            type={type}
            ref={ref}
            className={twMerge(
              `w-full h-full bg-transparent hover:bg-white/30 outline-none focus:bg-white/30 px-5 ${icon ? (iconPosition === 'left' ? 'pl-14' : 'pr-14') : ''} py-3 duration-300 text-t9 sm:text-t7`,
              color === 'light'
                ? 'placeholder:text-Text/TextDarkBG/30'
                : 'placeholder:text-Text/TextLightBG/30',
              className
            )}
          />
        </div>
        {errorMessage && (
          <span className="text-RedRegion/Pohutukawa/500 flex gap-2">
            <AlertTriangle className="hidden sm:flex w-4" />
            <p className="font-normal sm:font-bold items-center text-t9 sm:text-t7">
              {errorMessage}
            </p>
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
