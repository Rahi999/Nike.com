import React from 'react'
import {Box,Input,Typography} from "@mui/material"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <Box id="loginContainer">
       <Box id="signUpDiv">
                <Box><img src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg"
                 alt="Nike Logo"
                   width="20%" /></Box>
              <Box>
                <Typography style={{fontWeight:"bold"}} id="h3">YOUR ACCOUNT FOR EVERYTHING NIKE</Typography>
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
              <button title="Click To Login With Nike" id="signupButton">SIGN IN</button>
             </Box>
             <Box style={{display:"flex",fontSize:"18px",color:"grey",marginLeft:"33%"}}>
             Not a Member?
             <Link style={{
              fontSize:"17px",color:"black"
             }} to="/signUp">Join Us</Link>

             </Box>
           </Box>
    </Box>
  )
}

export default Login