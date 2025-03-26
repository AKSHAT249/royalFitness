import React from 'react';
import WhyJoinLogo from "../assets/why-join-logo.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const WhyJoinHero = () => {
  return (
    <div className='w-full'>
    <div className="w-full  relative ">
            <img src={WhyJoinLogo} alt="whyJoin" className='' />
            <div className='absolute inset-0 flex justify-center items-center p-12 '>
                <div className="w-full flex flex-col justify-center items-center gap-1  lg:gap-10">
                    <h1 className="text-sm lg:text-5xl text-white font-bold">Why Join <span className='text-skyblue'>Royal</span> Fitness?</h1>

                    <p className='text-white text-[8px] w-full lg:w-1/2  lg:text-lg text-center'>
                    Royal Fitness gym membership offers a comprehensive fitness journey to every individual. 
                    Leverage 24*7 access, supportive community, state-of-the-art equipment, certified trainers , 
                    and flexibility. Take a step forward toward fitness, anytime.
                    </p>
        
                    <button className="flex items-center hover:bg-blue-900 hover:border-blue-900 border-1 lg:border-2 px-2  lg:px-5  lg:py-2 rounded-full gap-2">
                        <p className="text-[8px] lg:text-lg text-skyblue font-semibold z-10  ">TOUR A GYM</p>
                        <MdOutlineSlowMotionVideo className='w-4 h-4  lg:w-6 lg:h-6 text-skyblue z-10 ' />
                    </button>

                </div>
                    
                

            </div>

        </div>
        </div>
  )
}

export default WhyJoinHero