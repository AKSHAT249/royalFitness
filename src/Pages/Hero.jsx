import React from 'react';
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-black h-full ">
        <div className="pt-6 w-full min-h-screen relative ">
            
            <div className='absolute inset-0 flex flex-col lg:flex-row items-center justify-evenly  px-6 '>
                <div className="w-full mx-16">
                    <h2 className='text-white text-[60px] font-bold'>Build Your</h2>
                    <h2 className='text-white text-[60px] font-bold'>Dream Physique</h2>
                    <h2 className=' text-[60px] font-bold text-[#08C2FF]'>Weighlifting</h2>
                    <p className='text-white text-sm '>Lorem ipsum dolor sit, bus earum, aliquam ispa repellat iusto esse laudantium animi vite latest version</p>
                    <button className='text-white text-xl bg-[#08C2FF] mt-6 px-6 py-2 rounded-lg font-bold'>Join Us</button>
                </div>
                <div className="w-full  mr-8 sm:px-[24px] hidden lg:block ">
                    <img src={HeroImage} alt="Hero" className="w-full h-full object-cover  rounded-tl-[60px] " />
                </div>    

            </div>
            
        </div>
    </section>
  )
}

export default Hero;