import React from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../constants';


const Navbar = () => {
    
  return (
    <nav className="z-50 sticky top-0">
        <div className="flex items-center justify-between bg-black px-6 py-4">
           
            <a href="/" className="text-white lg:text-4xl text-3xl font-bold">
                Royal <span className="text-[#08C2FF]">Fitness</span>
            </a>

            <ul className="flex items-center justify-between gap-4 lg:gap-6">
                {
                    navbarLinks.map( (item) => (
                        <a href={item.href}> <li className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">{item.name}</li></a>
                    ) )
                }
                <Link to="/why-join" className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Why Join</Link>
                <Link to="/training" className="text-white text-sm hover:underline hover:text-lg hover:decoration-[#08C2FF] hover:decoration-4 hover:underline-offset-4">Training</Link>
            
            </ul>

            <Link to="/why-join">
                <button className="text-[#08C2FF] border-2 border-[#08C2FF] px-6 py-2 rounded-lg hover:ring-2">Join Us</button>
            </Link>
            

        </div>
        
    </nav>
  )
}

export default Navbar