import ExploreContact from './sections/ExploreContact'

const ExploreModule = () => {
  return (
    <main className="min-h-screen flex flex-col z-20 w-full relative">
      <div className="relative flex-grow mt-10 px-5 md:px-10 lg:px-32">
        <ExploreContact />
      </div>
    </main>
  )
}

export default ExploreModule
