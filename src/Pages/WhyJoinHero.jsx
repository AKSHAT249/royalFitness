import React from 'react';
import WhyJoinLogo from "../assets/why-join-logo.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const WhyJoinHero = () => {
  return (
    <div className='w-full'>
    <div className="w-full relative flex">
            <img src={WhyJoinLogo} alt="whyJoin"  />
            <div className='absolute inset-0 flex justify-center items-center p-12 '>
                <div className="w-2/3 flex flex-col justify-center items-center gap-4 lg:gap-10">
                    <h1 className="text-2xl  lg:text-5xl text-white font-bold">Why Join <span className='text-skyblue'>Royal</span> Fitness?</h1>

                    <p className='text-white text-sm w-full  lg:text-lg text-center'>
                    Royal Fitness gym membership offers a comprehensive fitness journey to every individual. 
                    Leverage 24*7 access, supportive community, state-of-the-art equipment, certified trainers , 
                    and flexibility. Take a step forward toward fitness, anytime.
                    </p>
        
                    <button className="flex items-center hover:bg-blue-900 hover:border-blue-900  border-2 px-5 py-2 rounded-full gap-2">
                        <p className="text-lg text-skyblue font-semibold z-10  ">TOUR A GYM</p>
                        <MdOutlineSlowMotionVideo className='w-6 h-6 text-skyblue z-10 ' />
                    </button>

                </div>
                    
                

            </div>

        </div>
        </div>
  )
}

export default WhyJoinHero