import React from 'react'

const Training = () => {
  return (
    <div className='w-full bg-black flex flex-col justify-center items-center'>
        <div className='w-full p-10 flex flex-col gap-8'>
            <h1 className="text-2xl font-bold text-center text-skyblue pt-[50px] ">Customized Workout Plans for Every Individual</h1>
            <p className='text-white text-md text-center'>
            Whether you’re a beginner or a fitness enthusiast, our expert trainers lead groups as well as personalized, effective workout. 
            The workout routines are designed using practical knowledge and expertise to help you achieve your fitness goals and build a community. 
            </p>

            <div className='flex flex-col lg:flex-row w-full gap-8 mt-12 justify-center items-center'>
                <div className="border-2 w-2/3 lg:w-full p-10 border-skyblue rounded-2xl flex flex-col gap-10">
                    <h1 className='text-skyblue font-bold text-2xl '>FITNESS CONSULTATION</h1>
                    <p className='text-white text-md leading-7'>Gain confidence for your fitness journey with our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan.</p>
                </div>

                <div className="border-2  w-2/3 lg:w-full p-10 border-skyblue rounded-2xl flex flex-col gap-10">
                    <h1 className='text-skyblue font-bold text-2xl '>GROUP FITNESS </h1>
                    <p className='text-white text-md leading-7'>Anytime Fitness offers instructor-led dynamic and engaging group classes. These group classes help individuals gain confidence and build a social aspect that keeps them mentally fit. </p>
                </div>

                <div className="border-2 w-2/3 lg:w-full p-10 border-skyblue rounded-2xl flex flex-col gap-10">
                    <h1 className='text-skyblue font-bold text-2xl '>PERSONALIZED TRAINING</h1>
                    <p className='text-white text-md leading-7'>At Anytime Fitness, we offer personalized training for every specific fitness goal. Our expert certified trainers are here to help you every step of the way, making your journey impactful.</p>
                </div>


            </div>

        </div>
        

    </div>
  )
}

export default Training