import React from 'react'
import {Box,Typography} from "@mui/material"
import {useNavigate,Link} from "react-router-dom"

const Receipt = () => {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("CartData"));
  const name = localStorage.getItem("Name");
  const address = localStorage.getItem("Address");
  const total = localStorage.getItem("Total");

  return (
    <Box id="menClothingContainer" style={{backgroundColor:"#ffe8d2",padding:"20px"}}>
       <Box style={{backgroundColor:"#f4f4f4",padding:"20px",width:"70%",margin:"auto"}}>
        <img src="https://i.imgur.com/2zDU056.png" width="7%" />
       </Box>
       <Box style={{padding:"40px",width:"70%",margin:"auto",backgroundColor:"#ffffff"}}>
          <Typography id="h3" style={{textAlign:"left",}}>
          Your order Confirmed!
          </Typography>
          <Typography id="h3" style={{textAlign:"left",fontStyle:"normal",marginTop:"20px"}}>
          Hello, {name ? name : " "}
          </Typography>
          <Typography style={{fontSize:"22px",marginTop:"10px",fontFamily:"Monospace"}}>You order has been confirmed and will be shipped in next two days!</Typography>
          <br /><br />
          <hr />
            <table>
              <thead>
              <th><Typography id="h3" style={{fontStyle:"normal",color:"grey",marginLeft:"50px"}}>Order Date</Typography></th>
              <th><Typography id="h3" style={{fontStyle:"normal",color:"grey",marginLeft:"50px"}}>Order ID</Typography>
              </th>
              <th>
              <Typography id="h3" style={{fontStyle:"normal",color:"grey",marginLeft:"50px"}}>Payment</Typography>
              </th>
              <th>
              <Typography id="h3" style={{fontStyle:"normal",color:"grey",marginLeft:"50px"}}>Shipping Address</Typography>
              </th>
              </thead>
              <tbody>
                <td>
                  <tr><Typography style={{fontSize:"22px",fontFamily:"Monospace", width:"100px",marginLeft:"50px"  }}>22 June 2022</Typography></tr>
                </td>
                <td>
                  <tr>
                  <Typography style={{fontSize:"22px",fontFamily:"Monospace", width:"100px" , marginLeft:"50px" }}>MT12332345</Typography>

                  </tr>
                </td>
                <td>
                  <tr>
                  <Typography style={{fontSize:"22px",fontFamily:"Monospace", width:"100px" , marginLeft:"50px" ,textAlign:"right"}}>COD</Typography>

                  </tr>
                </td>
                <td>
                  <tr>
                  <Typography style={{fontSize:"22px",fontFamily:"Monospace", marginLeft:"50px",width:"200px"}}>{address ? address : "N/A"}</Typography>

                  </tr>
                </td>
              </tbody>
             
            </table>
          <br /><hr />
          <br /> <br />
          {data && data.map((el) => <Box id="receiptBox" key={el.id} style={{display:"flex",gap:"30px", width:"70%",margin:"auto",marginTop:"20px",padding:"20px"}}>
           <img src={el.image} width="80px" />
           <Box>
           <Typography  style={{textAlign:"left",fontStyle:"normal",fontSize:"18px"}}>{el.title}</Typography>
           <Typography style={{color:"grey",fontStyle:"normal"}}>Quantity:1</Typography>
            <Typography style={{color:"grey",fontStyle:"normal"}}>Color: Default</Typography>
           </Box>
           <Typography id="h3" style={{fontStyle:"normal",textAlign:"right",width:"100%"}}>₹{el.price}</Typography>
          </Box>)}
          <br />
          <br />
          <hr />
          <Box style={{height:"300px",width:"300px",marginLeft:"65%",padding:"15px"}}>
           <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">Subtotal</Typography>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">₹{total ? total : ""}</Typography>
           </Box> <br />
           <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">Shipping Fee</Typography>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">Free</Typography>
           </Box>
           <br />
           <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">Tax Fee</Typography>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">0%</Typography>
           </Box>
           <br />
           <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace"}} id="price">Discount</Typography>
            <Typography style={{color:"grey",fontSize:"18px",fontFamily:"Monospace",color:"green"}} id="price">0%</Typography>
           </Box>
           <br />
           <hr />
           <br/>
           <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography style={{color:"black",fontWeight:"bold",fontSize:"18px",fontFamily:"Monospace"}} id="price">SubTotal</Typography>
            <Typography style={{color:"black",fontWeight:"bold",fontSize:"18px",fontFamily:"Monospace"}} id="price">₹{total ? total : ''}</Typography>
           </Box>
           <br />
           <hr />
          </Box>
          <Typography id="h3" style={{fontStyle:"normal",color:"grey",textAlign:"left",fontWeight:"normal"}}>
          We will be sending shipping confirmation email when the item shipped successfully!
          </Typography> 
          <br />
          <Typography id="price" style={{fontStyle:"italic",fontSize:"21px"}}>Thanks for shopping with us!</Typography>
          <Typography id="price" style={{fontStyle:"italic",fontSize:"21px"}}>Nike Team</Typography>
            <button id="signupButton">
               <Link style={{textDecoration:"none",color:"white"}} to="/">Continue Shopping</Link>
              </button>
       </Box>
    </Box>
  )
}

export default Receipt