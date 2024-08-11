import * as React from 'react'

import { cn } from '@/lib/utils'
import { Label } from './label'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  placeholder?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="text-Text/TextDarkBG flex flex-col gap-3 font-tex-gyre text-[16px]">
        <Label className={cn(className)}>{props.label}</Label>
        <textarea
          placeholder={props.placeholder}
          className={cn(
            'resize-none overflow-hidden flex min-h-[96px] w-full rounded-3xl border-Text/TextDarkBG border-2 outline-none px-5 py-3 duration-300 text-t9 sm:text-t7 bg-transparent placeholder:text-Text/TextDarkBG/30 hover:bg-white/30 focus:bg-white/30',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
