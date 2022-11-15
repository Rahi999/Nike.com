import React,{useEffect, useState} from 'react'
import {Box,Typography,Avatar} from "@mui/material"

const Cart = () => {

  const [cart,setCart] = useState([])

  const data = JSON.parse(localStorage.getItem("CartData"));
  useEffect(() =>{
  setCart(data)
  },[])

  console.log(cart);

  let total = 0;
  if(cart) {
   total = cart.reduce(function (acc, obj) { return acc + +obj.price }, 0);
  }
  // console.log(total)
  const handleDelete = (id) => {
    setCart(cart.filter((item)=> item.id !== id));
    localStorage.setItem("CartData",JSON.stringify(cart))
  //  console.log(cart)
  }
  return (
    <Box id="cartContainer">
      <Box id="cartBox">
        {/* Left Box For Cart */}
        <Box id="cartChild1">
          <Typography id="h3" style={{textAlign:"left"}}>Bag ({cart ? cart.length : 0})</Typography>
         {cart  ?  <Box id="mappedcart">
          { cart ? cart && cart.map((items) => 
          <Box key={items.id} id="cartMappedBox">
            <Box style={{width:"30%",height:"200px"}}>
              <img id="cartImage" src={items.image} /></Box>
            <Box id="Cartbox2" style={{width:"70%"}}>
            <Box>
            <Typography id="description">{items.description}</Typography>
            <Typography id="title">{items.title}</Typography>
            <Typography id="price">MRP : ₹ {items.price}</Typography>
            <Typography id="price">Size : {items.size}</Typography>
            </Box>
            <Box><Avatar id="remove" onClick={() => handleDelete(items.id)} src="https://cdn-icons-png.flaticon.com/512/545/545676.png" alt="Delete Button"/></Box>
            </Box>
            
           
          </Box>) :  <Typography id="price">There are no items in your bag.</Typography>}
          </Box> : <Typography id="price">There are no items in your bag.</Typography>}
        </Box>

        {/* Right side box For Cart */}
        <Box id="cartChild2">
        <Typography id="h3" style={{textAlign:"left"}}>Summary</Typography>
        <br />
         <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography id="price">Subtotal</Typography>
          <Typography id="price">₹ {total}</Typography>
         </Box>
         <br />
         <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography id="price">Items (Total)</Typography>
          <Typography id="price">{cart ? cart.length : 0}</Typography>
         </Box>
         <br />
         <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography id="price">Estimated Delievery & Handling</Typography>
          <Typography id="price">Free</Typography>
         </Box>
         <br />
         
         <hr />
         <br />
         <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography id="price">Total</Typography>
          <Typography id="price">₹ {total}</Typography>
         </Box>
         <br />
         <hr />
        </Box>
      </Box>
    </Box>
  )
}

export default Cart