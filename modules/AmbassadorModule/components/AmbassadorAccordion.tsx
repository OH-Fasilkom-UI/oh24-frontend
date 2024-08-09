'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

const AmbassadorAccordion = () => {
  return (
    <div className="w-full p-20">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the benefits of becoming an ambassador?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi
            quisquam facere, quos saepe odit fuga consequatur delectus repellat
            incidunt labore? Delectus, architecto similique eveniet voluptatum
            officiis rem obcaecati aliquid.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can ambassadors participate in CS and ME events?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            praesentium magni officia sed. Minus magni vero ab esse commodi,
            iste quasi dicta deserunt eligendi architecto eum hic in? Vel,
            voluptates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What are the responsibilities of an ambassador?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            commodi eveniet sapiente et ad ipsa omnis placeat suscipit dolorem,
            molestiae corrupti corporis? Amet sed veniam, unde tenetur
            voluptates similique vel!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What is this?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AmbassadorAccordion
