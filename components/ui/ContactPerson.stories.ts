import { StoryObj } from '@storybook/react'
import ContactPerson from './ContactPerson'

const meta = {
  title: 'Components/ContactPerson',
  component: ContactPerson,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
