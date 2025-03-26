import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer id="footer">
      <div className="w-full flex justify-center items-center bg-black p-[24px]">
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start justify-around mt-12 mb-12">
          <div className='flex flex-row gap-8 items-center mt-24'>
            
            
            <button className='text-white text-center mb-2'><FaInstagram className='text-white w-6 h-6' /></button>
            <button className='text-white text-center mb-2'><FaFacebook className='text-white w-6 h-6' /></button>
            <button className='text-white text-center mb-2'><BsTwitterX className='text-white w-6 h-6' /></button>
          </div>

          <div >

            <h1 className='text-white text-2xl font-bold mb-8'>SERVICES</h1>
            <div className='flex flex-col justify-start items-start'>
              <button className='text-white hover:text-gray-500  mb-2'>Personal Training</button>
              <button className='text-white hover:text-gray-500  mb-2'>Online Training</button>
              <button className='text-white hover:text-gray-500  mb-2'>Weight Training</button>
              <button className='text-white hover:text-gray-500  mb-2'>Nutrition Consultation</button>

            </div>
            
            
          </div>

          <div>

            <h1 className='text-white text-2xl font-bold mb-8'>SUPPORT</h1>
            <p className='text-white  mb-2'>Contact :</p>
            <p>
                <FaPhoneAlt className="inline-block text-white hover:text-gray-500" /> <span className="text-white hover:text-gray-500">+91 (700) 760 4999</span>
            </p>
            <Link to="/gallery">
              <p className='text-white mt-2 hover:text-gray-500'>Gallery</p>
            </Link>
            
            
            
          </div>


          <div>

            <h1 className='text-white text-2xl font-bold mb-8'>LOCATION</h1>

            {/* <p className='text-white'>
              Shiv Nagar Colony, near ITI, Farrukhabad, Uttar Pradesh 209625
            </p> */}
             
            <p className='text-white'> Shiv Nagar Colony,</p>
            <p className='text-white'>near ITI, Farrukhabad,</p>
            <p className='text-white'>Uttar Pradesh 209625</p>
            
            
          </div>
          



        </div>
        {/* <div>
            <div className="flex flex-row gap-4 justify-center m-4">
              <div className="bg-[#08C2FF] flex justify-center items-center p-3 rounded-full cursor-pointer hover:bg-blue-500">
                <FaInstagram className='text-white w-6 h-6' />
              </div>
              <div className="bg-[#08C2FF] flex justify-center items-center p-3 rounded-full cursor-pointer hover:bg-blue-500">
                <FaFacebook className='text-white w-6 h-6' />
              </div>
              <div className="bg-[#08C2FF] flex justify-center items-center p-3 rounded-full cursor-pointer hover:bg-blue-500">
                <BsTwitterX className='text-white w-6 h-6' />
              </div>
              
            </div>
            <h1 className='text-sm text-white'>© Royal Fitness 2025 - All rights Reserved</h1>
        </div> */}

      </div>
    </footer>
  )
}

export default Footer


// import React from 'react';
// import {Link} from "react-router-dom";
// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io";
// import { RiTwitterXLine } from "react-icons/ri";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className=" border-white py-12  px-12 bg-black">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0  pb-4 ">
//             <div className="text-sm gap-4 flex flex-col bg-black w-full">
//                 <h2 className="font-semibold text-lg text-white">Newsletter</h2>
//                 <p className="text-sm text-white">Be the first to hear about the products,
//                 exclusive events, and online offers.</p>

//                 <p className="text-sm text-white">Sign up and get 10% off your first order.</p>

//                 <div className=" flex ">
//                     <input 
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border-t text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all border-l border-b w-full border-gray-300 p-3 rounded-l-md"
//                     />

//                     <button type="submit" className="  border-t border-r border-b bg-white text-black font-semibold rounded-r-md border-2 border-white p-2">Subscribe</button>
//                 </div>

//             </div>

//             <div>
//                 <h2 className="font-semibold text-lg mb-4 text-white">Shop</h2>
//                 <div className='flex gap-2 flex-col'>
//                     <div>
//                         <Link to="#" className="text-sm text-white  hover:text-gray-500">Men's Top Wear</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">Women's Top Wear</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">Men's Bottom Wear</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">Women's Bottom Wear</Link>
//                     </div>
//                 </div>
//             </div>



//             <div>
//                 <h2 className="font-semibold text-lg mb-4 text-white">Support</h2>
//                 <div className='flex gap-2 flex-col'>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">Contact Us</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">About Us</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">FAQs Us</Link>
//                     </div>
//                     <div>
//                         <Link to="#" className="text-sm text-white hover:text-gray-500">Features </Link>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <h3 className="text-lg  font-semibold mb-4 text-white">Follow Us</h3>
//                 <div className="flex items-center space-x-4 mb-6">
//                     <a 
//                         href="https://www.facebook.com" 
//                         target="_blank" 
//                         className="  text-white hover:text-gray-500"
//                     >
//                         <TbBrandMeta className="w-5 h-5 font-bold" />
//                     </a>

//                     <a 
//                         href="https://www.facebook.com" 
//                         target="_blank" 
//                         className=" text-white hover:text-gray-500"
//                     >
//                         <IoLogoInstagram className="w-5 h-5 font-bold" />
//                     </a>

//                     <a 
//                         href="https://www.facebook.com" 
//                         target="_blank" 
//                         className=" text-white hover:text-gray-500"
//                     >
//                         <RiTwitterXLine className="w-5 h-5 font-bold" />
//                     </a>

//                 </div>
//                 <p className="text-white mb-1">Call Us</p>
//                 <p>
//                     <FaPhoneAlt className="inline-block text-white hover:text-gray-500" /> <span className="text-white hover:text-gray-500">+91 (700) 760 4999</span>
//                 </p>
//             </div> 


//         </div>
//         {/* Footer Bottom */}
//         <div className="container  mt-4 flex justify-center">
//             <p className="text-sm tracking-tighter">
//                 <FaRegCopyright className=" inline-block mr-2 w-5 h-5 text-white" /><span className="text-white">2025, CompileTab. All Rights Reserved.</span>
//             </p>

//         </div>


//     </footer>
//   )
// }

// export default Footer