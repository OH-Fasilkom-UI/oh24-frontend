import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { AlertTriangle } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
  icon?: React.ReactNode
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
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-t9 sm:text-t7 font-tex-gyre font-bold text-Text/TextDarkBG">
            {label}
          </label>
        )}
        <div className="flex items-center w-full rounded-3xl font-tex-gyre outline-none border-2 border-Text/TextDarkBG overflow-hidden relative">
          <div
            className={`absolute ${iconPosition === 'left' ? 'left-5' : 'right-5'} text-Text/TextDarkBG`}
          >
            {icon}
          </div>
          <input
            {...props}
            type={type}
            ref={ref}
            className={twMerge(
              `w-full h-full bg-transparent hover:bg-white/30 outline-none focus:bg-white/30 px-5 ${icon ? (iconPosition === 'left' ? 'pl-14' : 'pr-14') : ''} py-3 duration-300 placeholder:text-Text/TextDarkBG text-t9 sm:text-t7`,
              className
            )}
          />
        </div>
        {errorMessage && (
          <span className="text-RedRegion/Pohutukawa/500 flex gap-2">
            <AlertTriangle className="hidden sm:flex w-4" />
            <p className="font-tex-gyre font-normal sm:font-bold items-center text-t9 sm:text-t7">
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
