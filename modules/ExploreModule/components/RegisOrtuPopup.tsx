'use client'
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

export const RegistOrtuPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Link
            href={"https://docs.google.com/forms/d/e/1FAIpQLScnQxFQbK4V1i15D653HlzzwF2Iupo1zUcHCwVXYYnZqUUL0g/viewform"}
            passHref={true}
            target="_blank"
            className="z-50"
        >
            <div className={`fixed z-50 left-5 top-32 cursor-pointer flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100 animate-swing' : '-translate-x-full opacity-0'}`}>
                <div
                    className="border-2 border-white rounded-full bg-white p-1"
                >
                    <Image
                        src="/Profile/cowo1.png"
                        width={300}
                        height={300}
                        alt="Register Ortu Popup"
                        className="w-32 h-32 "
                    />
                </div>
                <h1 className="w-[200px] text-center bg-white rounded-full py-2 text-Text/TextLightBG">Registrasi Parent's Talkshow</h1>
            </div>
        </Link>
    )
}