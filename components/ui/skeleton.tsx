import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-Misc/ShuttleGray/700/20',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
