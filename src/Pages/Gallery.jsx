import React from 'react';
import YogaImage from "../assets/yoga.jpg";

const Gallery = () => {
  return (
    <div className='w-full bg-black flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-bold text-center mt-10 pt-[24px] text-skyblue ">GALLERY</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[24px] mt-12 w-full  gap-4'>
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-full rounded-2xl object-cover lg:row-span-2' />
            <img src={YogaImage} alt="Image" className='w-full h-full rounded-2xl object-cover lg:col-span-2 lg:row-span-2' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover lg:col-span-2' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover lg:col-span-2' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            {/* <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' />
            <img src={YogaImage} alt="Image" className='w-full h-[400px] rounded-2xl object-cover' /> */}

        </div>
    </div>
  )
}

export default Gallery