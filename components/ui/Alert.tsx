'use client'

import { cn } from '@/lib/utils'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { Ban, CircleCheck, Info, TriangleAlert, X } from 'lucide-react'
import * as React from 'react'

const AlertProvider = ToastPrimitives.Provider

const AlertViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[342px]',
      className
    )}
    {...props}
  />
))
AlertViewport.displayName = ToastPrimitives.Viewport.displayName

const alertVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-alert-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-alert-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        success: 'bg-[#DEFFDC] shadow-[#1BC64B]/50',
        error: 'bg-[#FFDCDC] shadow-[#C61B1B]/50',
        warning: 'bg-[#FBFFCD] shadow-[#C6B51B]/50',
        info: 'bg-[#E0DAFA] shadow-[#804ED9]/50',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  }
)

const Alert = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
})
Alert.displayName = ToastPrimitives.Root.displayName

const AlertClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'text-Text/TextLightBG self-start rounded-md p-1 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    alert-close=""
    {...props}
  >
    <X size={20} />
  </ToastPrimitives.Close>
))
AlertClose.displayName = ToastPrimitives.Close.displayName

const AlertTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-Text/TextLightBG font-semibold', className)}
    {...props}
  />
))
AlertTitle.displayName = ToastPrimitives.Title.displayName

const AlertDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-Text/TextLightBG text-sm max-w-40', className)}
    {...props}
  />
))
AlertDescription.displayName = ToastPrimitives.Description.displayName

type AlertProps = React.ComponentPropsWithoutRef<typeof Alert>

function Alerter() {
  const { alerts } = useAlert()

  return (
    <AlertProvider>
      {alerts.map(function ({ id, title, description, variant, ...props }) {
        return (
          <Alert key={id} {...props} variant={variant}>
            {variant == 'success' && (
              <div className="bg-[#1C8333] p-1.5 rounded-xl text-BlueRegion/Cornflower/50">
                <CircleCheck size={20} />
              </div>
            )}
            {variant == 'error' && (
              <div className="bg-[#9A2323] p-1.5 rounded-xl text-BlueRegion/Cornflower/50">
                <Ban size={20} />
              </div>
            )}
            {variant == 'warning' && (
              <div className="bg-[#C5BE12] p-1.5 rounded-xl text-BlueRegion/Cornflower/50">
                <TriangleAlert size={20} />
              </div>
            )}
            {variant == 'info' && (
              <div className="bg-PurpleRegion/MoonRaker/600 p-1.5 rounded-xl text-BlueRegion/Cornflower/50">
                <Info size={20} />
              </div>
            )}
            <div className="grid gap-1">
              {title && <AlertTitle>{title}</AlertTitle>}
              {description && (
                <AlertDescription>{description}</AlertDescription>
              )}
            </div>
            <AlertClose />
          </Alert>
        )
      })}
      <AlertViewport />
    </AlertProvider>
  )
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type AlerterAlert = AlertProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
}

const actionTypes = {
  ADD_ALERT: 'ADD_ALERT',
  UPDATE_ALERT: 'UPDATE_ALERT',
  DISMISS_ALERT: 'DISMISS_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_ALERT']
      alert: AlerterAlert
    }
  | {
      type: ActionType['UPDATE_ALERT']
      alert: Partial<AlerterAlert>
    }
  | {
      type: ActionType['DISMISS_ALERT']
      toastId?: AlerterAlert['id']
    }
  | {
      type: ActionType['REMOVE_ALERT']
      toastId?: AlerterAlert['id']
    }

interface State {
  alerts: AlerterAlert[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_ALERT',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ALERT':
      return {
        ...state,
        alerts: [action.alert, ...state.alerts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_ALERT':
      return {
        ...state,
        alerts: state.alerts.map((t) =>
          t.id === action.alert.id ? { ...t, ...action.alert } : t
        ),
      }

    case 'DISMISS_ALERT': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.alerts.forEach((alert) => {
          addToRemoveQueue(alert.id)
        })
      }

      return {
        ...state,
        alerts: state.alerts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case 'REMOVE_ALERT':
      if (action.toastId === undefined) {
        return {
          ...state,
          alerts: [],
        }
      }
      return {
        ...state,
        alerts: state.alerts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { alerts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Alert = Omit<AlerterAlert, 'id'>

function alert({ ...props }: Alert) {
  const id = genId()

  const update = (props: AlerterAlert) =>
    dispatch({
      type: 'UPDATE_ALERT',
      alert: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_ALERT', toastId: id })

  dispatch({
    type: 'ADD_ALERT',
    alert: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useAlert() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    alert,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_ALERT', toastId }),
  }
}

export {
  Alert,
  alert,
  AlertClose,
  AlertDescription,
  Alerter,
  AlertProvider,
  AlertTitle,
  AlertViewport,
  useAlert,
  type AlertProps,
}
