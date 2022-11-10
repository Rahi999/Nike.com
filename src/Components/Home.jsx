import { Box,Input,h1,h2,h3,h4,h5,h6,Button,Typography,Container,Card } from '@mui/material'
import React from 'react'
import Navbar from './Navbar';
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box>HomePage</Box>
      <Footer />
    </Box>
  )
}

export default Home