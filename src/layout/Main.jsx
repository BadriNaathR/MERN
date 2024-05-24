import React, { useContext } from "react";
import { Outlet } from 'react-router-dom'
import Navbar from '../Compenents/Navbar'
import '../App.css'
import Footer from '../Compenents/footer'
import { AuthContext } from '../context/AuthProvider'

const Main = () => {
  const {loading} = useContext(AuthContext);
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