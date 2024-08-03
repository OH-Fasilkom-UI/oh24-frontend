'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

const radioGroupVariants = cva('', {
  variants: {
    size: {
      normal: 'text-sm',
      small: 'text-xs',
    },
    color: {
      dark: 'text-Text/TextLightBG fill-Text/TextLightBG border-Text/TextLightBG',
      light: 'text-Text/TextDarkBG fill-Text/TextDarkBG border-Text/TextDarkBG',
    },
  },
  defaultVariants: {},
})

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ id, className, children, ...props }, ref) => {
  return (
    <div className="font-bold flex items-center space-x-2">
      <RadioGroupPrimitive.Item
        id={id}
        ref={ref}
        className={twMerge(
          'aspect-square h-4 w-4 rounded-full border-2 border-current text-current ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label htmlFor={id} className="text-current">
        {children}
      </label>
    </div>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  size: 'normal' | 'small'
  color: 'light' | 'dark'
}

interface RadioGroupType
  extends React.ForwardRefExoticComponent<
    RadioGroupProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof RadioGroupItem
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, size, color, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge(
        'grid gap-2',
        radioGroupVariants({ size, color }),
        className
      )}
      {...props}
      ref={ref}
    />
  )
}) as RadioGroupType

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
RadioGroup.Item = RadioGroupItem

export { RadioGroup, RadioGroupItem }
