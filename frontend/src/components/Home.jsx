import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Grids from './Grids'
import Navbar from './Navbar'
import Plan from './Plan'
import Pricing from './Pricing'


const Home = () => {
  return (
    <Box >
      <Navbar/>
      <Pricing/>
      <Grids/>
        <Plan/>
        <Footer/>
       
    </Box>
  )
}

export default Home
