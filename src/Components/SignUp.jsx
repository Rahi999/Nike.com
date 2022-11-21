import React from 'react'
import {Box,Input,Typography,Avatar,Select } from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
// import Alert from './Alert'
import axios from "axios"
import { useDispatch } from 'react-redux'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
 
const SignUp = () => {
  //https://17ff65.sse.codesandbox.io/NikeSignUp
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [signupError,setSignUpError] = useState(false);
  const [signUpSuccess,setSignUpSuccess] = useState(false);
  const [signUpWarning,setSignUpWarning] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [signUpLoading,setSignUpLoading] = useState(false);
  const [signUpFailure,setSignUpFailure] = useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false);


  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' ' + cTime;
  // console.log(dateTime);
  const handleOnSignUp = () => {
      if(email && password && firstName && lastName) {
        setSignUpLoading(true);
        const payload = {
          Date : dateTime,
          Email : email,
          Password : password,
          FirstName : firstName,
          LastName : lastName,
          status : false 
        }
        axios.post("http://localhost:8080/NikeSignUp",payload)
        .then((resolve) => {
          setSignUpLoading(false);
          setSignUpSuccess(true);
          localStorage.setItem("First_Name",firstName);
          navigate("/login")
        })
        .catch((reject) => {
           setSignUpFailure(true);
           setSignUpError(true);
           navigate("/signUp");
        })
        
      }
      else if(!email || !password || !firstName || !lastName) {
        setSignUpWarning(true);
        setOpenSuccess(true);

      } else {
        setSignUpError(true)
      }
  }
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
                <Input onChange={(e) => setEmail(e.target.value)} id="signUpInput" placeholder='Email address' type="email" />
              </Box>
              <br /><br />
              <Box>
                <Input onChange={(e) => setPassword(e.target.value)} id="signUpInput" placeholder='Password' type="password" />
              </Box>
              <br /><br />
              <Box>
                <Input onChange={(e) => setFirstName(e.target.value)} id="signUpInput" placeholder='First Name' />
              </Box>
              <br /><br />
              <Box>
                <Input onChange={(e) => setLastName(e.target.value)} id="signUpInput" placeholder='Last Name' />
              </Box>
              <br /><br />
             <Box>
              <button onClick={() => handleOnSignUp()} title="Click To Become A Member Of Nike" id="signupButton">
                {signUpLoading ? "SIGNING IN..." : "JOIN US"}
                </button>
             </Box>
             <Box style={{display:"flex",fontSize:"18px",color:"grey",marginLeft:"33%"}}>
             Already a Member?
             <Link style={{
              fontSize:"17px",color:"black"
             }} to="/login">Login</Link>

             </Box>
           </Box>
           <Box sx={{ width: '60%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openSuccess}>
        <Alert severity="warning" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,fontSize:"20px" }}
        >
          Please Enter All Details
        </Alert>
      </Collapse>
      
    </Box>
       
      {/* {signUpSuccess ? <Alert type="success" message="SignUp SuccessFull Login Please" />: null }
       {signupError ?  <Alert type="error" message="SignUp Failed" /> : null}
       {signUpWarning ? <Alert type="warning" message="Please Enter All Details" />  : null} */}
    </Box>
  )
}

export default SignUp