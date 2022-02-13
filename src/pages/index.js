import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

import { useRouter } from 'next/router';

const Home = ({ isMobile }) => {
  const router = useRouter()


  return (
    <div className='text-white '>
      <section className='next_start '>
        <div className='max-w-[1200px] w-[90%] mx-auto'>
          <Header />
          <div className='py-20'>
            <div>
              <h2 className='font-bold'>Websites Done Right.</h2>
              <h4 className='py-4'>I enjoy building everything from small business websites to rich interactive websites. I specialize in front end web development and converting existing designs to web pages. </h4>
            </div>
            <div className='py-12 text-center md:text-left'>
              <button className='border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-colors duration-300 p-4 rounded-full'>
                <Link href='/portfolio' as='/portfolio'>
                  <a className={'cursor-pointer p-4 font-bold text-xl'}>View My Works</a>
                </Link>
              </button>
              {/* <button className='border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-colors duration-300 p-4 rounded-full ml-8'>
                <Link href='/contact' as='/contact'>
                  <a className={'cursor-pointer p-4 font-bold text-xl'}>Contact Me</a>
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 text-black max-w-[1200px] w-[90%] mx-auto'>
        <div className='text-customTeal-700'>
          <h2 className='services_heading text-customGray-900 font-bold'>ABOUT</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-12 py-12'>
          <div className='text-center '>
            <div className='flex items-center justify-center mb-4 bg-customTeal-700 w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-white mt-2 mb-2' size='2x' icon={['fas', 'desktop']} />
            </div>
            <h4 className='text-customGray-800 mb-4 font-bold'>Web Design + Development</h4>
            <p>Clean, modern designs - optimized for performance, search engines, and converting users to customers.</p>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4 bg-customTeal-700 w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-white mt-2 mb-2' size='2x' icon={['fas', 'eye']} />
            </div>
            <h4 className='text-customGray-800 mb-4 font-bold'>Converting Design to Website</h4>
            <p>Converting your own design to a website with the latest features.</p>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4 bg-customTeal-700 w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-white mt-2 mb-2' size='2x' icon={['fas', 'mobile-alt']} />
            </div>
            <h4 className='text-customGray-800 mb-4 font-bold'>Responsive Design</h4>
            <p>A responsive design which makes your website accessible to all users, regardless of their device.</p>
          </div>
        </div>
      </section>
      <section className='pb-20 max-w-[1200px] w-[90%] mx-auto'>
        <div className='text-customTeal-700 mb-8'>
          <h2 className='services_heading text-customGray-900 font-bold'>SKILLS</h2>
        </div>
        {
          skills.map((skill) => (
            <div key={skill.id} className='max-w-[900px] mx-auto flex text-customGray-800 justify-center mb-4'>
              <div className='bg-customTeal-700 py-1 text-white w-[150px] text-center'>{skill.name}</div>
              <div className='flex w-full'>
                <div style={{width: `${skill.size}`}} className={`bg-customTeal-800 py-1 text-white`}></div>
                <div style={{width: `${skill.textSize * skill.multiplier * (isMobile ? 0.35 : 1) + 'px'}`}} className={` text-right pr-0 md:pr-6 bg-customGray-100 py-1 text-black`}>{skill.size}</div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
};

Home.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent'] // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
  }

  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
  console.log(isMobile)

  return { isMobile }
}

const skills = [
  {
    id: 1,
    name: 'HTML',
    size: '90%',
    textSize: '90',
    multiplier: '1'
  },
  {
    id: 2,
    name: 'CSS',
    size: '90%',
    textSize: '90',
    multiplier: '1'
  },
  {
    id: 3,
    name: 'JavaScript',
    size: '80%',
    textSize: '90',
    multiplier: '2'
  },
  {
    id: 4,
    name: 'React',
    size: '80%',
    textSize: '90',
    multiplier: '2'
  },
  {
    id: 5,
    name: 'Nextjs',
    size: '75%',
    textSize: '90',
    multiplier: '2.5'
  },
  {
    id: 6,
    name: 'Nodejs',
    size: '65%',
    textSize: '90',
    multiplier: '3.5'
  },
  {
    id: 7,
    name: 'UI Design',
    size: '70%',
    textSize: '90',
    multiplier: '3'
  },
  {
    id: 8,
    name: 'Photoshop',
    size: '60%',
    textSize: '90',
    multiplier: '4'
  },
  {
    id: 9,
    name: 'Illustrator',
    size: '70%',
    textSize: '90',
    multiplier: '3'
  },
]

export default Home;
