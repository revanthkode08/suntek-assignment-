import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header />
        <div className='mx-20 min-h-screen'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout