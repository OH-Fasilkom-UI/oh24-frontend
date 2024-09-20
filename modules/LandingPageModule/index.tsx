import { WHAT_IS_OH_DATA } from "./constant"
import WhatIsOpenHouse from "./sections/WhatIsOpenHouse"

export const LandingPageModule = () => {
    return (
        <main className="min-h-screen flex flex-col z-20 w-full relative">
            <WhatIsOpenHouse content={{ data: WHAT_IS_OH_DATA }} />
        </main>
    )
}
