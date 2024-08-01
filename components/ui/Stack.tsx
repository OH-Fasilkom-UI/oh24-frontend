import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {}

const Stack = ({ children, className, ...props }: StackProps) => {
  return (
    <div
      className={twMerge(
        'grid grid-cols-3 grid-rows-1 w-full h-full',
        className
      )}
      {...props}
    >
      {React.Children.map(
        children,
        (child: React.ReactNode): React.ReactNode => {
          if (React.isValidElement(child)) {
            const modifiedClassName = twMerge(
              'row-start-1 row-end-1 col-start-1 col-end-[-1] z-10',
              child.props.className
            )

            return React.cloneElement(child, {
              className: modifiedClassName,
            } as React.HTMLAttributes<HTMLElement>)
          } else
            throw new Error('Stack error: this child is not a valid element.')

          return child
        }
      )}
    </div>
  )
}

export default Stack
