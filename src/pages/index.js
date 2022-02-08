import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()

  return (
    <div className='text-white '>
      <div className='next_start '>
        <div className='max-w-[1078px] w-[90%] mx-auto'>
          <Header />
          <div className='py-20'>
            <div>
              <h2 className='font-bold'>Websites Done Right.</h2>
              <h4 className='py-4'>I enjoy building everything from small business websites to rich interactive websites. I specialize in front end web development and converting existing designs to web pages. </h4>
            </div>
            <div className='py-12'>
              <button className='bg-customTeal-700 p-4 rounded-full'>
                <Link href='/portfolio' as='/portfolio'>
                  <a className={'cursor-pointer p-4 font-bold text-xl'}>Check My Portfolio</a>
                </Link>
              </button>
              <button className='bg-customTeal-700 p-4 rounded-full ml-8'>
                <Link href='/contact' as='/contact'>
                  <a className={'cursor-pointer p-4 font-bold text-xl'}>Contact Me</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 text-black max-w-[1078px] w-[90%] mx-auto'>
        <div className='text-customTeal-700'>
          <h2 className='services_heading text-black'>Services</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-12 py-12'>
          <div className='text-center '>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'desktop']} />
            <h4 className='text-customTeal-700 mb-4 font-bold'>Web Design + Development</h4>
            <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'eye']} />
            <h4 className='text-customTeal-700 mb-4 font-bold'>Converting Design to Website</h4>
            <p>Converting your own design to a website with the latest features.</p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'mobile-alt']} />
            <h4 className='text-customTeal-700 mb-4 font-bold'>Responsive Design</h4>
            <p>A responsive design which makes your website accessible to all users, regardless of their device.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
