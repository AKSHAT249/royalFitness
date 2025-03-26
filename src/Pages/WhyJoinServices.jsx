import React from 'react';
import SupportImage from "../assets/support.jpg";
import TrainingImage from "../assets/3d-cartoon-fitness-man.jpg";
import CommunityTrainerImage from "../assets/trainer.jpg";
import Gym from "../assets/gym.jpg";

const WhyJoinServices = () => {
  return (
    <div className='w-full bg-black flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-bold text-center text-white pt-[50px] ">WHY CHOOSE ROYAL FITNESS GYM MEMBERSHIP</h1>
        <div className="flex flex-col w-1/2  lg:w-2/3 justify-center items-center mt-12 gap-10">
            <div className='flex lg:flex-row flex-col items-center justify-around gap-10'>
                <img src={SupportImage} alt="support" className='w-[400px] h-[400px] object-cover rounded-2xl' />
                <div className='w-full flex flex-col gap-8'>
                    <h2 className='text-4xl text-skyblue font-bold'>Support</h2>
                    <p className="text-white text-md leading-8">
                        Anytime Fitness offers comprehensive support to all gym members. From personalized training to regular guidance, our certified trainers are here to assist you in fulfilling your fitness goals. It is the perfect place for starting a journey towards a healthy lifestyle.
                    </p> 
                </div>
                
            </div>

            <div className='flex lg:flex-row-reverse flex-col items-center justify-around gap-10'>
                <img src={TrainingImage} alt="support" className='w-[400px] h-[400px] object-cover rounded-2xl' />
                <div className='w-full flex flex-col gap-8'>
                    <h2 className='text-4xl text-skyblue font-bold'>Tools & Training</h2>
                    <p className="text-white text-md leading-8">
                        With avant-garde equipment incorporating cardio machines, free weights, and strength training, you’ll get everything you need to pursue a balanced workout routine. Anytime Fitness has dedicated space for group classes, functional training, and personal training ensuring that there’s something for everyone.
                    </p>  
                </div>
            </div>


            <div className='flex lg:flex-row flex-col items-center justify-around gap-10'>
                <img src={CommunityTrainerImage} alt="support" className='w-[400px] h-[400px] object-cover rounded-2xl' />
                <div className='w-full flex flex-col gap-8'>
                    <h2 className='text-4xl text-skyblue font-bold'>Community</h2>
                    <p className="text-white text-md leading-8">
                        Anytime Fitness is not just a gym- it’s a supportive community of like-minded individuals who are here to give you motivation whenever you need it. We encourage every member to exchange tips and encouragement.
                    </p> 
                </div>
            </div>


        </div>
        <img src={Gym} alt="gym" className='w-full h-[800px] object-cover mt-24' />
    </div>
  )
}

export default WhyJoinServices