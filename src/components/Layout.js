import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {
  return (
    <div className='next_start'>
      <Header />
      {/* <Sidebar /> */}
      <main className='main max-w-[1078px] w-[90%] mx-auto'>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout