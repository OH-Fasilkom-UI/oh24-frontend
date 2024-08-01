import { Meta } from '@storybook/react'
import ContactPerson from '../elements/ContactPerson'

const meta: Meta<typeof ContactPerson> = {
  title: 'Components/ContactPerson',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Main = () => <ContactPerson />
