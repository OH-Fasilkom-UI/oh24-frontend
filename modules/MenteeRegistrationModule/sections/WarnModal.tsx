import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/Dialog'
import { AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export const WarnModal = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="relative">
      <Dialog open>
        <DialogContent
          showCloseButton
          notBlur
          className="max-sm:w-[190px] sm:rounded-[24px] rounded-[18px]"
        >
          <DialogHeader>
            <DialogTitle className="max-sm:mx-auto">
              <AlertTriangle size={48} className="text-Text/TextLightBG" />
            </DialogTitle>
            <DialogDescription className="text-Text/TextLightBG sm:font-bold font-normal max-md:text-center">
              Harap mengisi kuesioner dengan serius karena akan memengaruhi step
              selanjutnya.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="max-sm:mx-auto" onClick={onClick}>
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="absolute w-[304px] h-[304px] max-[400px]:w-[240px] bottom-0 -right-[152px] max-[400px]:-right-[130px] sm:hidden animate-spin">
        <Image
          alt="contoh"
          src="/Circular.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="absolute max-lg:w-[410px] max-sm:w-[300px] max-[400px]:w-[250px] max-[400px]:h-[350px] w-[500px] h-[400px] -left-[87px] max-sm:-left-[120px] top-5 z-10 animate-float-vertical">
        <Image
          alt="contoh"
          src="/Whooshhh.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  )
}
