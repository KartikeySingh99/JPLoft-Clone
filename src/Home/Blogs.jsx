import banner1 from "../assets/food-delivery.webp";
import banner2 from "../assets/banking2x.webp";
import banner3 from "../assets/educt-11.webp";
import banner4 from "../assets/healthcare22.webp";
import banner5 from "../assets/ecom.webp";
import banner6 from "../assets/media-12.webp";
import banner8 from "../assets/transportation123.webp";
import banner9 from "../assets/tourandtravel.webp";
import banner10 from "../assets/real-estate.webp";

const Blogs = () => {
    return (
        <>
            <div className='text-left py-4'>
                <h1 className='text-3xl font-bold mb-4'>Industries We Serve</h1>
                <p className="py-4 text-lg">We provide superior website and mobile app development services to businesses across many different industry verticals.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4 w-full'>
                <div className="md:row-span-2 md:col-span-2 card-img w-auto relative overflow-hidden">
                    <img src={banner1} alt="" className='' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-2x py-2l'>Food & Restaurants</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 card-img relative overflow-hidden">
                    <img src={banner2} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>Banking & Finance</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 card-img relative overflow-hidden">
                    <img src={banner3} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>Education</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner4} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>HealthCare</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner5} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>E-commerce</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner6} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>Media & Publishing</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner8} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>transportation</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner9} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>Tour & Travel</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
                <div className="row-span-1 card-img relative overflow-hidden">
                    <img src={banner10} alt="" className='w-full' />
                    <div className='absolute bottom-0 left-0 z-10 text-left p-4 text-white'>
                        <h2 className='text-xl py-2'>real Estate</h2>
                        <p className="md:text-xs lg:text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nam cupiditate fugit ipsum aliquam illum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs