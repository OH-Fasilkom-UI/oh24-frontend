import BidangTabs from './sections/BidangTabs'

export const WallOfFameModule = () => {
  return (
    <main className="flex flex-col z-20 w-full relative overflow-hidden pb-[400px] md:pb-[800px]">
      <div className="relative pb-16 md:pb-24 px-5 flex-grow mt-20">
        <BidangTabs />
      </div>
    </main>
  )
}
