import React from 'react'
import Accordion from '@/components/ui/Accordion'

const AmbassadorAccordion = () => {
  return (
    <div className="mx-auto">
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AmbassadorAccordion
