'use client'
import Button from '@/components/ui/Button'
import { PickEventSection } from '@/modules/RegisterPickEventModule/sections/PickEvent'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import RegisterAccordion from './sections/RegisterAccordion'

export const PickEventModule = ({ onClick }: { onClick: () => void }) => {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const hideButton = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      setShowButton(false)
    }
    hideButton()
  }, [])

  return (
    <section className="max-w-[1920px] h-fit py-[20rem] pt-[100px] overflow-x-hidden">
      <div className={`fixed bottom-6 z-50 left-[50%] -translate-x-[50%] ${!showButton && 'hidden'}`}>
        <ScrollLink to="RegisterAccordion" smooth={true} duration={500}>
          <Button
            className='animate-bounce duration-1000 flex gap-4'
            variant={'ghost'}
            onClick={() => { setShowButton(false) }}
          >
            <ArrowDown />
            Masih bingung 🤔
          </Button>
        </ScrollLink>
      </div>
      <PickEventSection onClick={() => onClick()} />
      <RegisterAccordion />
    </section>
  )
}
