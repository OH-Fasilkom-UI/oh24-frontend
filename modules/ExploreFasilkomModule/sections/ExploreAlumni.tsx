'use client'
import Image from 'next/image'

const ExploreAlumni = () => {
  return (
    <div className=" flex flex-col items-center mt-20">
      <h2 className=" max-sm:w-[280px]  text-Text/TextLightBG font-bold text-center max-[400px]:text-[26px] max-sm:text-[35px] text-[48px]">
        Where Our Alumni Are Now
      </h2>
      <div className="flex items-center justify-center max-lg:flex-col-reverse min-h-max gap-12 my-16  ">
        <div>
          <div className="boxes flex max-lg:flex-col  max-sm:w-[300px] w-[580px] lg:w-[660px] xl:w-[830px] items-center justify-center px-6 py-6 min-h-80 gap-6 max-sm:min-h-52 max-sm:gap-2 bg-white shadow-lg shadow-[#435F9B] rounded-2xl">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between w-[100%] h-[30%] ">
                <Image
                  src="/alumniLogo/Shoppee.png"
                  alt="Shoppee"
                  quality={100}
                  width={260}
                  height={84}
                  className="max-sm:w-[130px]"
                />

                <Image
                  src="/alumniLogo/Microsoft.png"
                  alt="Microsoft"
                  quality={100}
                  width={220}
                  height={88}
                  className="max-sm:w-[110px]"
                />
              </div>
              <div className="flex items-center justify-between w-[100%]  h-[30%] ">
                <Image
                  src="/alumniLogo/Amazon.png"
                  alt="Amazon"
                  quality={100}
                  width={183}
                  height={56}
                  className="max-sm:w-[91px]"
                />
                <Image
                  src="/alumniLogo/YCombinator.png"
                  alt="YCombinator"
                  quality={100}
                  width={285}
                  height={81}
                  className="sm:pb-6 max-sm:w-[142px]"
                />
              </div>
              <div className="flex items-center justify-between w-[100%]  h-[30%] ">
                <Image
                  src="/alumniLogo/Tokopedia.png"
                  alt="Tokopedia"
                  quality={100}
                  width={300}
                  height={82}
                  className="max-sm:w-[150px]"
                />
                <Image
                  src="/alumniLogo/Google.png"
                  alt="Google"
                  quality={100}
                  width={215}
                  height={64}
                  className="max-sm:w-[107px]"
                />
              </div>
            </div>

            <div className="flex flex-col max-lg:flex-row max-lg:w-full gap-6  items-center justify-center">
              <Image
                src="/alumniLogo/Gojek.png"
                alt="Gojek"
                quality={100}
                width={112}
                height={132}
                className="max-sm:w-[56px]"
              />
              <Image
                src="/alumniLogo/Traveloka.png"
                alt="Traveloka"
                quality={100}
                width={121}
                height={101}
                className=" max-sm:w-[61px] max-lg:max-w-[121px]  max-lg:max-h-[121px] max-w-[101px] max-h-[101px] "
              />
            </div>
          </div>
          <h2 className=" w-full my-3 flex max-sm:text-sm justify-end font-tex-gyre font-bold text-Text/TextLightBG">
            And many more...
          </h2>
        </div>
        <Image
          src="/panda-toga.png"
          alt="panda"
          quality={100}
          width={375}
          height={353}
          className="h-auto w-[300px]   max-sm:w-[225px]"
        />
      </div>
    </div>
  )
}

export default ExploreAlumni
