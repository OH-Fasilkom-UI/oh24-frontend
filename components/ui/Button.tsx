import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'font-tex-gyre flex justify-center items-center gap-2 w-max font-semibold transition-all px-7 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-[12px]',
  {
    variants: {
      variant: {
        primary:
          'bg-[#4141EA] disabled:bg-[#2727A3] disabled:text-white/50 text-white dark:text-[#E2E7EF] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.50)] active:shadow-[0_0_20px_0_rgba(40,40,161,0.50)_inset] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.50)] dark:active:shadow-[0_0_20px_0_rgba(40,40,161,0.50)_inset] disabled:hover:shadow-none disabled:active:shadow-none',
        secondary:
          'bg-[#73ABBD] disabled:bg-[#58808C] disabled:text-white/50 text-white dark:text-[#E2E7EF] hover:shadow-[0_4px_12px_0_rgb(181,211,221)] active:shadow-[0_0_20px_0_rgba(98,144,158,0.25)_inset] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.50)] dark:active:shadow-[0_0_20px_0_rgba(181,211,221,0.25)_inset] disabled:hover:shadow-none disabled:active:shadow-none',
        ghost:
          'bg-[#F0F8FF] disabled:bg-[#CAD2D9] border-[2px] border-[#2E3881] disabled:border-[#7C85AC] text-[#2E3881] disabled:text-[#7C85AC] dark:text-[#E2E7EF] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] active:shadow-[0_0_20px_0_rgba(0,0,0,0.10)_inset] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.25)] dark:active:shadow-[0_0_20px_0_rgba(0,0,0,0.10)_inset] disabled:hover:shadow-none disabled:active:shadow-none',
        tertiary:
          'bg-[#F0F8FF] disabled:bg-[#CAD2D9] disabled:border-[#828AAE] text-[#2E3881] disabled:text-[#7C85AC] dark:text-[#E2E7EF] hover:underline active:text-[#8F98BF] active:no-underline dark:hover:underline dark:active:text-[#8F98BF] disabled:hover:no-underline',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
