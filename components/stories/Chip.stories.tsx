import { Meta } from '@storybook/react'
import Checkbox from '../ui/Checkbox'
import Chip from '../ui/Chip'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Chip',
}

export default meta

export const Default = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <Chip selected={false}>Chips</Chip>
  </div>
)

export const Selected = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <Chip selected={true}>Chips</Chip>
  </div>
)
