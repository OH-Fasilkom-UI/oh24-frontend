import { Meta } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Main = () => <Input />

// TODO: tambahin stories
