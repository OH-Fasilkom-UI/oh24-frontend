'use client';

import { useState } from "react";
import Card from "@/components/ui/Card";
import RadioGroup from '@/components/ui/RadioGroup';
import Image from "next/image";
import Input from '@/components/ui/Input';
import { z } from 'zod';
import Button from "@/components/ui/Button";
import { toast } from '@/components/ui/Toast'

const schema = z.object({
    eventDate: z.string(),
    referralCode: z.string().optional()
});

export const PickEventSection = () => {
    const [eventDate, setEventDate] = useState<string>('');
    const [referralCode, setReferralCode] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // ini placeholder aja untuk validasi kode referral
    const validateReferralCode = async (code: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (code === "VALIDCODE") {
                    resolve(true);
                } else {
                    reject(new Error("Invalid referral code."));
                }
            }, 1000);
        });
    };

    const handleSubmit = async () => {
        const result = schema.safeParse({
            eventDate,
            referralCode
        });

        if (result.success) {
            // Cek apakah eventDate sudah dipilih
            if (!eventDate) {
                toast.error("Please select an event date.");
                return;
            }

            setIsSubmitting(true);

            // Validasi Referral Code
            try {
                if (referralCode) {
                    await validateReferralCode(referralCode);
                    toast.success("Referral code is valid!");
                } else {
                    toast.info("No referral code provided.");
                }
                // console.log("Form Submitted: ", result.data);
                // Misalnya ada error saat validasi kode referral (backend error)
            } catch (error: any) {
                toast.error(error.message || "Validation Failed");
            } finally {
                setIsSubmitting(false);
            }
        } else {
            const errorMessages = result.error.errors.map(err => err.message).join(", ");
            toast.error(`Validation Failed: ${errorMessages}`);
            // console.error("Validation Failed", result.error);
        }
    };

    return (
        <section className="mt-5 overflow-x-hidden">
            <div className="absolute w-full max-lg:h-[100vh] h-[145vh] z-0 max-lg:top-60">
                <Image
                    className="absolute object-cover"
                    fill
                    sizes="none"
                    src='/register/pick-event-background.png'
                    alt="Background"
                />
            </div>
            <div className="flex flex-col items-center px-5 md:px-10 lg:px-3">
                <div className="w-full flex justify-center items-center mt-[2vw] z-20 gap-16 max-lg:flex-col">

                    {/* Card Main Event */}
                    <Card className="w-[561px] h-[516px] flex flex-col justify-between items-center py-10 max-lg:h-fit max-md:w-[84vw] max-sm:w-[90vw]" style={{
                        background: 'rgba(46, 56, 129, 0.9)',
                        boxShadow: '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
                        borderRadius: '32px'
                    }}>
                        <div className="h-[60%]">
                            <h1 className="h-fit text-t3 text-shadow-pickEvent text-[#E0ECFF] flex justify-center mt-6 text-nowrap max-sm:text-t4 max-[400px]:text-[26px]">Full Experience</h1>
                            <div className="flex flex-col gap-5 mt-8 text-t7 max-sm:text-t8 max-[400px]:text-[12px]">
                                <div className="leading-[24px]">
                                    <h1>1. CS Connect</h1>
                                    <ul className="list-disc ml-10">
                                        <li><strong>Tanggal:</strong> Sabtu, 9 November 2024</li>
                                        <li><strong>Waktu:</strong> 12.00 - 16.00</li>
                                        <li><strong>Tempat:</strong> Zoom Meeting</li>
                                    </ul>
                                </div>

                                <div className="leading-[24px]">
                                    <h1>2. Main Event</h1>
                                    <ul className="list-disc ml-10">
                                        <li><strong>Tanggal:</strong> 23 November 2024 dan 24 November 2024</li>
                                        <li><strong>Waktu:</strong> 09.00 - 16.30</li>
                                        <li><strong>Tempat:</strong> Gedung Lama, Fasilkom UI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col mt-8">
                            <h1 className="text-t6 max-sm:text-t7 ">
                                Pilih tanggal Main Event:
                            </h1>
                            <div className="flex gap-8 mt-2 mb-6">
                                <RadioGroup size="small" color="light" value={eventDate} onValueChange={(value) => setEventDate(value)} className="flex-row flex gap-6 max-sm:flex-col max-sm:gap-4">
                                    <RadioGroup.Item value="16 November 2024" id="16nov" className="inline-block">
                                        16 November 2024
                                    </RadioGroup.Item>
                                    <RadioGroup.Item value="17 November 2024" id="17nov" className="inline-block">
                                        17 November 2024
                                    </RadioGroup.Item>
                                </RadioGroup>
                            </div>
                        </div>
                    </Card>

                    {/* Card Online */}
                    <Card
                        className="w-[561px] h-[516px] flex flex-col justify-between items-center py-10 max-lg:h-fit max-md:w-[84vw] max-sm:w-[90vw]"
                        style={{
                            background: 'rgba(46, 56, 129, 0.9)',
                            boxShadow: '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
                            borderRadius: '32px'
                        }}
                    >
                        <div className="h-[60%]">
                            <h1 className="h-fit text-t3 text-shadow-pickEvent text-[#E0ECFF] flex justify-center mt-6 text-nowrap max-sm:text-t4 max-[400px]:text-[26px]">
                                Online Experience
                            </h1>
                            <div className="flex flex-col gap-5 mt-8 text-t7 max-sm:text-t8 max-[400px]:text-[12px]">
                                <div className="leading-[24px] md:-ml-[1vw]">
                                    <h1>1. CS Connect &#40;penjelasan&#41;</h1>
                                    <ul className="list-disc ml-10">
                                        <li><strong>Tanggal:</strong> Sabtu, 9 November 2024</li>
                                        <li><strong>Waktu:</strong> 12.00 - 16.00</li>
                                        <li><strong>Tempat:</strong> Zoom Meeting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col mt-8">
                            <h1 className="text-t6 max-sm:text-t7 max-[400px]:text-t8">
                                Pilih tanggal CS Connect:
                            </h1>

                            <div className="flex flex-row gap-10 mt-2 mb-6">
                                <RadioGroup
                                    size={"small"}
                                    color={"light"}
                                    value={eventDate}
                                    onValueChange={(value) => setEventDate(value)}
                                >
                                    <RadioGroup.Item value="9 November 2024" id="9nov">
                                        9 November 2024
                                    </RadioGroup.Item>
                                </RadioGroup>
                            </div>
                        </div>
                    </Card>
                </div>


                <form className="w-[27rem] mt-6 py-6 px-8 max-md:mt-16 max-lg:w-[561px] max-md:w-[84vw] z-10" style={{
                    background: 'rgba(46, 56, 129, 0.9)',
                    boxShadow: '-4px -4px 12px rgba(78, 86, 196, 0.5), 4px 4px 12px rgba(98, 163, 203, 0.5)',
                    borderRadius: '32px'
                }}>
                    <Input
                        label="Kode Referral"
                        placeholder="Masukkan Kode Referral"
                        className="w-full border-[#ffffff2a]"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                    />
                </form>
                <div className="mt-6 max-md:mt-10 z-10">
                    <Button
                        onClick={handleSubmit}
                        className={`bg-BlueRegion/Cornflower/50 text-Text/TextLightBG py-2 px-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </div>


            </div>
            <Image
                src="/pesawat-kanan-2.png"
                alt="pesawat-kanan"
                width={400}
                height={266}
                className="absolute right-0 top-56 animate-float-horizontal z-20 max-lg:hidden"
            />
        </section>
    );
};
