'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger
type TooltipContentProps = {
  className?: string
  sideOffset?: number
  side?: string
  icon?: boolean
  title?: string
  children?: React.ReactNode
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps &
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(
  (
    {
      className,
      sideOffset = 4,
      side,
      icon = true,
      title,
      children,
      content,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      side={side}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    >
      <div
        className="flex data-[side=top]:flex-col data-[side=bottom]:flex-col"
        data-side={side}
      >
        <div
          className="flex justify-center items-center data-[side=top]:order-last data-[side=left]:order-last"
          data-side={side}
        >
          <div
            className="w-0 h-0 
  data-[side=top]:border-l-[8px] data-[side=top]:border-l-transparent
  data-[side=top]:border-t-[10px] data-[side=top]:border-t-BlueRegion/Cornflower/50
  data-[side=top]:border-r-[8px] data-[side=top]:border-r-transparent
  
  data-[side=right]:border-b-[8px] data-[side=right]:border-b-transparent
  data-[side=right]:border-r-[10px] data-[side=right]:border-r-BlueRegion/Cornflower/50
  data-[side=right]:border-t-[8px] data-[side=right]:border-t-transparent
  
  data-[side=bottom]:border-r-[8px] data-[side=bottom]:border-r-transparent
  data-[side=bottom]:border-b-[10px] data-[side=bottom]:border-b-BlueRegion/Cornflower/50
  data-[side=bottom]:border-l-[8px] data-[side=bottom]:border-l-transparent
  
  data-[side=left]:border-t-[8px] data-[side=left]:border-t-transparent
  data-[side=left]:border-l-[10px] data-[side=left]:border-l-BlueRegion/Cornflower/50
  data-[side=left]:border-b-[8px] data-[side=left]:border-b-transparent"
            data-side={side}
          ></div>
        </div>
        <div className="bg-BlueRegion/Cornflower/50 p-3.5 md:p-4 rounded-xl text-Text/TextLightBG font-tex-gyre">
          <div className="text-base items-center gap-2 font-semibold pb-1 hidden md:flex">
            <Info className={icon ? '' : 'hidden'} size={18} /> {title}
          </div>
          <div className="max-w-48">{content}</div>
          {children}
        </div>
      </div>
    </TooltipPrimitive.Content>
  )
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
