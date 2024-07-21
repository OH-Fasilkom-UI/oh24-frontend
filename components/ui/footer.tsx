import { Copy, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> { 

}

const Footer: React.FC<FooterProps> = ({
    ... props
}) => {
    return (
        <footer className="relative flex items-end">
            <Image
                src={'/footer.png'}
                alt="Footer Background"
                width={1920}
                height={412}
                className="w-full absolute bottom-[412px] object-top object-cover z-[-1] hidden md:flex"
            />
            <Image
                src={'/footer-mobile.png'}
                alt="Footer Background"
                width={1920}
                height={412}
                className="w-full absolute bottom-[262px] h-[450px] object-top object-cover z-[-1] md:hidden"
            />
            <section className="z-20 flex flex-col gap-4 bg-gradient-to-b from-[#343FC0] to-[#080B2D] h-[262px] md:h-[412px] p-5 md:p-10 w-full">
                <div className="flex items-center justify-center text-white font-bold text-sm font-tex-gyre gap-2 md:hidden">
                    <h5 className="">Supported by</h5>
                    <Image
                        src={'/fasilkom.png'}
                        alt="Fasilkom UI Logo"
                        width={84}
                        height={120}
                    />
                </div>
                <div className="flex items-center justify-between w-full h-fit">
                    <div className="flex gap-12">
                        <Image
                            src={'/oh-logo.svg'}
                            alt="Open House Logo"
                            width={251}
                            height={303.23}
                            className="w-[124.8px] h-[156px] md:w-[251px] md:h-[303.23px]"
                        />
                        <div className="hidden lg:flex flex-col justify-center gap-8 font-tex-gyre text-white font-bold text-xl">
                            {
                                ["Ambassador", "Dashboard", "Registration Page", "Merchandise", "Wall of Fame"].map((item) => {
                                    return (
                                        <li className="list-none">
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex gap-32 font-tex-gyre font-bold text-white justify-end">
                        <div className="flex flex-col gap-4 md:gap-8 text-xl ">
                            <div className="flex flex-col items-end md:items-start gap-4">
                                <h5 className="text-right md:text-left text-xs md:text-sm">Find Us on Social Media</h5>
                                <div className="flex gap-3 lg:gap-9 items-center">
                                    <Instagram className="w-4 ld:w-6 aspect-square"/>
                                    <Twitter className="fill-white w-4 lg:w-6"/>
                                    <Youtube className="w-4 lg:w-6" />
                                    <Image
                                        src={'/tiktok.svg'}
                                        alt="Tiktok Logo"
                                        width={24}
                                        height={24}
                                        className="w-3 lg:w-4"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-end md:items-start">
                                <h5 className="text-xs md:text-sm">Contact Us</h5>
                                <div className="flex gap-2 items-center">
                                    <span className="font-normal text-xs flex:text-sm">openhouse@cs.ui.ac.id</span>
                                    <Copy className="w-3 md:w-4 aspect-square cursor-pointer hover:scale-110 duration-100"/>
                                </div>
                            </div>
                            <h3 className="text-xl text-right md:hidden">#MoreThanIT</h3>
                        </div>
                        <div className="hidden md:flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h5 className="">Supported by</h5>
                                <Image
                                    src={'/fasilkom.png'}
                                    alt="Fasilkom UI Logo"
                                    width={160}
                                    height={120}
                                />
                            </div>
                            <h3 className="text-4xl flex">#MoreThanIT</h3>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer