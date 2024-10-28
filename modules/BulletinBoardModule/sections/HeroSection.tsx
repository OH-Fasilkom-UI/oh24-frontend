'use client';
import { useState, useEffect } from "react";
import PandaDuduk from "../components/PandaDuduk";
import Button from '@/components/ui/Button';
import Link from "next/link";

const BREAKPOINT_CONFIGS = {
    xl: {
        firstLayer: [0, 1, 2, 3, 4, 5, 6],
        secondLayer: [7, 8, 9, 10, 11, 12],
        maxPandas: 13
    },
    lg: {
        firstLayer: [0, 1, 2, 3, 4, 5],
        secondLayer: [6, 7, 8, 9, 10],
        maxPandas: 11
    },
    md2: {
        firstLayer: [0, 1, 2, 3, 4],
        secondLayer: [5, 6, 7, 8],
        maxPandas: 9
    },
    md1: {
        firstLayer: [0, 1, 2, 3],
        secondLayer: [4, 5, 6],
        maxPandas: 7
    },
    sm: {
        firstLayer: [0],
        secondLayer: [1, 2],
        maxPandas: 3
    }
};

// Tipe kursi yang ditunjukin, gelap atau terang
const PANDA_TYPES = [
    'gelap', 'terang', 'gelap', 'terang', 'gelap', 'terang', 'gelap',
    'terang', 'gelap', 'terang', 'gelap', 'terang', 'gelap'
];

// Pola tampilan panda
// Meaning that which index of the seat that the panda will be shown
const DISPLAY_PATTERNS = {
    xl: {
        1: [4],
        2: [2, 9],
        3: [1, 6, 11],
        4: [0, 4, 8, 12],
        5: [1, 3, 6, 9, 11],
        6: [0, 2, 5, 7, 10, 12],
        7: [1, 3, 4, 6, 8, 10, 12],
        8: [0, 2, 3, 5, 7, 9, 10, 12],
        9: [0, 1, 3, 4, 6, 8, 9, 11, 12],
        10: [0, 1, 2, 4, 5, 7, 8, 10, 11, 12],
        11: [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12],
        12: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
        13: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    lg: {
        1: [3],
        2: [1, 8],
        3: [0, 4, 9],
        4: [1, 3, 6, 10],
        5: [0, 2, 5, 7, 9],
        6: [0, 2, 3, 6, 8, 10],
        7: [0, 1, 3, 4, 7, 8, 10],
        8: [0, 1, 2, 4, 6, 7, 9, 10],
        9: [0, 1, 2, 3, 5, 6, 8, 9, 10],
        10: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
        11: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    md2: {
        1: [2],
        2: [1, 6],
        3: [0, 3, 7],
        4: [1, 2, 5, 8],
        5: [0, 2, 4, 6, 8],
        6: [0, 1, 3, 5, 6, 8],
        7: [0, 1, 2, 4, 5, 7, 8],
        8: [0, 1, 2, 3, 5, 6, 7, 8],
        9: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    md1: {
        1: [2],
        2: [0, 5],
        3: [1, 3, 6],
        4: [0, 2, 4, 6],
        5: [0, 1, 3, 4, 6],
        6: [0, 1, 2, 4, 5, 6],
        7: [0, 1, 2, 3, 4, 5, 6]
    },
    sm: {
        1: [1],
        2: [0, 2],
        3: [0, 1, 2]
    }
};

const HeroSection = () => {
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    // Nanti fetching dari API disini
    const jumlahParticipants = 340;

    const getBreakpoint = (width: number): keyof typeof BREAKPOINT_CONFIGS => {
        if (width >= 1280) return 'xl';
        if (width >= 1088) return 'lg';
        if (width >= 899) return 'md2';
        if (width >= 768) return 'md1';
        return 'sm';
    };

    const [breakpoint, setBreakpoint] = useState<keyof typeof BREAKPOINT_CONFIGS>(getBreakpoint(windowWidth));
    // Minimal satu panda ada
    const calculatePandasToShow = (participants: number, maxPandas: number): number => {
        const maxParticipants = 940;
        return Math.max(Math.floor((participants / maxParticipants) * maxPandas), 1);
    };

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
            setBreakpoint(getBreakpoint(newWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const config = BREAKPOINT_CONFIGS[breakpoint];
    const pandasToShow = calculatePandasToShow(jumlahParticipants, config.maxPandas);
    const visibleIndices = new Set(DISPLAY_PATTERNS[breakpoint][pandasToShow as keyof typeof DISPLAY_PATTERNS[typeof breakpoint]]);

    return (
        <section className="w-full flex flex-col items-center pt-[90px] max-md:pt-[80px]">
            <h1
                className="text-[88px] max-md:text-[48px] font-riffic text-BlueRegion/CeruleanBlue/600 text-center md:whitespace-nowrap"
                style={{
                    textShadow: "0px 3px 3px #2E3881",
                }}
            >
                Get your <span className="font-riffic text-BlueRegion/CeruleanBlue/600 max-md:text-[88px] max-md:uppercase max-md:leading-none" style={{
                    textShadow: "0px 3px 3px #2E3881",
                }}><br className="max-md:block hidden" />Free</span>
            </h1>
            <h1
                className="text-[64px] max-md:text-[48px] font-riffic text-BlueRegion/CeruleanBlue/600 text-center md:whitespace-nowrap max-md:leading-tight"
                style={{
                    textShadow: "0px 3px 3px #2E3881",
                }}
            >
                Ticket Now!
            </h1>

            {/* First Layer */}
            <div className="flex flex-wrap justify-center gap-[3rem] w-full mt-8">
                {config.firstLayer.map((pandaIndex) => (
                    <PandaDuduk
                        key={`first-${pandaIndex}`}
                        type={PANDA_TYPES[pandaIndex]}
                        show={visibleIndices.has(pandaIndex)}
                    />
                ))}
            </div>

            {/* Second Layer */}
            <div className="flex flex-wrap justify-center gap-[3rem] w-full mt-8">
                {config.secondLayer.map((pandaIndex) => (
                    <PandaDuduk
                        key={`second-${pandaIndex}`}
                        type={PANDA_TYPES[pandaIndex]}
                        show={visibleIndices.has(pandaIndex)}
                    />
                ))}
            </div>

            {940 - jumlahParticipants === 0 ? (
                <h2 className="text-t6 max-sm:text-t7 text-BlueRegion/CeruleanBlue/700 text-center font-tex-gyre font-bold mt-8 px-2">
                    Yah ticket Offline Open House Fasilkom UI sudah habis!
                    <br />Yuk segera daftar Online Experience!
                </h2>
            ) : (
                <h2 className="text-t6 max-sm:text-t7 text-BlueRegion/CeruleanBlue/700 text-center font-tex-gyre font-bold mt-8 px-2 max-md:px-8">
                    Yuk! Masih ada {940 - jumlahParticipants} tempat tersedia untuk Full Experience Open House Fasilkom UI!
                    <br />Jangan sampai ketinggalan ya!
                </h2>
            )}
        
            <Link href="/register">
                <Button className="w-[130px] sm:w-[200px] text-[12px] sm:text-[12px] mt-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.46447 15.4645C6.40215 14.5268 7.67392 14 9 14H15C16.3261 14 17.5979 14.5268 18.5355 15.4645C19.4732 16.4021 20 17.6739 20 19V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V19C18 18.2044 17.6839 17.4413 17.1213 16.8787C16.5587 16.3161 15.7956 16 15 16H9C8.20435 16 7.44129 16.3161 6.87868 16.8787C6.31607 17.4413 6 18.2044 6 19V21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21V19C4 17.6739 4.52678 16.4021 5.46447 15.4645Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="white" />
                    </svg>
                    Register
                </Button>
            </Link>
        </section>
    );
};

export default HeroSection;