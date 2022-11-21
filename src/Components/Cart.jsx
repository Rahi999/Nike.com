import React,{useEffect, useState} from 'react'
import {Box,Typography,Avatar,Input} from "@mui/material"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {

  const [cart,setCart] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [code,setCode] = useState('');
  const navigate = useNavigate()
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openOrderSuccess, setOpenOrderSuccess] = React.useState(false);


  const data = JSON.parse(localStorage.getItem("CartData"));
  useEffect(() =>{
  setCart(data)
  },[])

  // console.log(cart);

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

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  // Storing The Current Date And Current Time When User Confirming the Order..

  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' ' + cTime;
  // console.log(dateTime);
  const handleAdd = () => {
   
    // https://17ff65.sse.codesandbox.io/Nike_Products_OrderedBy_Customers
   if(name && phone && address && code){
    setLoading(true);
    
    const payload = {
      date : dateTime,
      description : cart.map((el) => el.description),
      title : cart.map((el) => el.title),
      price : cart.map((el) => el.price),
      image : cart.map((el) => el.image),
      Name : name,
      Phone : phone,
      Address : address,
      Pin : code,
      Total : total
    }
    axios.post("http://localhost:8080/Nike_Products_OrderedBy_Customers",payload)
    .then((res) => {
      // alert("Order Confirmed");
      setOpenOrderSuccess(true)
      localStorage.setItem('Name',name);
      localStorage.setItem('Address',address);
      localStorage.setItem('Total',total);
      setLoading(false)
      handleClose();
      // navigate("/reciept")
      setTimeout(()=> {
       navigate("/reciept")
      },3000 )
      
    })
    .then((err) => setError(true))
   
   } else {
    setOpenSuccess(true)
   }
   
  }
  
  return (
    <Box id="cartContainer">
       <Box sx={{ width: '60%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openOrderSuccess}>
        <Alert severity="success" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenOrderSuccess(false);
                navigate("/reciept")
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,fontSize:"20px" }}
        >
          Your Order Have Been Confirmed, Close to See the Receipt...
        </Alert>
      </Collapse>
      
    </Box>
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
         <br />
         {/* Modal Goes Here */}

         <Box>
      <Button disabled={!cart } id="cartButton" onClick={handleOpen}>Confirm Order</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="h3" style={{textAlign:"left"}}>Shipping Details</Typography><br />
          <Typography>Please Enter Full Name</Typography> 
          <Input onChange={(e) => setName(e.target.value)} id="signUpInput" placeholder='Enter Your Full Name'/> <br /><br />
          <Typography>Please Enter Phone Number</Typography> 
          <Input onChange={(e) => setPhone(e.target.value)} id="signUpInput" placeholder='Phone Number' type="number"/> <br /> <br />
          <Typography>Please Provide Full Address</Typography> 
          <Input onChange={(e) => setAddress(e.target.value)} id="signUpInput" placeholder='Address'/> <br /> <br />
          <Typography>Please Enter Pin/Zip Code</Typography> 
          <Input onChange={(e) => setCode(e.target.value)} id="signUpInput" placeholder='Pin/Zip Code' type="number"/> <br /> <br />
          <Box sx={{ width: '100%',margin:"auto",fontSize:"22px" }}>
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
          sx={{ mb: 2,fontSize:"16px" }}
        >
          Please Enter All Details
        </Alert>
      </Collapse>
      
    </Box>
          <button onClick={() => handleAdd()} id="signupButton">{loading ? "CONFIRMING ORDER..." : error ? "Failed" : "CONFIRM"}</button>
        
        </Box>
      </Modal>
    </Box>
    <br />
    <br />
        </Box>
      </Box>
    </Box>
  )
}

export default Cart;