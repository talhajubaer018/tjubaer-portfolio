import React from 'react'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {
  return (
    <div className='next_start flex'>
      <Sidebar />
      <main className='main w-full h-[98vh]'>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout