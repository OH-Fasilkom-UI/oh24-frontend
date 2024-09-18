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

export const WarnModal = ({onClick}: {onClick: () => void}) => {
  return (
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
          <Button
            className="max-sm:mx-auto"
            onClick={onClick}
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
