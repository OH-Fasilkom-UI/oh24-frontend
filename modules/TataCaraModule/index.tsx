import React from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { User } from 'lucide-react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export const TataCaraModule = () => {
  return (
    <Modal
      title=""
      trigger={
        <Button variant="secondary" className="px-8 py-3">
          Cara Pembelian <User size={24} />
        </Button>
      }
    >
      <DialogPrimitive.Close asChild>
        <X size={48} className="text-white justify-end" />
      </DialogPrimitive.Close>
      <div className="h-auto">
        <h1 className="text-Text/TextDarkBG text-center text-3xl font-bold tracking-widest leading-[40px]">
          How to Buy Our Merch?
        </h1>
        <div className="flex flex-row mt-11 gap-x-[144px]">
          <div className="flex flex-col w-[266px] ">
            <div className="relative w-[266px] h-[289px]">
              <Image
                src="/panda-modal/panda-pertama.png"
                alt="panda pertama"
                fill
                sizes="266px"
                className="object-contain"
              />
            </div>
            <p className="text-[16px] text-white font-tex-gyre font-bold leading-6 mt-4">
              Lihat-lihat dan pilih merch yang tersedia di website OH
            </p>
          </div>
          <div className="flex flex-col w-[266px] ">
            <div className="relative w-[266px] h-[289px]">
              <Image
                src="/panda-modal/panda-kedua.png"
                alt="panda pertama"
                fill
                sizes="266px"
                className="object-contain"
              />
            </div>
            <p className="text-[16px] text-white font-tex-gyre font-bold leading-6 mt-4">
              Lihat-lihat dan pilih merch yang tersedia di website OH
            </p>
          </div>
          <div className="flex flex-col w-[266px] ">
            <div className="relative w-[266px] h-[289px]">
              <Image
                src="/panda-modal/panda-ketiga.png"
                alt="panda pertama"
                fill
                sizes="266px"
                className="object-contain"
              />
            </div>
            <p className="text-[16px] text-white font-tex-gyre font-bold leading-6 mt-4">
              Lihat-lihat dan pilih merch yang tersedia di website OH
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center mt-[44px]">
          <DialogPrimitive.Close asChild>
            <Button variant="tertiary">
              <Search />
              Continue Browsing
            </Button>
          </DialogPrimitive.Close>
          <Button variant="secondary">
            <ShoppingCart />
            Order Now
          </Button>
        </div>
      </div>
    </Modal>
  )
}
