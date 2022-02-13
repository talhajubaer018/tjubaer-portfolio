import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import Link from 'next/link';

const Portfolio = () => {

  return (
    <div>
      <div className='bg-black bg-opacity-80 text-white'>
        <div className='max-w-[1200px] w-[90%] mx-auto'>
          <Header />
        </div>
      </div>
      <div className='max-w-[1200px] w-[90%] mx-auto'>
        <div className='py-4'>
          <h2 className='text-center services_heading my-8'>Portfolio</h2>
          {
            portfolioItems.map(item => (
              <div key={item.id} className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-20 py-0 md:py-8'>
                <Image src={item.image_src} layout='responsive' objectFit='contain' width={1080} height={810} priority/>
                <div className='pt-0 sm:pt-12 text-center md:text-left mr-8 md:mr-0'>
                  <h2 className='relative inline-block portfolio font-bold text-customGray-900'>{item.name}
                    <h5 className='ml-4 bg-customTeal-700 absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 text-white p-1 rounded'>{item.year}</h5>
                  </h2>
                  <div>
                    <h5 className='block text-customGray-800 mt-4'>{item.description}</h5>
                  </div>
                  <button className='block mx-auto md:mx-0'>
                    <Link href={item.link} as={item.link}>
                      <a className={'block mt-4 md:mt-12 cursor-pointer font-bold text-customGray-900 text-xl border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-colors duration-300 px-8 py-4 rounded-full'}>Visit Site</a>
                    </Link>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
    </div>
  )
};

const portfolioItems = [
  {
    id: 1,
    image_src: '/snekkerpimp-mockup.png',
    name: 'Sneakerpimp',
    year: '2021',
    description: 'An ecommerce store for selling apparel products locally in Bangladesh.',
    link: 'https://sneakerpimpbd.co/'
  },
  {
    id: 2,
    image_src: '/mark-colcolough-mockup.png',
    name: 'Mark Colcolough',
    year: '2021',
    description: 'A personal website for a specialized therapist name Mark Colcolough.',
    link: 'https://mark-colcolough.vercel.app/'
  },
  {
    id: 3,
    image_src: '/werder-vigano-mockup.png',
    name: 'Werder Vigano',
    year: '2020',
    description: 'A platform for specialized lawyers representing clients all over the world.',
    link: 'https://www.werdervigano.ch/'
  },
  {
    id: 4,
    image_src: '/bunking-mockup.png',
    name: 'Order Bun King',
    year: '2020',
    description: 'A website for a local bakery located in the UK.',
    link: 'https://order-bun-king.vercel.app/'
  },
  {
    id: 5,
    image_src: '/spg-mockup.png',
    name: 'SPG',
    year: '2019',
    description: 'A website for a marketing analysis offering expert business advice.',
    link: 'https://spg-website.vercel.app/'
  },
]

export default Portfolio;
