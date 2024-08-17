import { cn } from "@/lib/utils"
import Image from "next/image"

export const AnimatedTrain = ({ className }: {
    className?: string
}) => {
    return (
        <div className={cn('relative z-20 animate-float-vertical', className)}>
            <Image
                src={'/train/train-body.png'}
                alt="Train Body"
                width={200}
                height={200}
                className="absolute top-14 left-16 z-20 w-[150px] xl:w-[200px] h-auto"
            />
            <Image
                src={'/train/train-ring.png'}
                alt="Train Ring"
                width={150}
                height={150}
                className="absolute top-0 z-10 animate-spin w-[120px] xl:w-[150px]"
            />
        </div>
    )
}