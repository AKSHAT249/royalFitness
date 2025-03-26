import React from 'react';
// import Hero from "../assets/hero.jpg";
import { services } from '../constants';

const Services = () => {
  return (
    <section id="services" className="bg-black  ">
        <div className="pt-6  w-full   ">
            <h1 className='text-white text-[50px] font-bold mb-6 text-center'>Our <span className='text-[#08C2FF]'>Services</span></h1>
            
        </div>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 lg:px-8 gap-8 ">
                {
                    services.map((service, index) => (
                        <div key={index} className="border-2 translate  border-[#08C2FF] p-3 rounded-[30px] hover:ring-4 cursor-pointer">
                            <img src={service.image} alt={service.title} className="w-full h-[300px] object-cover p-8 rounded-2xl " />
                            <h1 className="text-2xl mb-6 text-white text-center font-bold">{service.title}</h1>
                        </div>
                    ))
                }
            
            
        </div>
        
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 md:gap-4 lg:gap-8 p-8'>
                {
                    services.map((service, index) => (
                        <div key={index} className=" h-[50px] object-contain">
                            <img src={service.image} alt={service.title} />
                            <h1>{service.title}</h1>
                        </div>
                    ))
                }


            </div> 
        */}
    </section>
  )
}

export default Services