import partner_logo from "../assets/topodium_logo.png"
import social_logo1 from "../assets/twitter-icon.svg";
import social_logo2 from "../assets/facebook-icon.svg";
import social_logo3 from "../assets/youtube-icon.svg";
import social_logo4 from "../assets/linkedin-icon.svg";
import social_logo5 from "../assets/instagram-icon.svg";
import social_logo6 from "../assets/skype-icon.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col md:flex-row items-center justify-stretch w-full py-16">
                <div className="md:self-start md:w-[20%] p-6">
                    <img src={logo} className="w-32 " alt="" />
                </div>
                <div className="p-6 md:border-l-2 justify-self-start text-left md:w-[50%]">
                    <ul className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 w-full mb-4">
                        <li className="text-sm cursor-pointer hover:text-red-500 border-r-2 pr-2">Career </li>
                        <li className="text-sm cursor-pointer hover:text-red-500 border-r-2 px-2">Terms and Condition </li>
                        <li className="text-sm cursor-pointer hover:text-red-500 border-r-2 px-2">Privacy Policy </li>
                        <li className="text-sm cursor-pointer hover:text-red-500 border-r-2 px-2">Blog </li>
                        <li className="text-sm cursor-pointer hover:text-red-500 px-2">Contact Us</li>
                    </ul>
                    <article className="flex items-center justify-center md:justify-normal text-gray-400 text-sm font-semibold">
                        <p>Copyright 2023 @ <span className="text-blue-500">JPLoft Solutions Pvt. Ltd.</span></p>
                        <p>All Rights Reserved</p>
                    </article>
                </div>
                <div className="p-6 md:w-[40%]">
                    <div className="text-right text-sm font-semibold flex flex-wrap items-center justify-center md:justify-end gap-y-2">
                        <p>JPLoft Solutions is an affiliate and Partner Of</p>
                        &nbsp;
                        <img src={partner_logo} width={150} className="ml-2" alt="" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-y-2 py-4">
                        <img src={social_logo1} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                        <img src={social_logo2} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                        <img src={social_logo3} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                        <img src={social_logo4} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                        <img src={social_logo5} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                        <img src={social_logo6} className="px-2 transition-transform hover:scale-110 ease-in-out cursor-pointer" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer