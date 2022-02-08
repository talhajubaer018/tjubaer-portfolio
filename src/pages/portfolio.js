import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import Link from 'next/link';

const Portfolio = () => {

  return (
    <div className='max-w-[1078px] w-[90%] mx-auto'>
      <Header />
      <div className='py-4'>
        <h2 className='text-center services_heading my-8'>Portfolio</h2>
        <div className='grid grid-cols-2 gap-x-12 gap-y-12'>
          <Image src='/snekkerpimp-mockup.png' layout='responsive' objectFit='contain' width={1080} height={810} />
          <div className='pt-12'>
            <h2 className='relative inline-block portfolio font-bold'>Sneakerpimp</h2>
            <h5 className='inline-block ml-4 bg-customTeal-700 text-white p-1 rounded'>2021</h5>
            <h5 className='text-customGray-400 mt-8'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</h5>
            <button className=' mt-12'>
              <Link href='https://sneakerpimpbd.co/' as='https://sneakerpimpbd.co/'>
                <a className={'cursor-pointer font-bold text-xl border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-colors duration-300 px-8 py-4 rounded-full'}>Visit Site</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;
