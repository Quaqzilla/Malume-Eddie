import ls from './../assets/Images/test.png';

export function HomePage() {
    return (
        <div className="">

            <div className="w-screen h-screen flex items-center justify-end bg-[url('../../src/assets/Images/africa.jpg')] bg-no-repeat bg-cover bg-fixed">

                <div className="flex flex-col gap-8 p-6">
                    <div className="">
                        <h1 className="text-7xl  text-white font-extralight md:text-8xl mr-2" data-aos="zoom-in" data-aos-duration="2000">Bokang <b className="font-medium text-black">Afrika</b></h1>
                        <p className="md:text-2xl font-light" data-aos="fade-right" data-aos-duration="2500">For Africa. By Afrika</p>
                    </div>

                    <div>
                        <button className="bg-black p-4 text-white rounded-xl">See More</button>
                    </div>

                </div>

            </div>

            <div className="flex flex-col items-center p-6 ">
                <h1 className="text-center p-4 text-3xl text-orange-600 font-light">ABOUT US</h1>
                <div className='md:flex flex-row items-center gap-10'>
                    <p data-aos="zoom-in" data-aos-duration="2000">Get information summary about the company</p>
                    <img src={ls} alt="business-logo" className="p-4" data-aos="fade-right" data-aos-duration="2500"/>
                </div>
                
            </div>

            <div className="p-6">
                <h1 className='text-center text-3xl font-light text-orange-500'>VIEW OUR <b className='text-orange-600'>GALLERY</b></h1>
                <p className='pt-4'>Text content</p>
                <button>View</button>
            </div>

            <div>

            </div>

        </div>
    )
}