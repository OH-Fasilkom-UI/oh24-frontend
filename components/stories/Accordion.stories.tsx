import { Meta } from '@storybook/react'
import { Accordion } from '../ui/Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
}

export default meta

export const Main = () => (
  <Accordion type="single" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
      <Accordion.Content>
        Yes. It adheres to the WAI-ARIA design pattern.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
      <Accordion.Content>
        Yes. It adheres to the WAI-ARIA design pattern.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
      <Accordion.Content>
        Yes. It adheres to the WAI-ARIA design pattern.
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
)
