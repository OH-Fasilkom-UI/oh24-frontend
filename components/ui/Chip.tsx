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
      className="transition-all font-tex-gyre font-bold px-4 md:px-5 py-1 md:py-1.5 rounded-full border-4
      border-[#5F3DC4] hover:border-[#7B70E4] data-[selected=true]:border-[#7B70E4]
      text-[#5F3DC4] hover:text-[#7B70E4] data-[selected=true]:text-[#C8D3F5]
      bg-[#E0E6F9] data-[selected=true]:bg-[#6149D4] data-[selected=true]:hover:bg-[#6F4FD8] w-min"
      data-selected={selected}
    >
      {children}
    </div>
  )
}

export default Chip
