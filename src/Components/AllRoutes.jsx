import { Box } from '@mui/material'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from './Footer';
import MenClothing from "./MenClothing";
import WomenClothing from './WomenClothing';
import MenShoes from './MenShoes';
import WomenShoes from './WomenShoes';
import KidsShoes from './KidsShoes';
import Cart from './Cart';
import SingleMenClothes from './SingleMenClothes';
import SingleMenShoes from './SingleMenShoes';
import SingleWomenClothes from "./SingleWomenClothes";
import SingleWomenShoes from "./SingleWomenShoes"
import SingleKidsShoes from "./SingleKidsShoes"
  
const AllRoutes = () => {
  const name = localStorage.getItem("Name");
  return (
    <Box>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/menClothing" element={<MenClothing />} />
            <Route path="/menShoes" element={<MenShoes />} />
            <Route path="/womenClothing" element={<WomenClothing />} />
            <Route path="/womenShoes" element={<WomenShoes />} />
            <Route path="/kidsShoes" element={<KidsShoes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menClothing/:id" element={<SingleMenClothes />} />
            <Route path="/menShoes/:id" element={<SingleMenShoes />} />
            <Route path="/womenClothing/:id" element={<SingleWomenClothes />} />
            <Route path="/womenShoes/:id" element={<SingleWomenShoes />} />
            <Route path="/kidsShoes/:id" element={<SingleKidsShoes />} />
        </Routes>
    </Box>
  )
}

export default AllRoutes