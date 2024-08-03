'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export const checkboxVariants = cva(
  'peer shrink-0 rounded-sm border border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground',
  {
    variants: {
      size: {
        normal: 'h-4 w-4',
        small: 'h-3 w-3',
      },
      color: {
        dark: 'data-[state=checked]:bg-BlueRegion/CeruleanBlue/600 border-BlueRegion/CeruleanBlue/600',
        light: 'data-[state=checked]:bg-Text/TextDarkBG border-Text/TextDarkBG',
      },
    },
    defaultVariants: {},
  }
)

export const checkboxLabelVariants = cva(
  'font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        normal: 'text-sm',
        small: 'text-xs',
      },
      color: {
        light: 'text-Text/TextDarkBG',
        dark: 'text-Text/TextLightBG',
      },
    },
    defaultVariants: {},
  }
)

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  size: 'normal' | 'small'
  color: 'light' | 'dark'
  id: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ size, color, className, children, id, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      id={id}
      ref={ref}
      className={twMerge(checkboxVariants({ size, color }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="h-full w-full" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label htmlFor={id} className={checkboxLabelVariants({ size, color })}>
      {children}
    </label>
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
