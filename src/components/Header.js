import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const hamburger = useRef(null)
  const sideMenu = useRef(null)

  const navToggle = () => {
    hamburger.current.classList.toggle('open')
    sideMenu.current.classList.toggle('open')
  }

  const router = useRouter()
  useEffect(() => {

    const handleClick = (e) => {
      if (sideMenu.current && hamburger.current && !sideMenu.current.contains(e.target) && !hamburger.current.contains(e.target) )  {
        sideMenu.current.classList.remove('open')
        hamburger.current.classList.remove('open')
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [navToggle])


  return (
    <div className={'flex items-center py-8'}>
      <div className='z-30'>
        <div class="hexagon">
          <div class="hexTop"></div>
          <div class="hexBottom"></div>
          <h3 className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>TJ</h3>
        </div>
      </div>
      <div className='hidden md:flex ml-auto'>
        <div className='p-4'>
          <Link href='/' as='/'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/` ? 'border-b-2 border-customTeal-700 font-normal ' : 'hover:text-customTeal-700 transition-all duration-300')}>HOME</a>
          </Link>
        </div>
        <div className='p-4'>
          <Link href='/portfolio' as='/portfolio'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/portfolio` ? 'border-b-2 border-customTeal-700 font-normal' : 'hover:text-customTeal-700 transition-all duration-300')}>PORTFOLIO</a>
          </Link>
        </div>
        {/* <div className='p-4'>
          <Link href='/contact' as='/contact'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/contact` ? 'border-b-2 border-customTeal-700 font-normal' : '')}>CONTACT</a>
          </Link>
        </div> */}
      </div>
      {/* hamburger icon */}
      <button ref={hamburger} onClick={navToggle} className='block md:hidden hamburger cursor-pointer w-6 h-6 relative bg-none border-none z-30 transition-all duration-300 transform -translate-y-full ml-auto top-[10px]'>
        <span className='hamburger-top absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500'></span>
        <span className='hamburger-middle absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500 translate-y-2'></span>
        <span className='hamburger-bottom absolute top-0 left-0 w-6 h-0.5 bg-white transform rotate-0 transition-all duration-500 translate-y-4'></span>
      </button>
      {/* mobile nav */}
      <div ref={sideMenu} className='sideMenu flex flex-col md:hidden ml-auto fixed right-0 top-0 bg-black text-white w-full py-6 items-center'>
        <div className='p-4'>
          <Link href='/' as='/'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/` ? 'border-b-2 border-customTeal-700 font-normal' : '')}>HOME</a>
          </Link>
        </div>
        <div className='p-4'>
          <Link href='/portfolio' as='/portfolio'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/portfolio` ? 'border-b-2 border-customTeal-700 font-normal' : '')}>PORTFOLIO</a>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Header;
