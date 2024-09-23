import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import {
  SISTEM_INFORMASI,
  ISI_ILMU_KOMPUTER,
  KKI_ILMU_KOMPUTER,
} from '../../constant'

export const JalurMasukSectionMobile = () => {
  return (
    <section className="pt-20 flex flex-col gap-6 justify-center px-5 md:px-20">
      <h2 className="text-[30px] text-center font-riffic font-bold text-Text/TextLightBG tracking-wider px-5">
        Jalur Masuk Fasilkom UI
      </h2>
      <Tabs defaultValue="sistem informasi" className="mx-auto rounded-2xl">
        <TabsList className="grid grid-cols-1">
          <TabsTrigger value="ilmu komputer">Ilmu Komputer</TabsTrigger>
          <TabsTrigger value="sistem informasi">Sistem Informasi</TabsTrigger>
          <TabsTrigger value="ilmu komputer kki">Ilmu Komputer KKI</TabsTrigger>
        </TabsList>
        <TabsContent value="ilmu komputer">
          <Image
            src="/jalur-masuk/kubik-ik.png"
            alt="Kubik SI"
            width={212}
            height={219}
            className="py-8"
          />
          <Modal
            title=""
            trigger={<Button className="mx-auto">Lihat Detail</Button>}
          >
            <div className="flex flex-col gap-9">
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {ISI_ILMU_KOMPUTER[0].title}
                </h3>
                <p className="text-left text-xs">
                  {ISI_ILMU_KOMPUTER[0].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {ISI_ILMU_KOMPUTER[1].title}
                </h3>
                <p className="text-left text-xs">
                  {ISI_ILMU_KOMPUTER[1].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {ISI_ILMU_KOMPUTER[2].title}
                </h3>
                <p className="text-left text-xs">
                  {ISI_ILMU_KOMPUTER[2].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {ISI_ILMU_KOMPUTER[3].title}
                </h3>
                <p className="text-left text-xs">
                  {ISI_ILMU_KOMPUTER[3].description}
                </p>
              </div>
            </div>
          </Modal>
        </TabsContent>
        <TabsContent value="sistem informasi">
          <Image
            src="/jalur-masuk/kubik-si.png"
            alt="Kubik SI"
            width={212}
            height={219}
            className="py-8"
          />
          <Modal
            title=""
            trigger={<Button className="mx-auto">Lihat Detail</Button>}
          >
            <div className="flex flex-col gap-9">
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {SISTEM_INFORMASI[0].title}
                </h3>
                <p className="text-left text-xs">
                  {SISTEM_INFORMASI[0].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {SISTEM_INFORMASI[1].title}
                </h3>
                <p className="text-left text-xs">
                  {SISTEM_INFORMASI[1].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {SISTEM_INFORMASI[2].title}
                </h3>
                <p className="text-left text-xs">
                  {SISTEM_INFORMASI[2].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {SISTEM_INFORMASI[3].title}
                </h3>
                <p className="text-left text-xs">
                  {SISTEM_INFORMASI[3].description}
                </p>
              </div>
            </div>
          </Modal>
        </TabsContent>
        <TabsContent value="ilmu komputer kki">
          <Image
            src="/jalur-masuk/kubik-kki.png"
            alt="Kubik SI"
            width={212}
            height={219}
            className="py-8"
          />
          <Modal
            title=""
            trigger={<Button className="mx-auto">Lihat Detail</Button>}
          >
            <div className="flex flex-col gap-9">
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {KKI_ILMU_KOMPUTER[0].title}
                </h3>
                <p className="text-left text-xs">
                  {KKI_ILMU_KOMPUTER[0].description}
                </p>
              </div>
              <div>
                <h3 className="text-[16px] mb-[9px]">
                  {KKI_ILMU_KOMPUTER[1].title}
                </h3>
                <p className="text-left text-xs">
                  {KKI_ILMU_KOMPUTER[1].description}
                </p>
              </div>
            </div>
          </Modal>
        </TabsContent>
      </Tabs>
    </section>
  )
}
