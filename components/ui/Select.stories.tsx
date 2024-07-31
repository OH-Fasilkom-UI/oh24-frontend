import { Meta } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
}

export default meta

export const Main = () => (
  <div className="flex flex-col gap-2">
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
    <Select>
      <Select.Trigger className="max-w-lg" color="blue">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content color="blue">
        <Select.Group>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  </div>
)
