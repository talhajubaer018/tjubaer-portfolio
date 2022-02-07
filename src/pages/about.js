import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const About = () => {
  useEffect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='max-w-[1024px] w-[90%] mx-auto'>
      <h2 className='playfair my-8 text-customTeal-700 font-bold border-b-1 border-dotted border-customGray-400'>About Me.</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2/1 gap-x-16 gap-y-8'>
        <div>
          <h3 className='playfair font-bold mb-4'>Web Developer</h3>
          <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
        </div>
        <div>
          <h3 className='playfair font-bold mb-4'>Personal Information</h3>
          <div>
            <div className='flex mb-2'>
              <h5 className='font-bold border-b-2 border-customTeal-700'>Name:</h5>
              <h5 className='ml-2'>Talha Jubaer</h5>
            </div>
            <div className='flex mb-2'>
              <h5 className='font-bold border-b-2 border-customTeal-700'>Age:</h5>
              <h5 className='ml-2'>26 Years</h5>
            </div>
            <div className='flex mb-2'>
              <h5 className='font-bold border-b-2 border-customTeal-700'>Residence:</h5>
              <h5 className='ml-2'>Dhaka, Bangladesh</h5>
            </div>
            <div className='flex mb-2'>
              <h5 className='font-bold border-b-2 border-customTeal-700'>Email:</h5>
              <h5 className='ml-2'>talhajubaer018@gmail.com</h5>
            </div>
            <div className='flex mb-2'>
              <h5 className='font-bold border-b-2 border-customTeal-700'>Freelance:</h5>
              <h5 className='ml-2'>Available</h5>
            </div>
            <div className='mt-8'>
              <button className='px-4 py-2 border-2 border-customTeal-700 hover:bg-customTeal-700 hover:text-white transition-all duration-300'>Download Resume</button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <div>
          <h3 className='services_heading'>Services</h3>
        </div>
        <div className='grid grid-cols-3 mt-8'>
          <div className='text-center'>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'desktop']} />
            <h5>Web Development</h5>
            <p>Lorem</p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'eye']} />
            <h5>Web Design</h5>
            <p>Lorem</p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon className='text-customTeal-700 mb-2' size='2x' icon={['fas', 'mobile-alt']} />
            <h5>Responsive Design</h5>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
