import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center first-letter:h-full bg-black text-white w-48'>
      <div className='relative'>
        <Image src='/profile.jpg' layout='intrinsic' width={200} height={200} />
        <div className='playfair text-2xl p-2 absolute bottom-2 bg-teal-400 text-white w-full text-center bg-opacity-70'>Talha Jubaer</div>
      </div>
      <div className='font-light p-2 w-full te flex flex-col gap-y-4'>
        <div className='border-b-1 border-white'>HOME</div>
        <div>ABOUT ME</div>
        <div>RESUME</div>
        <div>PORTFOLIO</div>
        <div>CONTACT</div>
      </div>
    </div>
  )
};

export default Sidebar;
