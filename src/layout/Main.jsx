import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Compenents/Navbar'
import '../App.css'
import Footer from '../Compenents/footer'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main