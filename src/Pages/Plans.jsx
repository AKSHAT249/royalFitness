import React from 'react'

const Plans = () => {
  return (
    <section id="pricing">
        <div className='w-full p-8 bg-black-500'>
            <h1 className='text-white text-[50px] font-bold mb-6 text-center'>Our <span className='text-[#08C2FF]'>Plans</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border-2 border-[#08C2FF] rounded-2xl bg-black p-12 hover:ring-4 duration-300 hover:translate-z-50' >
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-4xl font-bold'>BASIC</h2>
                        <h2 className='text-[#08C2FF] text-4xl font-bold'>$100/Month</h2>
                        <ul className="flex flex-col gap-2 mt-6">
                            <li className='text-white text-md'> ● Smart workout plan</li>
                            <li className='text-white text-md'>  ● At home workouts</li>
                        </ul>
                        
                        <button className='text-xl font-bold text-white px-4 py-2 bg-[#08C2FF] rounded-2xl mt-6 '>Join Now</button>
                    </div>
                    
                </div>

                <div className='border-2 border-[#08C2FF] rounded-2xl bg-black p-8 hover:ring-4' >
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-4xl font-bold'>PRO</h2>
                        <h2 className='text-[#08C2FF] text-4xl font-bold'>$150/Month</h2>
                        <ul className="flex flex-col gap-2 mt-6">
                            <li className='text-white text-md'> ● Pro GYMs</li>
                            <li className='text-white text-md'> ● Smart workout plans</li>
                            <li className='text-white text-md'>  ● At home workouts</li>
                        </ul>
                        
                        <button className='text-xl font-bold text-white px-4 py-2 bg-[#08C2FF] rounded-2xl mt-6 '>Join Now</button>
                    </div>
                    
                </div>


                <div className='border-2 border-[#08C2FF] rounded-2xl bg-black p-8 hover:ring-4' >
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-4xl font-bold'>PREMIUM</h2>
                        <h2 className='text-[#08C2FF] text-4xl font-bold'>$300/Month</h2>
                        <ul className="flex flex-col gap-2 mt-6">
                            <li className='text-white text-md'> ● Elite GYMs & Classes</li>
                            <li className='text-white text-md'>  ● Pro GYMs</li>
                            <li className='text-white text-md'> ● Smart workout plan</li>
                            <li className='text-white text-md'>  ● At home workouts</li>
                            <li className='text-white text-md'> ● Personal Training</li>
                            
                        </ul>
                        
                        <button className='text-xl font-bold text-white px-4 py-2 bg-[#08C2FF] rounded-2xl mt-6 '>Join Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans