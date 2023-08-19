import { useState, useRef,useEffect } from "react";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Animation from "../assets/animation.svg";
import image from "../assets/team_sec.webp";
import logo from "../assets/logo.svg";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
          }
        }
        document.addEventListener('click', handleOutsideClick)
        return (() => {
          document.removeEventListener('click', handleOutsideClick)
        })
      }, [])
    return (
        <>
            <header className='bg-white sticky top-0 left-0 z-50 w-full px-4 h-auto flex items-center'>
                <nav className='flex items-center justify-between xl:justify-between lg:px-12 w-full h-16'>
                    <img src={logo} width={90} alt="" />
                    <div className='hidden xl:flex items-center'>
                        <ul className='flex items-center'>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' onClick={() => setMenuOpen(!menuOpen)}>About Us <KeyboardArrowDownIcon /></li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' onClick={() => setMenuOpen(!menuOpen)}>Our Service <KeyboardArrowDownIcon /></li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' onClick={() => setMenuOpen(!menuOpen)}>Industries <KeyboardArrowDownIcon /></li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' onClick={() => setMenuOpen(!menuOpen)}>Solutions <KeyboardArrowDownIcon /></li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' >Case Study</li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' >Portfolio</li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' >Blog</li>
                            <li className='menu cursor-pointer px-3 py-4 hover:bg-[#223039] hover:text-white ' onClick={() => setMenuOpen(!menuOpen)}>Contact Us <KeyboardArrowDownIcon /></li>
                        </ul>
                        <button className='rounded-sm bg-[#ed1f24] text-white font-medium text-lg py-1 px-2 mx-2 flex items-center justify-center'><span><img src={Animation} alt="" /></span>Inquire Now</button>
                    </div>
                    <div className='block xl:hidden cursor-pointer'>
                        <MenuIcon fontSize='large' onClick={() => setOpen(!open)} />
                    </div>
                </nav>
            </header>
            {
                open &&
                <div className='mobile-menu bg-white px-6 lg:px-16'>
                    <ul>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>About Us</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Our Service</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Industries</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Solutions</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Case Study</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Portfolio</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Blog</p> <p><KeyboardArrowDownIcon /></p></li>
                        <li className="uppercase flex items-center justify-between w-full py-4 border-b-2 cursor-pointer"><p>Contact Us</p> <p><KeyboardArrowDownIcon /></p></li>
                    </ul>
                </div>
            }
            {
                menuOpen &&
                <div className="dropdown-menu rounded-3xl grid grid-cols-2 gap-4 justify-items-center items-center p-4">
                    <div className="relative menu-card">
                        <img src={image} alt="" />
                        <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-20 text-white">
                            <h1 className="text-3xl font-bold">About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit vitae molestiae dignissimos, laboriosam repellendus ducimus quidem voluptatem consequatur culpa.</p>
                            <button className='rounded-sm bg-[#ed1f24] text-white font-medium text-lg py-1 px-2 mx-2 flex items-center justify-center'><span><img src={Animation} alt="" /></span>Inquire Now</button>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap items-center justify-center  text-white">
                        <div className="relative  w-44 flex items-center justify-center flex-grow h-36 overflow-hidden rounded-xl">
                            <h1 className="hover:cursor-pointer text-3xl menu-option">Company</h1>
                        </div>
                        <div className="relative  w-44 flex items-center justify-center flex-grow h-36 overflow-hidden rounded-xl">
                            <h1 className="hover:cursor-pointer text-3xl menu-option">Leadership</h1>
                        </div>
                        <div className="relative  w-44 flex items-center justify-center flex-grow h-36 overflow-hidden rounded-xl">
                            <h1 className="hover:cursor-pointer text-3xl menu-option">Our Clients</h1>
                        </div>
                        <div className="relative  w-44 flex items-center justify-center h-36 flex-grow overflow-hidden rounded-xl">
                            <h1 className="hover:cursor-pointer text-3xl menu-option">Client Reviews</h1>
                        </div>
                        <div className="relative  w-44 flex items-center justify-center h-36 flex-grow overflow-hidden rounded-xl">
                            <h1 className="hover:cursor-pointer text-3xl menu-option">Career</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Header;