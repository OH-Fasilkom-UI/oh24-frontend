import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Hello, World',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Hello, World',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Hello, World',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Hello, World',
  },
}
