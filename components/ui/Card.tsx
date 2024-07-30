import * as React from 'react'
import { twMerge } from 'tailwind-merge'

// TODO:
// - [ ] asset
// - [ ] mobile

type ButtonType = React.ReactNode

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  buttons?: [ButtonType] | [ButtonType, ButtonType]
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, buttons, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        'rounded-3xl bg-[#2E3881]/90 flex flex-col px-12 py-10',
        className
      )}
      {...props}
    >
      <h3 className="text-BlueRegion/Cornflower/100 text-4xl font-bold font-riffic mb-6">
        {title}
      </h3>
      <p className="text-BlueRegion/Cornflower/50 text-sm font-tex-gyre mb-5">
        {children}
      </p>
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
