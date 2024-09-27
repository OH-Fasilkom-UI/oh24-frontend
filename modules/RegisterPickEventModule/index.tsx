'use client'
import { PickEventSection } from '@/modules/RegisterPickEventModule/sections/PickEvent'
import RegisterAccordion from './sections/RegisterAccordion'

export const PickEventModule = ({ onClick }: { onClick: () => void }) => {
  return (
    <section className="max-w-[1920px] h-fit py-[20rem] pt-[100px] overflow-x-hidden">
      <PickEventSection onClick={() => onClick()} />
      <RegisterAccordion />
    </section>
  )
}
