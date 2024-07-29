import { Meta } from '@storybook/react'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  parameters: {
    layout: 'bottom',
  },
}

export default meta

export const Main = () => <Footer />
