import banner12 from "../assets/whirlpool.webp";
import banner13 from "../assets/nike-port.webp";
import banner14 from "../assets/homebasket-4.webp";

const Portfolio = () => {
    return (
        <>
            <div className="my-4 flex-wrap items-center justify-between px-4">
                <div className="text-left">
                    <h1 className="text-[2.5rem] font-bold py-4">We Work With Top Giants In The World</h1>
                    <p className="text-lg w-4/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias necessitatibus voluptate iste dicta praesentium, sit rem sapiente totam asperiores illo.</p>
                </div>
                <button className='rounded-sm bg-[#ed1f24] text-white font-medium text-lg py-1 px-2 mt-4 flex items-center justify-center'><span><img src={Animation} alt="" /></span>View Portfolio</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 iteme-center max-w-full">
                <div className="portfolio-card md:px-4">
                    <div className="">
                        <img src={banner12} alt="" />
                    </div>
                    <div className="text-left bg-white pl-0 p-8 md:w-4/5 relative md:-top-20 flex items-center">
                        <p className="self-start w-28 text-lg px-4">01</p>
                        <div>
                            <h1 className="portfolio-heading font-bold text-[2rem]">WhirlPool</h1>
                            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid exercitationem placeat culpa quaerat, nisi magnam distinctio modi harum aliquam in.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card md:px-4">
                    <h1 className="hidden md:block mb-4 mt-4 text-left text-[4rem] text-gray-300 font-extrabold uppercase">Portfolio</h1>
                    <div className="">
                        <img src={banner13} alt="" />
                    </div>
                    <div className="text-left bg-white px-4 py-6 md:w-4/5 relative md:-top-20 flex items-center">
                        <p className="self-start w-28 text-lg px-4">02</p>
                        <div>
                            <h1 className="portfolio-heading font-bold text-[2rem]">Nike</h1>
                            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid exercitationem placeat culpa quaerat, nisi magnam distinctio modi harum aliquam in.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card md:px-4">
                    <div className="">
                        <img src={banner14} alt="" />
                    </div>
                    <div className="text-left bg-white px-4 py-6 md:w-4/5 relative md:-top-20 flex items-center">
                        <p className="self-start w-28 text-lg px-4">03</p>
                        <div>
                            <h1 className="portfolio-heading font-bold text-[2rem]">HomeBasket</h1>
                            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid exercitationem placeat culpa quaerat, nisi magnam distinctio modi harum aliquam in.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card md:px-4 ">
                    <div className="hidden md:block mt-24"></div>
                    <div className="">
                        <img src={banner14} alt="" />
                    </div>
                    <div className="text-left bg-white px-4 py-6 md:w-4/5 relative md:-top-20 flex items-center">
                        <p className="self-start w-28 text-lg px-4">04</p>
                        <div>
                            <h1 className="portfolio-heading font-bold text-[2rem]">Nike</h1>
                            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid exercitationem placeat culpa quaerat, nisi magnam distinctio modi harum aliquam in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio