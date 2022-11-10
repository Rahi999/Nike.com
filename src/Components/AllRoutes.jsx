import { Box } from '@mui/material'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from './Footer';

const AllRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />
        </Routes>
    </Box>
  )
}

export default AllRoutes