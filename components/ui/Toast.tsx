'use client'

import { Ban, CircleCheck, Loader, TriangleAlert } from 'lucide-react'
import { ReactNode } from 'react'
import { ExternalToast, Toaster as Sonner, toast as toastSonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="flex justify-center"
      expand={true}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'flex items-center gap-6 px-5 py-3 rounded-[15px] font-bold text-[#2E3881] shadow-[0px_4px_10px_0px]',
        },
      }}
      {...props}
    />
  )
}

export const toast = {
  ...toastSonner,
  success: (message: ReactNode, data: ExternalToast | undefined = {}) => {
    return toastSonner.success(message, {
      ...data,
      className: 'bg-[#DEFFDC] shadow-[#1BC64B]/25',
      icon: (
        <div className="bg-[#1C8333] p-1.5 rounded-xl">
          <CircleCheck size={20} color="white" />
        </div>
      ),
    })
  },
  error: (message: ReactNode, data: ExternalToast | undefined = {}) => {
    return toastSonner.error(message, {
      ...data,
      className: 'bg-[#FFDCDC] shadow-[#C61B1B]/25',
      icon: (
        <div className="bg-[#9A2323] p-1.5 rounded-xl">
          <Ban size={20} color="white" />
        </div>
      ),
    })
  },
  warning: (message: ReactNode, data: ExternalToast | undefined = {}) => {
    return toastSonner.error(message, {
      ...data,
      className: 'bg-[#FBFFCD] shadow-[#C6B51B]/25',
      icon: (
        <div className="bg-[#C5BE12] p-1.5 rounded-xl">
          <TriangleAlert size={20} color="white" />
        </div>
      ),
    })
  },
  loading: (message: ReactNode, data: ExternalToast | undefined = {}) => {
    return toastSonner.message(message, {
      ...data,
      className: 'bg-[#C7DAFE] shadow-[#7790E3]/25',
      icon: (
        <div className="bg-[#0A4F82] p-1.5 rounded-xl">
          <Loader size={20} color="white" className="animate-spin" />
        </div>
      ),
    })
  },
}
