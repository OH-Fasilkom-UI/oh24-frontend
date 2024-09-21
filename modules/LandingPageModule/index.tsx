import Testimonials from "@/components/elements/Testimonials";
import Image from "next/image";
import { TESTIMONY_DATA, WHAT_IS_OH_DATA } from "./constant";
import FAQ from "./sections/FAQ";
import Partners from "./sections/Partners";
import WhatIsOpenHouse from "./sections/WhatIsOpenHouse";

export const LandingPageModule = () => {
    return (
        <main className="min-h-screen flex flex-col z-20 w-full relative">
            <WhatIsOpenHouse content={{ data: WHAT_IS_OH_DATA }} />
            <div className="relative">
                <Image
                    src={"/bg-testimony-partners-faq.png"}
                    alt="Gedung Kiri"
                    width={4000}
                    height={4000}
                    className="absolute top-0 left-0 w-full -translate-y-28 sm:-translate-y-48 md:-translate-y-72 lg:-translate-y-96 -z-50"
                />
                <div className="px-5 md:px-10 lg:px-32">
                    <h1 className="text-[#2E3881] text-2xl md:text-5xl text-center mb-5 md:mb-10">
                        Testimony
                    </h1>
                    <Testimonials testimonyData={TESTIMONY_DATA} />
                </div>
                <Partners />
                <FAQ />
            </div>
        </main>
    );
};
