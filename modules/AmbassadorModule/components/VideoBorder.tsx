'use client'
import Image from 'next/image'
import { useState } from 'react'
import Card from '@/components/ui/Card'

const Video = () => {
  return (
    <div className="flex relative bg-cover min-h-screen md:flex md:shrink-0 bg-no-repeat bg-center pb-[200px]  h-1"
    style={{ 
      backgroundImage: `url('/kota.png')`, 
    }}
    >
      <div className='relative flex flex-col justify-center w-full items-center z-1 text-center'>
        <h2 className="text-3xl font-semibold mb-10  text-blue-900">Check Out Our Videos!</h2>
        <div className="flex flex-col justify-center sm:justify-center sm:flex-row gap-[88px]">
      
          <div className="bg-blue-900 bg-opacity-90 rounded-md r p-4 w-[320px] shadow-blue-900 shadow-md">
          <p className="text-white text-lg font-semibold mb-6">Fasilkom Rewind</p>
            <div className="bg-white h-40 rounded-md flex items-center justify-center mt-6 opacity-1">
            <button>
                <Image
                src='/play-button.png'
                alt='play button'
                width={60}
                height={60}
                />
            </button>
            </div>
          </div>

          <div className="bg-blue-900 bg-opacity-90 rounded-md r p-4 w-[320px] shadow-blue-900 shadow-md">
          <p className="text-white text-lg font-semibold mb-6">Fasilkom Rewind</p>
            <div className="bg-white h-40 rounded-md flex items-center justify-center mt-6 opacity-1">
            <button>
                <Image
                src='/play-button.png'
                alt='play button'
                width={60}
                height={60}
                />
            </button>
            </div>
          </div>
        </div>
      </div>
        
    
    </div>
  )
}

export default Video
