import "./home.css";
import video from "../assets/jploftvdo.mp4";
import Marquee from "react-fast-marquee";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo4 from "../assets/logo4.png";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import stack_logo from "../assets/stack-icon.svg";
import web_logo from "../assets/web.svg";
import mobile_logo from "../assets/mobile-icon.svg";
import marketing_logo from "../assets/marketing-icon.svg";
import salesforce_logo from "../assets/salesforce_icon.svg";
import ecommerce_logo from "../assets/ecommerce-icon.svg";
import game_logo from "../assets/game-icon.svg";
import IOT_logo from "../assets/lot-icon.svg";
import whatsapp_logo from "../assets/whatsapp.webp";
import Animation from "../assets/animation.svg";
import banner7 from "../assets/jploft_solution.webp";
import banner11 from "../assets/vdo-bgg-sml_3.webp";
import { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";
import CardCarousel from "../Carousel/CardCarousel";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";

const Home = () => {
    
    const data = [
        {
            logo: web_logo,
            background: "bg-sky-500",
            title: "Web Developement",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/srce-bg.svg"
        },
        {
            logo: stack_logo,
            background: "bg-[#9e37aa]",
            title: "Full Stack",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/stack.svg"
        },
        {
            logo: mobile_logo,
            background: "bg-[#f44539]",
            title: "Mobile App Developement",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/mobile.webp"
        },
        {
            logo: marketing_logo,
            background: "bg-[#00e4b5]",
            title: "Digital Marketing",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/marketing.svg"

        },
        {
            logo: salesforce_logo,
            background: "bg-[#40d774]",
            title: "Saleforce Developement",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/force.svg"

        },
        {
            logo: ecommerce_logo,
            background: "bg-[#ecaf02]",
            title: "E-Commerce & Marketing",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/ecommerce.svg"

        },
        {
            logo: game_logo,
            background: "bg-[#6537aa]",
            title: "Game Developement",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/game.svg"

        },
        {
            logo: IOT_logo,
            background: "bg-[#dd7e01]",
            title: "Trending Technology",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus omnis unde iste quaerat earum dicta officia fugiat, est quo saepe!",
            list: ["Laravel", "CodeIgnitor", "Magento"],
            image: "../assets/lot.svg"

        },
    ]

    const [visible, setVisible] = useState(false);

    const handleEnter = () => {
        setVisible(true);
    }
    const handleExit = () => {
        setVisible(false);
    }
    return (
        <>
            <section className='flex items-center justify-center hero-container'>
                <div className='hidden md:block md:w-[100vw] md:h-[90vh] -z-10'>
                    <video className='object-cover w-full h-full aspect-ratio-video' loop autoPlay muted >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='py-6 px-4 bg-[#23232f] md:bg-transparent static md:absolute flex flex-col items-center justify-between'>
                    <div className=' flex items-center flex-col'>
                        <h1 className='md:py-6 text-2xl md:text-[3.5rem] font-bold text-white'>Top-Rated <span className='text-sky-500'>Web</span> & <span className='text-green-500'>App</span> </h1>
                        <h1 className='md:py-6 text-2xl md:text-[3.5rem] font-bold text-white'>Development Company</h1>
                        <p className='text-sm md:text-[1.5rem] font-medium text-white py-12 md:leading-8 w-[80%]'>We love developing masterpiece mobile applications and websites boosted by our digital marketing services. We love contributing to our clients’ success even more.</p>
                        <button className='rounded-md bg-[#ed1f24] text-white flex items-center px-2 py-2'><span><img src={Animation} alt="" /></span><span>Get A Free Consultation</span></button>
                    </div>
                </div>
                <div className="slider flex items-center justify-center w-full ">
                    <div className=' hidden md:flex items-center justify-center w-4/5'>
                        <Marquee speed={100} autoFill={true} className='flex items-center'>
                            <img src={logo1} className='mix-blend-screen px-4' width={100} alt="" />
                            <img src={logo2} className='mix-blend-screen px-4' width={100} alt="" />
                            <img src={logo4} className='mix-blend-screen px-4' width={100} alt="" />
                        </Marquee>
                    </div>
                </div>
            </section>
            <section className='bg-[#0a0916]'>
                <div className='text-white text-left flex flex-col items-center justify-center px-4 lg:px-6 xl:px-20'>
                    <h1 className='text-2xl font-semibold py-6'>Our Web & App Development Services Will Help You Thrive</h1>
                    <div className='my-12 grid items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-12 gap-y-8'>
                        {
                            data.map((data, i) => (
                                <div key={i} className="card xl:w-[300px] lg:h-[30rem] xl:h-[25rem] p-4 md:p-8 bg-[#161623] rounded-none shadow cursor-pointer">
                                    <div className={`flex items-center justify-start text-gray-900 w-[62px] h-[62px] aspect-square p-4 ${data?.background}`}>
                                        <img src={data.logo} alt="" className='py-4' />
                                    </div>
                                    <div className='text-white text-left'>
                                        <h2 className='py-4 text-xl'>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className='card-content'>
                                        <div className='text-white text-left p-4'>
                                            <h2 className='py-4 text-xl'>{data.title}</h2>
                                            <ul>
                                                {
                                                    data.list.map((item, i) => (
                                                        <li key={i} className='flex items-center w-full'><span className='pr-4'><DownloadDoneIcon fontSize='small' /></span>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='text-right py-6 absolute bottom-0 right-0 z-10'>
                                        <img src={data.image} width={100} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='bg-white px-12 py-12'>
                <Blogs />
            </section>
            <section className="bg-[#101023] px-8 md:px-12 py-16">
                <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-start items-center mb-4">
                        <div className="text-white w-full md:text-left">
                            <h1 className="py-4 text-2xl md:text-3xl lg:text-[3rem] xl:text-[4rem] font-bold text-[#2d6bf7]" value={1000}>{visible && <CountUp duration={1.5} start={0} end={100} />}+</h1>
                            <p className="py-2 text-xs md:text-sm lg:text-xl uppercase text-slate-400 font-semibold">Employee Strength</p>
                        </div>
                        <div className="text-white w-full md:text-left">
                            <h1 className="py-4 text-2xl md:text-3xl lg:text-[3rem] xl:text-[4rem] font-bold text-[#19c88e]">{visible && <CountUp duration={1.5} start={0} end={1000} />}+</h1>
                            <p className="py-2 text-xs md:text-sm lg:text-xl uppercase text-slate-400 font-semibold">Projects Delivered</p>
                        </div>
                        <div className="text-white w-full md:text-left">
                            <h1 className="py-4 text-2xl md:text-3xl lg:text-[3rem] xl:text-[4rem] font-bold text-[#e73c3e]">{visible && <CountUp duration={1.5} start={0} end={70} />}+</h1>
                            <p className="py-2 text-xs md:text-sm lg:text-xl uppercase text-slate-400 font-semibold">Country Services</p>
                        </div>
                        <div className="text-white w-full md:text-left">
                            <h1 className="py-4 text-2xl md:text-3xl lg:text-[3rem] xl:text-[4rem] font-bold text-[#fabb23]">${visible && <CountUp duration={1.5} start={0} end={500} />}M+</h1>
                            <p className="py-2 text-xs md:text-sm lg:text-xl uppercase text-slate-400 font-semibold">Revenue</p>
                        </div>
                    </div>
                </ScrollTrigger>
                <div className="md:px-12 py-12 flex flex-col md:flex-row items-start justify-between gap-4">
                    <div className="md:w-[50%] relative">
                        <img src={banner7} className="hidden md:block" alt="" />
                        <img src={banner11} className="hidden xl:block absolute -bottom-20 right-20" alt="" />
                    </div>
                    <div className="md:w-[40%]  text-white text-justify">
                        <h1 className="text-xl md:text-[2.4rem] font-bold mb-4">We Are JPLoft Solutions</h1>
                        <p className="mb-6 text-md leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam placeat consectetur, iste laboriosam quia officiis! Quisquam quia sapiente tenetur repellendus.</p>
                        <p className="text-md leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae, eveniet molestias delectus cum doloremque eius. Doloremque hic excepturi fugit perspiciatis alias nam saepe consequuntur natus voluptas illo quam, dolor perferendis magnam exercitationem, veritatis, repellendus asperiores? Quod, deserunt iste aut praesentium provident neque sequi odio totam placeat beatae nam, quia nobis blanditiis cupiditate accusantium doloribus. Nisi molestiae, porro quidem similique illo nulla voluptatum officiis obcaecati at? Est error adipisci nemo rem.</p>
                        <button className='rounded-sm bg-[#ed1f24] text-white font-medium text-lg py-1 px-2 mt-4 flex items-center justify-center'><span><img src={Animation} alt="" /></span>Inquire Now</button>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-8 py-4 md:py-16 bg-[#f6f9fb]">
                <Portfolio />
                <CardCarousel />
            </section>

            <img src={whatsapp_logo} className='w-14 rounded-full fixed bottom-4 left-4 z-20 hover:cursor-pointer' alt="" />
        </>
    )
}

export default Home