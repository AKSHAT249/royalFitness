import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../constants';
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

     

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    
  return (
    <nav className="z-50 sticky top-0">
        <div className="flex items-center justify-between bg-black px-6 py-4">
           
            <a href="/" className="text-white lg:text-4xl text-3xl font-bold">
                Royal <span className="text-[#08C2FF]">Fitness</span>
            </a>
            
            <div className='block lg:hidden '>
                <button onClick={toggleDrawer}><VscThreeBars className='w-5 h-5 text-white' /></button>

            </div>

            <div className={`fixed top-0 right-0 lg:w-1/3 w-1/2   h-full  bg-gray-900 shadow-lg transform transition-transform duration-500 flex flex-col z-50 ${isDrawerOpen ? 'translate-x-0': 'translate-x-full'} `}>
                <button className="absolute top-5 right-5 text-white   hover:bg-skyblue p-2 rounded-full" onClick={toggleDrawer}>
                    <IoClose clasName="text-white w-[20px] h-[20px]" />
                </button>

                <ul className="  flex  flex-col items-center justify-between gap-4 lg:gap-6 mt-24">
                    {/* {
                        navbarLinks.map( (item) => (
                            <a key={item.href} href={item.href} > <li className="text text-lg hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">{item.name}</li></a>
                        ) )
                    } */}
                    <Link to="/" onClick={toggleDrawer} className="text-white text-lg hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Home</Link>
                    <Link to="/why-join" onClick={toggleDrawer} className="text-white text-lg hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Why Join</Link>
                    <Link to="/training" onClick={toggleDrawer} className="text-white text-lg hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Training</Link>
                    <Link to="/gallery" onClick={toggleDrawer} className="text-white text-lg hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Gallery</Link>
                    
                </ul>

            </div>

            <div className=" hidden lg:block">
                <ul className="  flex items-center justify-between gap-4 lg:gap-6">
                    {
                        navbarLinks.map( (item) => (
                            <a key={item.href} href={item.href}> <li className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">{item.name}</li></a>
                        ) )
                    }
                    <Link to="/why-join" className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Why Join</Link>
                    <Link to="/training" className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Training</Link>
                
                </ul>
            </div>
            

            <Link to="/why-join">
                <button className="text-[#08C2FF] border-2 border-[#08C2FF] px-6 py-2 rounded-lg hover:ring-2">Join Us</button>
            </Link>
            

        </div>
        
    </nav>
  )
}

export default Navbar