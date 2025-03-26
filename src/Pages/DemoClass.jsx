import React from 'react';
import PhysicalFitness from "../assets/physical-fitness.jpg";

const DemoClass = () => {
  return (
    <section id="about">
        <div className="w-full p-12 text-center md:text-left">
            <div className="flex md:flex-row flex-col gap-8 items-center justify-between">
                <div className="p-8">
                    <img src={PhysicalFitness} alt="Physical Fitness" className="w-full h-[400px] object-cover rounded-2xl" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-4xl text-white font-bold'>Why Choose <span className='text-[#08C2FF]'>Us?</span></h1>
                    <p className='text-md text-white'>Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.</p>
                    <p className='text-md text-white'>Unlock your potential with our expert Personal Trainers.</p>
                    <p className='text-md text-white'>Elevate your fitness with practice sessions.</p>
                    <p className='text-md text-white'>We provide Supportive management, for your fitness success.</p>
                    <button className="text-md text-white bg-[#08C2FF] font-bold px-6 py-2 rounded-lg hover:bg-[#006BFF] hover:ring-4">Book Your Free Class</button>
                </div>
                

            </div>
        </div>
    </section>
  )
}
 
export default DemoClass