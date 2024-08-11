import React from 'react'
import RadioGroup from '@/components/ui/RadioGroup'

export const AccomodationRadio = () => {
  return (
    <>
      <RadioGroup.Item value="Mobil" id="Mobil">
        Mobil
      </RadioGroup.Item>
      <RadioGroup.Item value="Kereta" id="Kereta">
        Kereta
      </RadioGroup.Item>
      <RadioGroup.Item value="Pesawat" id="Pesawat">
        Pesawat
      </RadioGroup.Item>
      <RadioGroup.Item value="Bus" id="Bus">
        Bus
      </RadioGroup.Item>
      <RadioGroup.Item
        value="Tidak Mengikuti Main Event"
        id="Tidak Mengikuti Main Event"
      >
        Tidak Mengikuti Main Event
      </RadioGroup.Item>
    </>
  )
}
