import React from 'react'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {
  return (
    <div className='next_start'>
      <Sidebar />
      <main className='main'>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout