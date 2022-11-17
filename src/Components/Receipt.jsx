import React from 'react'
import {Box,Typography} from "@mui/material"

const Receipt = () => {
  return (
    <Box id="menClothingContainer" style={{backgroundColor:"#ffe8d2",padding:"20px"}}>
       <Box style={{backgroundColor:"#f4f4f4",padding:"20px",width:"70%",margin:"auto"}}>
        <img src="https://i.imgur.com/2zDU056.png" width="7%" />
       </Box>
       <Box style={{padding:"40px",width:"70%",margin:"auto",backgroundColor:"#ffffff"}}>
          <Typography id="h3" style={{textAlign:"left",fontStyle:"-moz-initial"}}>
          Your order Confirmed!
          </Typography>
          <Typography id="h3" style={{textAlign:"left",fontStyle:"normal",marginTop:"20px"}}>
          Hello, Name
          </Typography>
          <Typography style={{fontSize:"22px",marginTop:"10px",fontdStyle:"Monospace"}}>You order has been confirmed and will be shipped in next two days!</Typography>
       </Box>
    </Box>
  )
}

export default Receipt