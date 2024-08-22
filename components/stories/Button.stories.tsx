import { fn } from '@storybook/test'
import { Meta } from '@storybook/react'
import Button from '../ui/Button'

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

export const Primary = () => <Button variant="primary">Hello, World</Button>

export const Secondary = () => <Button variant="secondary">Hello, World</Button>

export const Tertiary = () => <Button variant="tertiary">Hello, World</Button>

export const Ghost = () => <Button variant="ghost">Hello, World</Button>
