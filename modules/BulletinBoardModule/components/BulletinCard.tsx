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
  description,
}: {
  color: string
  title: string
  description: string
}) => {
  let classNameCard
  let classNamePin
  let classNameModal
  let textColor

  switch (color) {
    case 'blue':
      classNameCard = 'bg-[#96D2FA] w-full h-[80%] -rotate-3 hover:rotate-0'
      classNamePin =
        'w-2 h-4 md:w-3 md:h-6 lg:w-4 lg:h-8 absolute -top-2 md:-top-3 lg:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]'
      classNameModal = 'bg-[#72b9e8] border-[#72b9e8] max-w-sm'
      textColor = 'text-white'
      break
    case 'red':
      classNameCard = 'bg-[#F19CA3] w-[75%] h-full rotate-2 hover:-rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      classNameModal = 'bg-[#EB838C] border-[#EB838C] max-w-sm'
      textColor = 'text-white'
      break
    case 'yellow':
      classNameCard = 'bg-[#C7B45D] w-[85%] h-[90%] -rotate-1 hover:rotate-2'
      classNamePin =
        'w-2 h-4 md:w-4 md:h-8 absolute -top-2 md:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]'
      classNameModal = 'bg-[#C7B45D] border-[#C7B45D] max-w-sm'
      textColor = 'text-white'
      break
    case 'white':
      classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      classNameModal = 'bg-[#D9DCE5] border-[#D9DCE5] max-w-sm'
      textColor = 'text-BlueRegion/GovernorBay/600'
      break
    default:
      classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:-rotate-1'
      classNamePin =
        'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full'
      classNameModal = 'bg-[#D9DCE5] border-[#D9DCE5] max-w-sm'
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
      <DialogContent className={classNameModal} showCloseButton>
        <DialogHeader>
          <DialogTitle
            className={`text-center text-2xl md:text-3xl tracking-wider ${textColor}`}
          >
            {title}
          </DialogTitle>
          <DialogDescription className={textColor}>
            <p className="text-center max-md:text-xs">{description}</p>
          </DialogDescription>
        </DialogHeader>
        <div className="w-full relative">
          <span className="text-[#E0ECFF] text-center font-semibold absolute -bottom-16 left-[50%] -translate-x-[50%] w-full drop-shadow-[2px_2px_2px_#2E3881]">
            Click outside the paper to exit.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BulletinCard
