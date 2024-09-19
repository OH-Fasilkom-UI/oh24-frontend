import React from 'react'
import { JalurMasukSectionDesktop } from './sections/JalurMasukSectionDesktop'
import { JalurMasukSectionMobile } from './sections/JalurMasukSectionMobile'

export const JalurMasukModule = () => {
  return (
    <>
      <div className="lg:block hidden">
        <JalurMasukSectionDesktop />
      </div>
      <div className="lg:hidden block">
        <JalurMasukSectionMobile />
      </div>
    </>
  )
}
