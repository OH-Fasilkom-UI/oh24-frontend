import RadioGroup from '@/components/ui/RadioGroup'

export const AccomodationRadio = () => {
  return (
    <>
      <RadioGroup.Item value="MOBIL" id="MOBIL">
        Mobil
      </RadioGroup.Item>
      <RadioGroup.Item value="KERETA" id="KERETA">
        Kereta
      </RadioGroup.Item>
      <RadioGroup.Item value="PESAWAT" id="PESAWAT">
        Pesawat
      </RadioGroup.Item>
      <RadioGroup.Item value="BUS" id="BUS">
        Bus
      </RadioGroup.Item>
      <RadioGroup.Item value="TIDAK_IKUT" id="TIDAK_IKUT">
        Tidak Ingin Mengikuti Main Event
      </RadioGroup.Item>
    </>
  )
}

export const CompanionRadio = () => {
  return (
    <>
      <RadioGroup.Item value="TEMAN" id="Teman">
        Teman
      </RadioGroup.Item>
      <RadioGroup.Item value="KELUARGA" id="Keluarga">
        Keluarga
      </RadioGroup.Item>
      <RadioGroup.Item value="TIDAK_IKUT" id="TIDAK_IKUT">
        Tidak Ingin Mengikuti Main Event
      </RadioGroup.Item>
    </>
  )
}

export const InterestRadio = () => {
  return (
    <>
      <RadioGroup.Item value={'1'} id="1">
        Sangat tidak berminat
      </RadioGroup.Item>
      <RadioGroup.Item value={'2'} id="2">
        Tidak berminat
      </RadioGroup.Item>
      <RadioGroup.Item value={'3'} id="3">
        Mungkin berminat
      </RadioGroup.Item>
      <RadioGroup.Item value={'4'} id="4">
        Berminat
      </RadioGroup.Item>
      <RadioGroup.Item value={'5'} id="5">
        Sangat berminat
      </RadioGroup.Item>
    </>
  )
}
