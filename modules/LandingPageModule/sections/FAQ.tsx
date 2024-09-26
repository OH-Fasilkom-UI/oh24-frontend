"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Image from "next/image";
import { FAQ_DATA } from "../constant";

const FAQ = () => {
  return (
    <section className="w-full">
      <div className="flex max-md:flex-col flex-row w-full mb-6">
        <div>
          <Image
            src="/city-road.png"
            alt="city"
            width={1440}
            height={400}
            className="w-[1000px] max-md:hidden block object-contain -translate-x-10 lg:-translate-x-0"
          />
          <Image
            src="/city-amb.png"
            alt="city"
            width={1440}
            height={400}
            className="w-screen max-md:block hidden object-contain"
          />
        </div>
        <div className="my-auto max-w-xl max-sm:mx-5 md:-translate-x-10 lg:-translate-x-1/4">
          <h1 className="text-[48px] max-md:text-[24px] max-xl:text-[30px] whitespace-nowrap font-riffic mb-3 leading-[48px] tracking-widest text-PurpleRegion/MoonRaker/800 font-bold text-center">
            Still curious?
          </h1>
          <p className="lg:text-[20px] max-md:text-[14px] leading-7 font-tex-gyre font-bold text-center text-[#530C32]">
            Silakan membaca daftar FAQ dibawah ya
          </p>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col lg:gap-3 z-20 px-5 md:px-10 lg:px-32"
      >
        {FAQ_DATA.map((faq, index) => {
          return (
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
          );
        })}
      </Accordion>
    </section>
  );
};

export default FAQ;
