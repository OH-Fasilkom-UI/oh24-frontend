import Image from 'next/image';
import Card from '@/components/ui/Card'

const Video = () => {
    return (
        <div className="absolute h-full  w-full flex flex-col justify-center right-0 items-center top-36">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-contain sm:bg-cover sm:bg-center transform sm:translate-y-0 translate-y-24 bg-bottom bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('/kota-landingpage.png')`,
                    height: '110%',  // Ensures the background covers the full viewport height
                }}
            ></div>
            
            {/* Heading */}
            <h1 className="relative z-10 text-[48px] sm:text-[36px] text-blue-900 text-center">
                Check out Our Videos!
            </h1>

            {/* Video Cards */}
            <div className="relative z-10 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2  items-center sm:gap-12 gap-6 p-4 mt-8">
                {/* First Card */}
                <div className="flex justify-center items-center">
                    <Card className="flex bg-opacity-90 w-full sm:w-[450px] rounded-[18px] shadow-lg shadow-blue-900">
                        <div className="flex flex-col items-center">
                            <p className="text-white text-[25px]  font-semibold mb-6">Fasilkom Rewind</p>
                            <iframe
                                className='rounded-[10px] h-[200px] sm:h-[200px] '
                                width="100%"
                                height="120%"
                                src="https://www.youtube.com/embed/VmN6he5Yct4"
                                title="Fasilkom Rewind Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Card>
                </div>
                
                {/* Second Card */}
                <div className="flex justify-center items-center">
                    <Card className="flex bg-opacity-90 w-full sm:w-[450px] rounded-[18px] shadow-lg shadow-blue-900">
                        <div className="flex flex-col items-center">
                            <p className="text-white text-[25px]  font-semibold mb-6">Grand Opening</p>
                            <iframe
                                className='rounded-[10px] h-[200px] sm:h-[200px]'
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/I17YAEdLTxY"
                                title="Fasilkom Rewind Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Video;