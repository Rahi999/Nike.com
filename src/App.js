import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input,Button, Container, Box} from "@mui/material"
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <Box  style={{width:"95%",margin:"auto"}}>
     <AllRoutes />
    </Box>
  );
}

export default App;
