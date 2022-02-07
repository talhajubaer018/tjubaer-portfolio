import React from 'react'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {
  return (
    <div className='next_start flex'>
      <Sidebar />
      <main className='main absolute left-[200px] w-full h-full'>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout