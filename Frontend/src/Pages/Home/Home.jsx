import React from 'react'
import Banner from '../../Compenents/Banner'
import Categeries from './Catagories'
import Special from './Special'
import Testimonials from './Testimonials'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Categeries/>
      <Special/>
      <Testimonials/>
    </div>
  )
}

export default Home