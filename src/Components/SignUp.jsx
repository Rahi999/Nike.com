import React from 'react'
import {Box,Input,Typography,Avatar,Select } from "@mui/material"
import {Link} from "react-router-dom"
 
const SignUp = () => {
  return (
    <Box id="signUpContainer">
           <Box id="signUpDiv">
                <Box><img src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg"
                 alt="Nike Logo"
                   width="20%" /></Box>
              <Box>
                <Typography style={{fontWeight:"bold"}} id="h3">BECOME A NIKE MEMBER</Typography>
              </Box>
              <Box>
                <Typography style={{color:"grey",fontSize:"20px"}} id="h3">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</Typography>
              </Box>
              <br /><br />
              <Box>
                <Input id="signUpInput" placeholder='Email address' type="email" />
              </Box>
              <br /><br />
              <Box>
                <Input id="signUpInput" placeholder='Password' type="password" />
              </Box>
              <br /><br />
              <Box>
                <Input id="signUpInput" placeholder='First Name' />
              </Box>
              <br /><br />
              <Box>
                <Input id="signUpInput" placeholder='Last Name' />
              </Box>
              <br /><br />
             <Box>
              <button title="Click To Become A Member Of Nike" id="signupButton">JOIN US</button>
             </Box>
             <Box style={{display:"flex",fontSize:"18px",color:"grey",marginLeft:"33%"}}>
             Already a Member?
             <Link style={{
              fontSize:"17px",color:"black"
             }} to="/login">Login</Link>

             </Box>
           </Box>

    </Box>
  )
}

export default SignUp