import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}

// TODO: tambahin stories
