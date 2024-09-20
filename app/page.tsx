import { redirect } from "next/navigation";
import Video from "@/modules/LandingPageModule/component/videos";
import Image from "next/image";

export default function Home() {
  return(
    <section className="overflow-x-hidden">
      <div className="relative h-screen w-screen">
        <Image
            src="/kapal-kiri2.png"
            alt="kapl-kiri2"
            width={300}
            height={100}
            className=" left-0 min-w-[150px] absolute animate-float-vertical z-20 w-[20vw] h-auto"
            />
        <Video/>
        <Image
            src="/dua-mobil-kanan.png"
            alt="dua-mobil-kanan"
            width={600}
            height={100}
            className=" sm:-right-56 -right-28 sm:-bottom-36 -bottom-60 q min-w-[150px] absolute animate-float-vertical z-20 sm:w-[600px] w-[300px] h-auto "
            />
      </div>

    </section>
      )
}
