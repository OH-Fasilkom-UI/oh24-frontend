import * as React from 'react'

const Chip = ({
  selected,
  children,
}: {
  selected?: boolean
  children: React.ReactNode
}) => {
  return (
    <div
      className="transition-all font-bold px-4 md:px-5 py-1 md:py-1.5 rounded-full border-4
      border-PurpleRegion/TrueV/700 hover:border-PurpleRegion/BlueViolet/500 data-[selected=true]:border-PurpleRegion/BlueViolet/500
      text-PurpleRegion/TrueV/700 hover:text-PurpleRegion/BlueViolet/500 data-[selected=true]:text-BlueRegion/CeruleanBlue/200
      bg-BlueRegion/CeruleanBlue/100 data-[selected=true]:bg-PurpleRegion/BlueViolet/600 data-[selected=true]:hover:bg-PurpleRegion/TrueV/600 w-min"
      data-selected={selected}
    >
      {children}
    </div>
  )
}

export default Chip
