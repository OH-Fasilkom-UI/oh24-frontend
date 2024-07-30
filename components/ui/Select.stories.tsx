import { Meta } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
}

export default meta

export const Main = () => (
  <Select>
    <Select.Trigger className="max-w-lg">
      <Select.Value placeholder="Select a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select>
)
