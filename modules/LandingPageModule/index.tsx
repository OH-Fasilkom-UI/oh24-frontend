import LandingPageTimeline from './sections/LandingPageTimeline'

const LandingPageModule = () => {
  return (
    <main className="min-h-screen flex flex-col z-20 w-full relative">
      <div className="relative flex-grow mt-10 px-5 md:px-10 lg:px-32">
        <LandingPageTimeline />
      </div>
    </main>
  )
}

export default LandingPageModule
