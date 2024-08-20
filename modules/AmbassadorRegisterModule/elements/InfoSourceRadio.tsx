import RadioGroup from '@/components/ui/RadioGroup'

export const InfoSourceRadio = () => {
  return (
    <>
      <RadioGroup.Item
        value="Instagram Open House Fasilkom UI"
        id="Instagram Open House Fasilkom UI"
      >
        Instagram Open House Fasilkom UI
      </RadioGroup.Item>
      <RadioGroup.Item
        value="Twitter Open House Fasilkom UI"
        id="Twitter Open House Fasilkom UI"
      >
        Twitter Open House Fasilkom UI
      </RadioGroup.Item>
      <RadioGroup.Item
        value="Panitia Open House Fasilkom UI"
        id="Panitia Open House Fasilkom UI"
      >
        Panitia Open House Fasilkom UI
      </RadioGroup.Item>
      <RadioGroup.Item value="Pemberitahuan Sekolah" id="Pemberitahuan Sekolah">
        Pemberitahuan Sekolah
      </RadioGroup.Item>
      <RadioGroup.Item
        value="Teman/Keluarga/Kerabat"
        id="Teman/Keluarga/Kerabat"
      >
        Teman/Keluarga/Kerabat
      </RadioGroup.Item>
      <RadioGroup.Item value="Lainnya" id="Lainnya">
        Lainnya
      </RadioGroup.Item>
    </>
  )
}
