import React from 'react'

const WhyJoinMembershipOffers = () => {
  return (
    <div className='w-full bg-black flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-bold text-center text-white pt-[50px] ">Royal Fitness Gym Membership Offers</h1>
        <div className="flex flex-col lg:flex-row w-1/2  lg:w-2/3  items-center justify-between mt-12 gap-10">
                <div className="p-10 border-2 border-skyblue rounded-2xl  ">
                    <h1 className='text-skyblue text-2xl font-bold pb-10'>Equipment</h1>
                    <div className="flex flex-col justify-center gap-4">
                        <p className='text-white text-lg'>Treadmills</p>
                        <p className='text-white text-lg'>Exercise Cycles</p>
                        <p className='text-white text-lg'>Stair Climbers</p>
                        <p className='text-white text-lg'>Rowing Machines</p>
                        <p className='text-white text-lg'>Free Weights</p>
                        <p className='text-white text-lg'>Synergy 360 Systems</p>
                        <p className='text-white text-lg'>Cable Crossovers</p>
                        <p className='text-white text-lg'>Kettlebells</p>
                        <p className='text-white text-lg'>Amt Crosstrainers</p>
                
                    </div>

                </div>

                <div className="p-10 border-2 border-skyblue rounded-2xl  ">

        
                    <h1 className='text-skyblue text-2xl font-bold pb-10'>Lifestyle</h1>
                    <div className="flex flex-col justify-center gap-4">
                        <p className='text-white text-lg'>Personal Training</p>
                        <p className='text-white text-lg'>Team Workouts</p>
                        <p className='text-white text-lg'>Tanning</p>
                        <p className='text-white text-lg'>Adaptive Motion Trainers</p>
                        <p className='text-white text-lg'>Spinning Cycles & Classes</p>
                        <p className='text-white text-lg'>Zumba Classes</p>
                        <p className='text-white text-lg'>Cardio Classes</p>
                        <p className='text-white text-lg'>Body Conditioning Classes</p>
                        <p className='text-white text-lg'>Yoga Classes</p>
                        
                
                        
                
                    </div>

                </div>

                <div className="p-10 border-2 border-skyblue rounded-2xl  ">
                    <h1 className='text-skyblue text-2xl font-bold pb-10'>Services</h1>
                    <div className="flex flex-col justify-center gap-4">
                        <p className='text-white text-lg'>24-Hour Access</p>
                        <p className='text-white text-lg'>24-Hour Security</p>
                        <p className='text-white text-lg'>Convenient Parking</p>
                        <p className='text-white text-lg'>Anywhere Gym Access</p>
                        <p className='text-white text-lg'>Private Restrooms</p>
                        <p className='text-white text-lg'>Private Showers</p>
                        <p className='text-white text-lg'>Wellness Programs</p>
                        <p className='text-white text-lg'>Cardio Tvs</p>
                        <p className='text-white text-lg'>TVs And HDTVs</p>

                    </div>

                </div>
        </div>

        <h1 className='text-center text-white text-md mt-12'>*Each of our gyms is unique to the community it serves. Contact your local gym for details.</h1>

        <button className="text-white bg-skyblue px-6 py-2 rounded-2xl mt-12 hover:bg-blue-900">
            Enquiry About Gym Membership Now
        </button>
        
    </div>
  )
}

export default WhyJoinMembershipOffers