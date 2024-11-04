import Image from 'next/image'

interface PandaDudukProps {
  type: string
  show: boolean
  className?: string
}

const PandaDuduk: React.FC<PandaDudukProps> = ({ type, show, className }) => {
  let src = ''
  if (show) {
    src = `/BulletinBoard/Chair${type}.png`
  } else {
    src = `/BulletinBoard/Chair${type}Panda.png`
  }
  if (!className) {
    className = ''
  }
  return (
    <div
      className={`relative ${className} w-[128px] h-[160px] max-[889px]:h-[140px] max-[889px]:w-[112px]`}
    >
      <Image src={src} alt="Kursi Panda" layout="fill" />
    </div>
  )
}

export default PandaDuduk
