import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export interface ContactPersonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode[] | React.ReactNode
}

const ContactPerson: React.FC<ContactPersonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      {...props}
      className={twMerge(
        'w-full h-[640px] md:h-fit rounded-[32px] bg-RedRegion/Monza/800 relative flex items-center justify-center overflow-hidden shadow-md',
        className
      )}
    >
      <div className="absolute w-full h-full z-10">
        <Image
          src={'/contact-person-corner-left.png'}
          alt="Contact Person Corner Left"
          width={200}
          height={200}
          className="hidden md:flex absolute bottom-0 left-0"
        />
        <Image
          src={'/contact-person-corner-right.png'}
          alt="Contact Person Corner Right"
          width={330}
          height={200}
          className="top-0 right-0 hidden md:flex absolute"
        />
        <Image
          src={'/contact-person-top.png'}
          alt="Contact Person Top"
          width={200}
          height={200}
          className="absolute top-0 left-0 md:hidden w-full"
        />
      </div>
      <div className="z-20 flex flex-col md:flex-row-reverse gap-4 w-fit h-fit justify-center items-center p-8">
        <Image
          src={'/contact-person-panda-ngoding.svg'}
          alt="Contact Person Asset"
          width={264.6}
          height={193.23}
          className=""
        />
        <div className="flex flex-col gap-8 h-fit w-fit justify-center">
          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col gap-2 text-white">
              <h5 className="font-bold text-2xl leading-8 text-center">
                Butuh bantuan atau memiliki pertanyaan?
              </h5>
              <p className="font-normal text-base leading-6 text-center">
                Hubungi kami pada kontak berikut untuk bantuan lebih lanjut
              </p>
            </div>
            {/* Buttons Stored Here */}
            <div
              className={`${children ? 'flex' : 'hidden'} flex-col md:flex-row justify-center lg:justify-start w-full gap-4`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPerson
