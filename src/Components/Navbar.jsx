import React, { useState } from 'react'
import {Box,Input,Typography,Button,TextField,CircularProgress,Autocomplete, Avatar} from "@mui/material";
import {Link} from "react-router-dom"


const Navbar = () => {

  const [text,setText] = useState("");

  return ( <Box id="navbar">
    <Box id="navabrContainer" columns={{sm:1,md:2,lg:2,xl:2,base:1}} >
      <Box id="firstDiv" >
        <img width='20%' src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg" alt="Logo.." />
         {/* Men Category */}
        <Box class="dropdown">
          <Typography  class="dropbtn">Men</Typography>
            <Box class="dropdown-content">
              <Link to="/menClothing">Men's Clothing</Link>
              <Link to="/menShoes">Men's Shoes</Link>
              <Link to="/menClothing">New Releases</Link>
              <Link to="/menShoes">Lifestyle</Link>
              <Link to="/menShoes">Runnig</Link>
            </Box>
       </Box>
       {/* Women Category */}
       <Box class="dropdown">
          <Typography class="dropbtn">Women</Typography>
            <Box class="dropdown-content">
            <Link to="/womenClothing">Women's Clothing</Link>
              <Link to="/womenShoes">Women's Shoes</Link>
              <Link to="/womenClothing">New Releases</Link>
              <Link to="/womenShoes">Lifestyle</Link>
              <Link to="/womenShoes">Runnig</Link>
            </Box>
       </Box>
       {/* Kids Category */}
       <Box class="dropdown">
          <Typography class="dropbtn">Kids</Typography>
            <Box class="dropdown-content">
              <Link to="/kidsShoes">Kids Shoes</Link>
              <Link to="/kidsShoes">New Releases</Link>
              <Link to="/kidsShoes">Lifestyle</Link>
              <Link to="/kidsShoes">Runnig</Link>
            </Box>
       </Box>
       {/* Sale Category */}
       <Box class="dropdown">
          <Typography class="dropbtn">Sale</Typography>
            <Box class="dropdown-content">
              <Link to="">Men's Products</Link>
              <Link to="">Women's Products</Link>
              <Link to="">Kids's Products</Link>
            </Box>
       </Box>
      </Box>
  
  {/* Second Div Of The Navbar Container */}

      <Box id="secondDiv" >

        {/* Search Bar  */}

        <Box style={{display:"flex"}}>
        
        <div title="Search For Products" class="container">
       <input id="input" type="text" placeholder="Search..." />
       <div onClick={()=> alert("Search Working")} class="search"></div>
         </div>
        

        </Box>
       
        {/* <Button style={{width:"10%",}}><img  width="100%" src="https://www.shareicon.net/data/256x256/2016/09/14/829028_package_512x512.png" alt="" /></Button> */}
         {/* Menu Category */}
         <Box class="dropdown">
          <Typography class="dropbtn"><Avatar src="" /></Typography>
            <Box class="dropdown-content">
              <Link to="/signUp">SignIn </Link>
              <Link to="/login">Login</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/cart">Wishlist</Link>
            </Box>
       </Box>
      </Box>
    </Box>
    
    </Box>
  )
}

export default Navbar


