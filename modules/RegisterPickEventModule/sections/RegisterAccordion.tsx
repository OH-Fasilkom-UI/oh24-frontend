'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

export const EventFAQAccordion = [
  {
    question:
      'Kak, aku ingin merasakan pengalaman offline tour di Fasilkom! Pilih yang mana ya?',
    answer:
      'Kamu bisa memilih opsi Full Experience! Dengan memilih Full Experience, kamu dapat mengikuti pengalaman penuh yaitu CS Connect secara online via Zoom (9 November 2024) dan Main Event secara offline di gedung lama Fasilkom!',
  },
  {
    question:
      'Kak, aku belum bisa hadir secara offline nih.. Tapi kepengen ikutan :(',
    answer:
      'Gapapa! Kamu bisa memilih opsi Online Experience. Kamu tetap bisa mengikuti CS Connect, yaitu talkshow dan mentoring secara online dengan mentor-mentor Open House Fasilkom 2024.',
  },
]

const RegisterAccordion = () => {
  return (
    <div id='RegisterAccordion' className="w-full h-[20vh] max-lg:h-[16vh] mt-[36rem] max-lg:mt-[6rem] flex flex-col items-center">
      <h1 className="text-[#B91B70] text-t3 max-lg:text-t4 max-md:text-t5 mb-16 text-center w-[83vw]">
        Masih bingung mau pilih opsi yang mana? 🤔
      </h1>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col lg:gap-4 z-20 w-[83vw]"
      >
        {EventFAQAccordion.map((faq, index) => (
          <div key={index} className="my-2">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="max-md:text-[16px] max-sm:text-[12px] text-start">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-md:text-[16px] max-sm:text-[12px] font-bold">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  )
}

export default RegisterAccordion
