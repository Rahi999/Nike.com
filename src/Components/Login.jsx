import React,{useState,useEffect} from 'react'
import {Box,Input,Typography} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import axios from "axios";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
 
const Login = () => {
  // https://17ff65.sse.codesandbox.io/NikeLogin;
  const navigate = useNavigate()
  const isAuth = useSelector((state => state.AuthReducer.isAuth));
  const [loginData,setLoginData] = useState([]);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loginError,setLoginError] = useState(false);
  const [loginSuccess,setLoginSuccess] = useState(false);
  const [loginWarning,setLoginWarning] = useState(false);
  const [loginStatus,setLoginStatus] = useState(false);
  const [dataloading,setDataLoading] = useState(false);
  const [dataError,setDataError] = useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);


  useEffect(() => {
    setDataLoading(true)
   axios.get("https://intermediate-little-dibble.glitch.me/NikeSignUp")
   .then((res) => {
    setLoginData(res.data)
    setDataLoading(false)
  }).
   catch(() => setLoginError(true))
  },[])
   
  // console.log(dataloading)
  const handleLogin = () => {
   
    if(email && password){
      setLoginStatus(true);
      // console.log(loginData);
      for(let i=0;i<loginData.length;i++) {
        
        if(email === loginData[i].Email && password === loginData[i].Password){
          setLoginSuccess(true);
          setLoginStatus(false);
          // alert("You're Successfully Logged In. Start Shopping ")
          setOpenSuccess(true)
          // console.log(loginData[i].Email,email,loginData[i].Password,password)
        } 
      }
      setLoginError(true);
      setLoginStatus(false);
      setOpenError(true);
      setTimeout(() => {
         navigate("/")
      },3000)
    } else {
      setLoginWarning(true);
      setOpenWarning(true)
    }
  }
  
  return (
    <Box id="loginContainer">
       <Box id="signUpDiv">
                <Box><img src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg"
                 alt="Nike Logo"
                   width="20%" /></Box>
              <Box>
                <Typography style={{fontWeight:"bold"}} id="h3">YOUR ACCOUNT FOR EVERYTHING NIKE</Typography>
                <Typography style={{color:"grey",fontSize:"20px"}} id="h3">Please Login With Same Details</Typography>
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
              <button disabled={dataloading === true || dataError === true} onClick={() => handleLogin()} title="Click To Login With Nike" id="signupButton">
                {loginStatus ? "LOGGING IN..."  : dataloading ? "Please Wait" : dataError ? "Server Closed" : "SIGN IN"}
                </button>
             </Box>
             <Box style={{display:"flex",fontSize:"18px",color:"grey",marginLeft:"33%"}}>
             Not a Member?
             <Link style={{
              fontSize:"17px",color:"black"
             }} to="/signUp">Join Us</Link>

             </Box>
           </Box>
           {/* Success Alert */}

           <Box sx={{ width: '60%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openSuccess}>
        <Alert severity="success" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenSuccess(false);
                navigate("/")
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,fontSize:"20px" }}
        >
          Login SuccessFull. Close to Continue Shopping...
        </Alert>
      </Collapse>
      
    </Box>

           {/* Warning Alert */}
           <Box sx={{ width: '60%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openWarning}>
        <Alert severity="warning" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenWarning(false);
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


           {/* Error Alert */}

           <Box sx={{ width: '60%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openError}>
        <Alert severity="error" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,fontSize:"20px" }}
        >
          Incorrect Details, Please Enter Correct Details
        </Alert>
      </Collapse>
      
    </Box>

           {/* {loginSuccess ? <Alert type="success" message="You're Successfully Logged In. Start Shopping" /> : null}
           {loginError ? <Alert type="error" message="Details Didn't Matched Or Server Closed. Please Try Again." /> : null}
           {loginWarning ? <Alert type="warning" message="Please Enter All Details" /> : null} */}
    </Box>
  )
}

export default Login