import { Meta } from '@storybook/react'
import Checkbox from '../ui/Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
}

export default meta

export const Main = () => (
  <div className="flex flex-col gap-2">
    <Checkbox id="1" size="normal" color="light">
      Label
    </Checkbox>
    <Checkbox id="2" size="normal" color="dark">
      Label
    </Checkbox>
    <Checkbox id="3" size="small" color="light">
      Label
    </Checkbox>
    <Checkbox id="4" size="small" color="dark">
      Label
    </Checkbox>
  </div>
)
