import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonType = React.ReactNode

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  asset?: React.ReactNode
  buttons?: [ButtonType] | [ButtonType, ButtonType]
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, buttons, className, children, asset, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        'rounded-3xl bg-[#2E3881]/90 flex flex-col gap-5',
        'px-8 py-7 sm:px-10 sm:py-8',
        className
      )}
      {...props}
    >
      <h3 className="text-BlueRegion/Cornflower/100 text-4xl font-bold font-riffic">
        {title}
      </h3>
      {!!asset && (
        <div className="flex flex-col items-center text-BlueRegion/Cornflower/50">
          {asset}
        </div>
      )}
      <div className="text-BlueRegion/Cornflower/50 text-sm font-tex-gyre">
        {children}
      </div>
      {!!buttons?.length && (
        <div className="flex flex-row [&>*]:flex-grow gap-x-2">
          {buttons?.[0]}
          {buttons?.[1]}
        </div>
      )}
    </div>
  )
)

export default Card
