import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter()

  return (
    <div className={'flex items-center py-8' + ' ' + (router.pathname == `/` ? 'text-white' : 'text-black')}>

      <div className=''>
        <h2>TALHA JUBAER</h2>
        <h4>WEB DESIGNER & DEVELOPER</h4>
      </div>
      <div className='ml-auto flex'>
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
        {/* <div className='p-4'>
          <Link href='/contact' as='/contact'>
            <a className={'cursor-pointer p-4' + ' ' + (router.pathname == `/contact` ? 'border-b-2 border-customTeal-700 font-normal' : '')}>CONTACT</a>
          </Link>
        </div> */}
      </div>
    </div>
  )
};

export default Header;
