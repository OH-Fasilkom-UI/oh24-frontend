'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { LucideProps, X } from 'lucide-react'
import Button, { ButtonProps } from './Button'
import { twMerge } from 'tailwind-merge'
import { ScrollArea } from './ScrollArea'

type IconType = React.ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>

type ButtonType = React.ReactNode

type triggerType = React.ReactNode

export interface ModalProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  trigger?: triggerType
  icon?: IconType
  title: string
  buttons?: [ButtonType] | [ButtonType, ButtonType]
  hideClose?: boolean
  disableClickOutside?: boolean
}

const Modal = ({
  icon: Icon,
  trigger,
  title,
  buttons,
  children,
  hideClose = false,
  disableClickOutside = false,
  ...props
}: ModalProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="backdrop-blur fixed inset-0 z-50 bg-black/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          onInteractOutside={(e) => disableClickOutside && e.preventDefault()}
          onEscapeKeyDown={(e) => disableClickOutside && e.preventDefault()}
          className={twMerge(
            'text-Text/TextLightBG bg-BlueRegion/Cornflower/50 fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 bg-background duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl',
            'py-6 sm:py-8',
            'w-[90vw] max-w-xl md:max-w-4xl'
          )}
        >
          <ScrollArea className="max-h-96">
            <div
              className={twMerge(
                'flex gap-y-4 gap-x-8 px-6 sm:px-10 mt-2',
                'md:flex-row md:items-start md:text-left',
                'flex-col items-center text-center'
              )}
            >
              <div>{Icon && <Icon size="4rem" />}</div>
              <div className="flex flex-col space-y-1.5">
                <DialogPrimitive.Title className="text-3xl font-bold leading-none">
                  {title}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description>
                  {children}
                </DialogPrimitive.Description>
              </div>
            </div>
          </ScrollArea>
          {!hideClose && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
          {!!buttons?.length && (
            <div
              className={twMerge(
                'flex gap-x-2 mt-3 px-6 sm:px-10',
                'flex-col gap-2 md:flex-row-reverse [&>*]:flex-grow md:[&>*]:flex-grow-0'
              )}
            >
              {buttons?.[0]}
              {buttons?.[1]}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

interface ModalButtonProps extends ButtonProps {
  closeOnClick?: boolean
}

Modal.Button = React.forwardRef<HTMLButtonElement, ModalButtonProps>(
  ({ closeOnClick, ...props }: ModalButtonProps, ref) => {
    const el = <Button {...props} ref={ref} />
    return closeOnClick ? (
      <DialogPrimitive.Close asChild>{el}</DialogPrimitive.Close>
    ) : (
      el
    )
  }
)

Modal.displayName = 'Modal'
Modal.Button.displayName = 'Modal.Button'

export default Modal
