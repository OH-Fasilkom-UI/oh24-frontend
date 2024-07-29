import { fn } from '@storybook/test'
import { Meta } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
}

export default meta

export const Primary = () => (
  <Button variant="primary" children="Hello, World" />
)

export const Secondary = () => (
  <Button variant="secondary" children="Hello, World" />
)

export const Tertiary = () => (
  <Button variant="tertiary" children="Hello, World" />
)

export const Ghost = () => (
  <Button variant="ghost" children="Hello, World" />
)
