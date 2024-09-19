'use client';

import Image from "next/image";
import QRCode from "react-qr-code";
import { FC } from "react";

interface Mentor {
    id: number;
    name: string;
}

interface AfterRegistrationModuleProps {
    mentors?: Mentor[];
    mentoringLink?: string;
    mainEventLink?: string;
    qrCodeValue?: string;
}
// sebenernya gw masih bingung nanti hubungin ke backendnya gimana, I assume bakal pake props, jadi gw bikin propsnya dulu
const AfterRegistrationModule: FC<AfterRegistrationModuleProps> = ({
    // Default value klo ga props ga diisi
    mentors = [
        { id: 1, name: 'Default Mentor 1' },
        { id: 2, name: 'Default Mentor 2' },
    ],
    mentoringLink = "https://ristek.link/mentoring",
    mainEventLink = "https://ristek.link/mainevent",
    qrCodeValue= "oh24",
}) => {
    return (
        <section className="max-w-[1920px] h-[190vh] max-sm:h-[220vh] pt-[100px] overflow-x-hidden flex flex-col items-center z-10 ">
            <h1 className="text-t3 text-Text/TextLightBG mt-16 mb-14 text-center">After Registration</h1>
            <div className="relative w-[1221px] max-xl:w-[84vw] h-[600px] max-lg:h-fit shadow-md rounded-3xl bg-[#3B478B] flex flex-row gap-12 px-8 py-7 sm:px-10 sm:py-8 text-white ">
                <div className="flex flex-row py-14 px-14 max-sm:px-4  max-lg:pb-32 w-full h-full justify-between items-center z-20 max-lg:flex-col-reverse max-lg:text-center">
                    <div className="flex flex-col gap-6 max-lg:gap-8">
                        <div>
                            <h3 className="text-t6 max-sm:text-t7 font-bold mb-1">Nama Mentor CS Connect:</h3>
                            <ol>
                                {mentors.map((mentor, index) => (
                                    <li key={mentor.id} className="ml-4">
                                        {index + 1}. {mentor.name}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-t6 max-sm:text-t7  font-bold mb-1">Link Grup WhatsApp Mentoring CS Connect:</h3>
                            <a href={mentoringLink} target="_blank" rel="noopener noreferrer">{mentoringLink}</a>
                        </div>

                        <div>
                            <h3 className="text-t6 max-sm:text-t7 font-bold mb-1">Link Grup WhatsApp Rombel Main Event:</h3>
                            <a href={mainEventLink} target="_blank" rel="noopener noreferrer">{mainEventLink}</a>
                        </div>

                    </div>
                    <div className="max-lg:mb-16">
                        <QRCode
                            value={qrCodeValue}
                            size={300}
                            className="shadow-lg bg-white p-3"
                        />
                    </div>
                </div>
                <div className="absolute w-[1300px] max-lg:w-[1000px] max-sm:w-[800px] max-[450px]:w-[700px] max-lg:-bottom-32 max-lg:left-1/2 max-lg:-translate-x-1/2">
                    <Image
                        src="/kereta-after-registration-nw.png"
                        alt="Kereta"
                        layout="responsive"
                        width={0}
                        height={0}
                        className="absolute lg:top-72 -left-96 max-lg:-bottom-10 max-sm:-bottom-2 max-[450px]:bottom-4 max-lg:left-1/2 max-lg:-translate-x-[50%] max-lg:transform max-lg:rotate-[-12deg]"
                    />
                </div>
            </div>
        </section>
    );
}

export default AfterRegistrationModule;
