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
          className="bg-[#3B478B] w-[calc(89.2vw*0.57)] md:w-[37%] h-fit rounded-[22px] md:rounded-[18px] 2xl:rounded-[30px] flex flex-col items-center text-white mt-3 min-[520px]:mt-6 md:mt-[6%] mx-3 md:mx-[3%] relative group"
          style={{
            boxShadow: '0px 0px 6px 2px rgba(78, 86, 196, 0.7)',
          }}
        >
          <Image
            src={Mahkota}
            alt="mahkota"
            width={140}
            height={200}
            className="w-[40%] absolute -top-[12%] left-[35%] hidden group-hover:block"
          />
          <div className="w-[55%] aspect-[7/10] mt-[6%] rounded-[6px] 2xl:rounded-[10px] overflow-hidden">
            <Image
              src={data.foto}
              alt="profile"
              width={140}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-center font-tex-gyre text-sm min-[520px]:text-[20px] md:text-[10px] lg:text-[14px] mt-1.5 min-[520px]:my-2 md:my-0 lg:mt-2.5 2xl:text-[18px] font-semibold">
            {data.nama}
          </h1>
          <h2 className="font-tex-gyre text-center px-2 md:px-3 md:mt-1 text-[10px] min-[520px]:text-[16px] md:text-[6px] lg:text-[8px] 2xl:text-[14px] opacity-[0.79]">
            {data.bidang} | {data.jurusan}
          </h2>
          <Button
            className="w-[80%] md:rounded-[6px] 2xl:rounded-[12px] text-[10px] min-[520px]:text-[18px] md:text-[9px] lg:text-[12px] 2xl:text-[16px] md:py-0.5 lg:py-1 xl:py-2 md:px-0 mt-[5%] mb-[8%]"
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
