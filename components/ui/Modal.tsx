'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { LucideProps, X } from 'lucide-react'
import Button, { ButtonProps } from './Button'

// TODO:
// - [x] buttons prop
// - [ ] alignment prop
// - [x] closeButton prop
// - [ ] mobile view

type IconType = React.ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>

type ButtonType = React.ReactNode

export interface ModalProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  trigger: React.ReactNode
  icon: IconType
  title: string
  description: string
  buttons?: [ButtonType] | [ButtonType, ButtonType]
  hideClose?: boolean
}

const Modal = ({
  icon: Icon,
  trigger,
  title,
  description,
  buttons,
  hideClose = false,
  ...props
}: ModalProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild children={trigger} />
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="backdrop-blur fixed inset-0 z-50 bg-black/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="text-Text/TextLightBG bg-BlueRegion/Cornflower/50 fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-background px-16 py-10 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl">
          <div className="flex flex-col items-center space-y-1.5 text-center">
            <Icon size="4rem" className="mb-5" />
            <DialogPrimitive.Title className="font-riffic text-3xl font-bold leading-none tracking-tight">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="font-tex-gyre">
              {description}
            </DialogPrimitive.Description>
          </div>
          {!hideClose && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
          {!!buttons?.length && (
            <div className="flex flex-row [&>*]:flex-grow space-x-2 mt-3">
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
    return closeOnClick ? <DialogPrimitive.Close children={el} asChild /> : el
  }
)

export default Modal
