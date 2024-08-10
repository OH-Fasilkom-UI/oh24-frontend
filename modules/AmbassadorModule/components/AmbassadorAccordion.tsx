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
    <div className="w-full max-md:p-7 md:p-20">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px]">
            What is this?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            What are the benefits of becoming an ambassador?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi
            quisquam facere, quos saepe odit fuga consequatur delectus repellat
            incidunt labore? Delectus, architecto similique eveniet voluptatum
            officiis rem obcaecati aliquid.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            Can ambassadors participate in CS and ME events?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            praesentium magni officia sed. Minus magni vero ab esse commodi,
            iste quasi dicta deserunt eligendi architecto eum hic in? Vel,
            voluptates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            What are the responsibilities of an ambassador?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            commodi eveniet sapiente et ad ipsa omnis placeat suscipit dolorem,
            molestiae corrupti corporis? Amet sed veniam, unde tenetur
            voluptates similique vel!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
            What is this?
          </AccordionTrigger>
          <AccordionContent className="max-md:text-[16px] max-sm:text-[12px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AmbassadorAccordion
