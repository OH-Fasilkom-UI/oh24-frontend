import { StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'bottom',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
