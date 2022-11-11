import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input,Button, Container, Box} from "@mui/material"
import AllRoutes from './Components/AllRoutes';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
function App() {
  return (
    <Box  style={{width:"95%",margin:"auto"}}>
      <Navbar />
     <AllRoutes />
     <Footer />
    </Box>
  );
}

export default App;
