'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { twMerge } from 'tailwind-merge'
import { LucideProps } from 'lucide-react'

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  withBG?: boolean
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, withBG, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={twMerge(
      'inline-flex justify-center p-1 sm:p-2 rounded-xl max-w-screen',
      'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-center ',
      withBG ? 'bg-BlueRegion/Cornflower/50' : 'bg-transparent',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

type IconType = React.ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  withNumber?: number
  withIcon?: IconType
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, withNumber, withIcon: WithIcon, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(
      'font-tex-gyre font-bold inline-flex items-center justify-center rounded-xl whitespace-nowrap ring-offset-background transition-all',
      'disabled:pointer-events-none disabled:opacity-50',
      'px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'data-[state=active]:text-Text/TextLightBG data-[state=active]:bg-BlueRegion/Cornflower/100 [&[data-state=active]_.tab-number]:bg-Text/TextLightBG/30',
      'data-[state=inactive]:text-Misc/ShuttleGray/600 [&[data-state=inactive]_.tab-number]:bg-Misc/ShuttleGray/600/30',
      className
    )}
    {...props}
  >
    <div className="flex flex-row items-center gap-2">
      {withNumber && (
        <span className="tab-number rounded-full w-5 h-5 sm:w-6 sm:h-6 content-center pb-px">{withNumber}</span>
      )}
      {WithIcon && <WithIcon className='w-5 h-5 sm:w-6 sm:h-6' />}
      {children}
    </div>
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={twMerge(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

type TabsPrimitiveType = typeof TabsPrimitive.Root
interface TabsType extends TabsPrimitiveType {
  List: typeof TabsList
  Trigger: typeof TabsTrigger
  Content: typeof TabsContent
}

const Tabs = TabsPrimitive.Root as TabsType
Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent

export default Tabs
