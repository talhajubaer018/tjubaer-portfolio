import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

import { useRouter } from 'next/router';

const Home = ({ isMobile }) => {
  const router = useRouter()


  return (
    <div className='text-customFontColor-light '>
      <section className='next_start '>
        <div>
          <div className='max-w-[1200px] w-[90%] mx-auto'>
            <Header />
          </div>
        </div>
        <div className='sm:max-w-[768px] md:max-w-[900px] lg:max-w-[1200px] w-[90%] mx-auto'>
          <div className='py-20'>
            <h4 className='text-customTeal-700'>Hi, my name is</h4>
            <h1 className='font-bold'>Talha Jubaer</h1>
            <h1 className='font-bold text-customFontColor-dark'>I build things for the web.</h1>
            <h3 className='text-customFontColor-dark'>I'm a fullstack developer specializing in building exceptional pixel perfect responsive websites.</h3>
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
          <h2 className='services_heading text-customFontColor-light font-bold'>ABOUT ME</h2>
        </div>
        <div className='text-customFontColor-light py-6'>
          <p>Hi, my name is Talha and I enjoy creating new and unique websites for my clients. My interest in web development started in 2013 with HTML, CSS and Dreamweaver by making simple websites. Fast forward to today, I've expanded my skills to create unique and perfectly designed websites.</p>
          <h5 className='font-bold my-4'>Here are some technologies I've been using recently:</h5>
          <div className='grid grid-cols-2 items-center justify-center'>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>JavaScript (ES6+)</p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>React</p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>Nextjs</p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>Nodejs</p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>Mongodb</p>
            </div>
            <div className='flex items-center'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2 mr-2' size='1x' icon={['fas', 'caret-right']} />
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8  gap-y-12 py-12'>
          <div className='text-center '>
            <div className='flex items-center justify-center mb-4 w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2' size='3x' icon={['fas', 'code']} />
            </div>
            <h4 className='text-customFontColor-light mb-4 font-bold'>Fullstack Developer</h4>
            <p className='text-customFontColor-dark'>I like to code things from scratch and enjoy bringing ideas to life in the web.</p>
            <div className='text-customFontColor-light flex flex-col py-4 md:py-10 items-center justify-center'>
              <p className='font-bold text-customTeal-700 mb-2'>Languages I speak</p>
              <p>HTML, CSS, JavaScript, Sass, Less</p>
            </div>
            <div className='text-customFontColor-light flex flex-col py-4 md:py-10 items-center justify-center'>
              <p className='font-bold text-customTeal-700 mb-2'>Frameworks I use</p>
              <p>React, Nextjs, Nodejs, Express, Mongodb, Bootstrap, TailwindCSS, Material-ui</p>
            </div>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4  w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2' size='3x' icon={['fas', 'file-code']} />
            </div>
            <h4 className='text-customFontColor-light mb-4 font-bold'>UI/UX Developer</h4>
            <p className='text-customFontColor-dark'>I can convert your own design to a website with the latest features.</p>
            <div className='text-customFontColor-light flex flex-col  py-4 md:py-10 items-center justify-center'>
              <p className='font-bold text-customTeal-700 mb-2'>Tools I use</p>
              <p>Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator</p>
            </div>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4  w-[100px] h-[100px] rounded-full mx-auto'>
              <FontAwesomeIcon className='text-customTeal-700 mt-2 mb-2' size='3x' icon={['fas', 'mobile-alt']} />
            </div>
            <h4 className='text-customFontColor-light mb-4 font-bold'>Responsive Websites</h4>
            <p className='text-customFontColor-dark'>A responsive design which makes your website accessible to all users, regardless of their device.</p>
            <div className='text-customFontColor-light flex flex-col py-4 md:py-10 items-center justify-center'>
              <p className='font-bold text-customTeal-700 mb-2'>Frameworks/Tools I use</p>
              <p>Bootstrap, TailwindCSS, Material-ui, Scss, Custom CSS</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='pb-20 max-w-[1200px] w-[90%] mx-auto'>
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
      </section> */}
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
