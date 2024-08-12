import React from 'react'
import RadioGroup from '@/components/ui/RadioGroup'

export const AccomodationRadio = () => {
  return (
    <>
      <RadioGroup.Item value="MOBIL" id="Mobil">
        Mobil
      </RadioGroup.Item>
      <RadioGroup.Item value="KERETA" id="Kereta">
        Kereta
      </RadioGroup.Item>
      <RadioGroup.Item value="PESAWAT" id="Pesawat">
        Pesawat
      </RadioGroup.Item>
      <RadioGroup.Item value="BUS" id="Bus">
        Bus
      </RadioGroup.Item>
      <RadioGroup.Item
        value="TIDAK_IKUT"
        id="Tidak Mengikuti Main Event"
      >
        Tidak Mengikuti Main Event
      </RadioGroup.Item>
    </>
  )
}
