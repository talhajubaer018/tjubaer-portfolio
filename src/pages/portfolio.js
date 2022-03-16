import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import Link from 'next/link';

const Portfolio = () => {

  return (
    <div className='text-customFontColor-light'>
      <div>
        <div className='max-w-[1200px] w-[90%] mx-auto'>
          <Header />
        </div>
      </div>
      <div className='max-w-[1200px] w-[90%] mx-auto'>
        <div className='pt-4 pb-12'>
          <h2 className='text-center services_heading my-8'>Portfolio</h2>
          {
            portfolioItems.map(item => (
              <div key={item.id} className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-20 py-0 md:py-8'>
                <Image src={item.image_src} layout='responsive' objectFit='contain' width={1080} height={810} priority/>
                <div className='pt-0 sm:pt-12 text-center md:text-left mr-8 md:mr-0'>
                  <h2 className='relative inline-block portfolio font-bold '>{item.name}
                    <h5 className='ml-4 bg-customTeal-700 absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 text-white p-1 rounded'>{item.year}</h5>
                  </h2>
                  <div>
                    <h5 className='block text-customFontColor-dark mt-4'>{item.description}</h5>
                  </div>
                  <div className='my-4'>
                    <h4>{item.tools}</h4>
                  </div>
                  <button className='block mx-auto md:mx-0'>
                    <Link href={item.link} as={item.link}>
                      <a target="_blank" rel="noopener noreferrer" className={'block mb-20 mt-4 md:mt-12 cursor-pointer font-bold text-xl border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-colors duration-300 px-8 py-4 rounded-full'}>Visit Site</a>
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
    id: 6,
    image_src: '/proshop.png',
    name: 'Proshop',
    year: '2022',
    description: 'An ecommerce store for selling with complete store functionality.',
    tools: 'React, React-Bootstrap, Nodejs, Express, Mongodb, Mongoose, heroku, Css',
    link: 'https://proshopapp1994.herokuapp.com/'
  },
  {
    id: 1,
    image_src: '/sneaker-pimp.png',
    name: 'Sneakerpimp',
    year: '2021',
    description: 'An ecommerce store for selling apparel products locally in Bangladesh.',
    tools: 'React, Bootstrap, React-Router',
    link: 'https://sneakerpimpbd.co/'
  },
  {
    id: 2,
    image_src: '/mark-colcolough.png',
    name: 'Mark Colcolough',
    year: '2021',
    description: 'A personal website for a specialized therapist name Mark Colcolough.',
    tools: 'Nextjs, TailwindCss, Adobe XD',
    link: 'https://mark-colcolough.vercel.app/'
  },
  {
    id: 3,
    image_src: '/werder-vigano.png',
    name: 'Werder Vigano',
    year: '2020',
    description: 'A platform for specialized lawyers representing clients all over the world.',
    tools: 'HTML, CSS, JavaScript, Wordpress',
    link: 'https://www.werdervigano.ch/'
  },
  {
    id: 4,
    image_src: '/bunking.png',
    name: 'Order Bun King',
    year: '2020',
    description: 'A website for a local bakery located in the UK.',
    tools: 'HTML, CSS, JavaScript, Bootstrap',
    link: 'https://order-bun-king.vercel.app/'
  },
  {
    id: 5,
    image_src: '/spg.png',
    name: 'SPG',
    year: '2019',
    description: 'A website for a marketing analysis offering expert business advice.',
    tools: 'HTML, CSS, JavaScript, Bootstrap',
    link: 'https://spg-website.vercel.app/'
  },
]

export default Portfolio;
