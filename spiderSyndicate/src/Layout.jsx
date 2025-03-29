import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from '@mui/material'

function Layout() {
  return (
    <>
      {/* <Container> */}
      <div className='mx-3'>

        <Header />
        <Outlet />
        <Footer />
      </div>
      {/* </Container> */}
    </>
  )
}

export default Layout