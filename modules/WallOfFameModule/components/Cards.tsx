import Button from '@/components/ui/Button'
import Mahkota from '@/public/WallOfFame/mahkota.png'
import Image from 'next/image'
import { cardsDataType } from '../constant'

interface CardsProps {
  cards: cardsDataType
  handleCardClick: (index: number) => void
}

export const Cards: React.FC<CardsProps> = ({ cards, handleCardClick }) => {
  return (
    <>
      {cards.map((data, index) => (
        <div
          key={index}
          className="group relative text-white bg-[#3B478B] max-md:max-w-48 h-full max-h-80 rounded-2xl flex flex-col gap-2.5 items-center p-2.5 lg:p-4"
          style={{
            boxShadow: '0px 0px 6px 2px rgba(78, 86, 196, 0.7)',
          }}
        >
          <Image
            src={Mahkota}
            alt="mahkota"
            width={140}
            height={200}
            className="w-[32%] absolute -top-[10%] left-[38%] opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
          />
          <Image
            src={data.foto}
            alt="profile"
            width={140}
            height={200}
            className="w-full h-full object-cover aspect-[7/5] rounded-lg md:rounded-xl"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-tex-gyre font-semibold text-center max-xl:text-sm">
              {data.nama}
            </h1>
            <h2 className="font-tex-gyre text-center text-[10px] xl:text-xs opacity-80">
              {data.bidang} | {data.jurusan}
            </h2>
          </div>
          <Button
            className="w-full rounded-lg lg:rounded-xl text-xs md:text-xs lg:text-sm md:py-1.5 lg:py-2 md:px-0 mt-1"
            variant="tertiary"
            onClick={() => handleCardClick(index)}
          >
            View More
          </Button>
        </div>
      ))}
    </>
  )
}
