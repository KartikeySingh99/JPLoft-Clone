import partner_logo from "../assets/topodium_logo.png"
import social_logo1 from "../assets/twitter-icon.svg";
import social_logo2 from "../assets/facebook-icon.svg";
import social_logo3 from "../assets/youtube-icon.svg";
import social_logo4 from "../assets/linkedin-icon.svg";
import social_logo5 from "../assets/skype-icon.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-wrap items-center justify-stretch w-full py-16">
                <div className=" w-[20%] p-6">
                    <img src={logo} alt="" />
                </div>
                <div className="p-6 justify-self-start text-left  w-[40%]">
                    <ul className="flex items-center justify-between w-full mb-4">
                        <li className="text-sm cursor-pointer hover:text-red-500">Career </li>
                        <li>|</li>
                        <li className="text-sm cursor-pointer hover:text-red-500">Terms and Condition </li>
                        <li>|</li>
                        <li className="text-sm cursor-pointer hover:text-red-500">Privacy Policy </li>
                        <li>|</li>
                        <li className="text-sm cursor-pointer hover:text-red-500">Blog </li>
                        <li>|</li>
                        <li className="text-sm cursor-pointer hover:text-red-500">Contact Us</li>
                    </ul>
                    <article className="flex items-center text-gray-400 text-sm font-semibold">
                        <p>Copyright 2023 @ <span className="text-blue-500">JPLoft Solutions Pvt. Ltd.</span></p>
                        <p>All Rights Reserved</p>
                    </article>
                </div>
                <div className="p-6 w-[40%]">
                    <div className="text-sm font-semibold flex items-center justify-end">
                        <p>JPLoft is an affiliate and Partner Of</p>
                        &nbsp;
                        <img src={partner_logo} width={150} className="ml-2" alt="" />
                    </div>
                    <div className="flex items-center justify-end py-4">
                        <img src={social_logo1} className="px-2" alt="" />
                        <img src={social_logo2} className="px-2" alt="" />
                        <img src={social_logo3} className="px-2" alt="" />
                        <img src={social_logo4} className="px-2" alt="" />
                        <img src={social_logo5} className="px-2" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer