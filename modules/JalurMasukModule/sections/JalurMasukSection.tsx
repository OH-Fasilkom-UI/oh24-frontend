import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import React from 'react'
import { SISTEM_INFORMASI } from '../constant'
import Image from 'next/image'

export const JalurMasukSection = () => {
  return (
    <section className="pt-20">
      <h2 className="text-5xl mb-8 text-Text/TextLightBG font-riffic font-bold text-center">
        Jalur Masuk Fasilkom UI
      </h2>
      <Tabs defaultValue="sistem informasi" className="mx-auto rounded-2xl">
        <TabsList className="grid grid-cols-3 gap-12 w-[762px] mx-auto   bg-BlueRegion/Cornflower/50">
          <TabsTrigger value="ilmu komputer">Ilmu Komputer</TabsTrigger>
          <TabsTrigger value="sistem informasi">Sistem Informasi</TabsTrigger>
          <TabsTrigger value="ilmu komputer kki">Ilmu Komputer KKI</TabsTrigger>
        </TabsList>
        <TabsContent value="ilmu komputer"></TabsContent>
        <TabsContent value="sistem informasi">
          <div className="grid grid-cols-3 p-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-tex-gyre text-Text/TextLightBG mb-2">
                  {SISTEM_INFORMASI[0].title}
                </h3>
                <p className="text-[16px] text-Text/TextLightBG">
                  {SISTEM_INFORMASI[0].description}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-tex-gyre text-Text/TextLightBG mb-2">
                  {SISTEM_INFORMASI[1].title}
                </h3>
                <p className="text-[16px] text-Text/TextLightBG">
                  {SISTEM_INFORMASI[1].description}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full h-full">
                <Image
                  src="/jalur-masuk/kubik-si.png"
                  alt="Kubik SI"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-tex-gyre text-Text/TextLightBG mb-2">
                  {SISTEM_INFORMASI[2].title}
                </h3>
                <p className="text-[16px] text-Text/TextLightBG">
                  {SISTEM_INFORMASI[2].description}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-tex-gyre text-Text/TextLightBG mb-2">
                  {SISTEM_INFORMASI[3].title}
                </h3>
                <p className="text-[16px] text-Text/TextLightBG">
                  {SISTEM_INFORMASI[3].description}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
