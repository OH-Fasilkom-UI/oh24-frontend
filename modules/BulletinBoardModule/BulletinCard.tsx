import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'

const BulletinCard = ({
  color,
  title,
  subtitle,
  description,
}: {
  color: string
  title: string
  subtitle: string
  description: string
}) => {
  let classNameCard
  let classNamePin
  let backgroundColor
  let textColor

  switch (color) {
    case 'blue':
      classNameCard = 'bg-[#96D2FA] w-full h-[80%] -rotate-3 hover:rotate-0'
      classNamePin =
        'w-2 h-4 md:w-3 md:h-6 lg:w-4 lg:h-8 absolute -top-2 md:-top-3 lg:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]'
      backgroundColor = '#72b9e8'
      textColor = 'text-white'
      break
    case 'red':
      classNameCard = 'bg-[#F19CA3] w-[75%] h-full rotate-2 hover:-rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      backgroundColor = '#EB838C'
      textColor = 'text-white'
      break
    case 'yellow':
      classNameCard = 'bg-[#C7B45D] w-[85%] h-[90%] -rotate-1 hover:rotate-2'
      classNamePin =
        'w-2 h-4 md:w-4 md:h-8 absolute -top-2 md:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]'
      backgroundColor = '#C7B45D'
      textColor = 'text-white'
      break
    case 'white':
      classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      backgroundColor = '#D9DCE5'
      textColor = 'text-BlueRegion/GovernorBay/600'
      break
    default:
      classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:-rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      backgroundColor = '#D9DCE5'
      textColor = 'text-BlueRegion/GovernorBay/600'
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`cursor-pointer shadow hover:shadow-xl transition relative ${classNameCard}`}
        >
          <div className={classNamePin}></div>
        </div>
      </DialogTrigger>
      <DialogContent
        className={`bg-[${backgroundColor}] border-[${backgroundColor}] max-w-sm`}
        showCloseButton
      >
        <DialogHeader>
          <DialogTitle
            className={`text-center text-2xl md:text-3xl tracking-wider ${textColor}`}
          >
            {title}
          </DialogTitle>
          <DialogDescription className={textColor}>
            <p className="text-start text-lg md:text-xl font-semibold tracking-wider py-1 md:py-3">
              {subtitle}
            </p>
            <p className="text-start max-md:text-xs">{description}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default BulletinCard
