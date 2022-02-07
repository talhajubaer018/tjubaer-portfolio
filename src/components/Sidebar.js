import React, { useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center h-[98vh] bg-customGray-500 text-customGray-400 w-[200px]'>
      <div className='relative'>
        <Image src='/profile.jpg' layout='intrinsic' width={200} height={200} />
        <h4 className='playfair font-bold py-2 absolute bottom-2 bg-customTeal-700 text-white w-full text-center bg-opacity-70'>TALHA JUBAER</h4>
      </div>
      <div className={`font-light text-15 w-full mx-auto te flex flex-col`}>
        {navItems.map(item => (
          <div>
            <div className={'w-3/5 mx-auto mb-4 mt-4 hover:text-white' + ' ' + (router.pathname == `${item.link}` ? 'text-white' : '')}>
              <FontAwesomeIcon className={`mr-2`} icon={['fas', `${item.icon}`]} />
              <Link href={item.link} as={item.link} replace>
                <a className={'cursor-pointer' + ' ' + (router.pathname == `${item.link}` ? 'text-white font-normal' : '')}>{item.name}</a>
              </Link>
            </div>
            <div className='border-b-1 border-black'></div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Sidebar;

const navItems = [
  {
    name: 'HOME',
    icon: 'home',
    link: '/'
  },
  {
    name: 'ABOUT ME',
    icon: 'user',
    link: '/about'
  },
  {
    name: 'RESUME',
    icon: 'file-alt',
    link: '/resume'
  },
  {
    name: 'PORTFOLIO',
    icon: 'suitcase',
    link: '/portfolio'
  },
  {
    name: 'CONTACT',
    icon: 'envelope',
    link: '/contact'
  },
]
