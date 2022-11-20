import React, { useState,useEffect } from 'react'
import {Box,Input,Typography,Button,TextField,CircularProgress,Autocomplete, Avatar} from "@mui/material";
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const Navbar = () => {

  const [searchInput, setSearchInput] = useState("");
  const [ApiData, setApiData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate()
  const [text,setText] = useState("");
  const [openMenClothing, setOpenMenClothing] = React.useState(false);
  const handleOpenMenClothing = () => setOpenMenClothing(true);
  const handleCloseMenClothing = () => setOpenMenClothing(false);
  const [openSecond,setOpenSecond] = useState(false);
  const handleOpenSecond  = () => setOpenSecond(true);
  const handleCloseSecond = () => setOpenSecond(false);
  const [openThird,setOpenThird] = useState(false);
  const handleOpenThird = () => setOpenThird(true);
  const handleCloseThird = () => setOpenThird(false);
  const [openFourth,setOpenFourth] = useState(false);
  const handleOpenFourth = () => setOpenFourth(true);
  const handleCloseFourth = () => setOpenFourth(false);

  const [mcd,setMcd] = useState('');
  const [mct,setMct] = useState('');
  const [mci,setMci] = useState('');
  const [mcc,setMcc] = useState('');
  const [mcp,setMcp] = useState('');
  const [mcs,setMcs] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false)
 
  

  const name = localStorage.getItem("First_Name");
  const data = JSON.parse(localStorage.getItem("CartData"));

  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


  const handleSearch = () => {
    localStorage.setItem("searched",text)
    navigate("/searchedProducts")
  }

  
  useEffect(() => {
    axios.get(`http://localhost:8080/All_Data`).then((r) => {
      setApiData(r.data);
    }).catch(()=> null)


  }, [searchInput]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filterdata = ApiData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filterdata);
  };
  // console.log(searchInput);
  // console.log(filteredResults);

  const handleAddMenClothes = () => {
          setLoading(true)
      const payload = {
         sellerName : mcs,
         description : mcd,
         title : mct,
         price : mcp,
         image : mci,
         color : mcc
      }
      axios.post("http://localhost:8080/Men_Clothing",payload)
      .then((res) => {
        setLoading(false);
        handleCloseMenClothing();
        setMcs('');
        setMcd('');
        setMct('');
        setMcp('');
        setMci('');
        setMcc('');
      })
      .catch((err) => setError(true))  
      
  }
  
  const handleAddMenShoes = () => {
    setLoading(true)
    const payload = {
       sellerName : mcs,
       description : mcd,
       title : mct,
       price : mcp,
       image : mci,
       color : mcc
    }
    axios.post("http://localhost:8080/Men_Shoes",payload)
    .then((res) => {
      setLoading(false);
      handleCloseSecond();
      setMcs('');
      setMcd('');
      setMct('');
      setMcp('');
      setMci('');
      setMcc('');
    })
    .catch((err) => setError(true))  
  }

  const handleAddWomenClothes = () => {
    setLoading(false)
    const payload = {
       sellerName : mcs,
       description : mcd,
       title : mct,
       price : mcp,
       image : mci,
       color : mcc
    }
    axios.post("http://localhost:8080/Women_Clothes",payload)
    .then((res) => {
      setLoading(false);
      handleCloseThird();
      setMcs('');
      setMcd('');
      setMct('');
      setMcp('');
      setMci('');
      setMcc('');
    })
    .catch((err) => setError(true))  
  }
  
  const handleAddWomenShoes = () => {
    setLoading(true)
    const payload = {
       sellerName : mcs,
       description : mcd,
       title : mct,
       price : mcp,
       image : mci,
       color : mcc
    }
    axios.post("http://localhost:8080/Women_shoes",payload)
    .then((res) => {
      setLoading(false);
      handleCloseFourth();
      setMcs('');
      setMcd('');
      setMct('');
      setMcp('');
      setMci('');
      setMcc('');
    })
    .catch((err) => setError(true))  
  }
  return ( <Box id="navbar">
    <Box id="navabrContainer"
     style={{
      width:"100%",
      background : "white",
      zIndex:"9",
      position:"fixed",
      top:"0",
      left:"0",
      boxShadow:"2px 2px 8px rgba(0,0,0,0.2)"
     }}
    columns={{sm:1,md:2,lg:2,xl:2,base:1}} >
      <Box id="firstDiv" >
        <img onClick={() => navigate("/")} style={{cursor:"pointer"}}  width='20%' src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg" alt="Logo.." />
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
              <Link to="">
                {/* Men's Clothing Sale Category */}
      <div>
      <Button onClick={handleOpenMenClothing}>Men's Clothing</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openMenClothing}
        onClose={handleCloseMenClothing}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openMenClothing}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Men's Clothes product Sale
            </Typography>
            <br />
           <Typography>Seller's Name</Typography>
           <Input id="signUpInput" onChange={(e) => setMcs(e.target.value)} placeholder="Seller's Name" />
            <br />
            <br />
            <Typography>Product Name/Titel</Typography>
            <Input id="signUpInput" onChange={(e) => setMct(e.target.value)} placeholder="Product Title.." />
            <br />
            <br />
            <Typography>Product's Description</Typography>
            <Input id="signUpInput" onChange={(e) => setMcd(e.target.value)} placeholder="Product Description..." />
            <br />
            <br />
            <Typography>Product Price</Typography>
            <Input id="signUpInput" onChange={(e) => setMcp(e.target.value)} placeholder="Price..." />
            <br />
            <br />
            <Typography>Product Image URL</Typography>
            <Input id="signUpInput" onChange={(e) => setMci(e.target.value)} placeholder="Image URL..." />
            <br />
            <br />
            <Typography>Product Colors</Typography>
            <Input id="signUpInput" onChange={(e) => setMcc(e.target.value)} placeholder="Colors..." />
            <br />
            <br />
            <button onClick={() => handleAddMenClothes()} id="signupButton">{loading ? "Adding Product..." : error ? "Failed" : "Add Product"}</button>
          </Box>
        </Fade>
      </Modal>
    </div>
    {/* Men's Shoes Sale Category */}
                 </Link>
              <Link to="">
              <div>
      <Button onClick={handleOpenSecond}>Men's Shoes</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSecond}
        onClose={handleCloseSecond}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSecond}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Men's Shoes product Sale
            </Typography>
            <br />
           <Typography>Seller's Name</Typography>
           <Input id="signUpInput" onChange={(e) => setMcs(e.target.value)} placeholder="Seller's Name" />
            <br />
            <br />
            <Typography>Product Name/Titel</Typography>
            <Input id="signUpInput" onChange={(e) => setMct(e.target.value)} placeholder="Product Title.." />
            <br />
            <br />
            <Typography>Product's Description</Typography>
            <Input id="signUpInput" onChange={(e) => setMcd(e.target.value)} placeholder="Product Description..." />
            <br />
            <br />
            <Typography>Product Price</Typography>
            <Input id="signUpInput" onChange={(e) => setMcp(e.target.value)} placeholder="Price..." />
            <br />
            <br />
            <Typography>Product Image URL</Typography>
            <Input id="signUpInput" onChange={(e) => setMci(e.target.value)} placeholder="Image URL..." />
            <br />
            <br />
            <Typography>Product Colors</Typography>
            <Input id="signUpInput" onChange={(e) => setMcc(e.target.value)} placeholder="Colors..." />
            <br />
            <br />
            <button onClick={() => handleAddMenShoes()} id="signupButton">{loading ? "Adding Product..." : error ? "Failed" : "Add Product"}</button>
          </Box>
        </Fade>
      </Modal>
    </div>
              </Link>
                  
    {/* Women's Clothes Sale Category */}
              <Link to="">
              <div>
      <Button onClick={handleOpenThird}>Women's Clothing</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openThird}
        onClose={handleCloseThird}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openThird}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Women's Cloths Product Sale
            </Typography>
            <br />
           <Typography>Seller's Name</Typography>
           <Input id="signUpInput" onChange={(e) => setMcs(e.target.value)} placeholder="Seller's Name" />
            <br />
            <br />
            <Typography>Product Name/Titel</Typography>
            <Input id="signUpInput" onChange={(e) => setMct(e.target.value)} placeholder="Product Title.." />
            <br />
            <br />
            <Typography>Product's Description</Typography>
            <Input id="signUpInput" onChange={(e) => setMcd(e.target.value)} placeholder="Product Description..." />
            <br />
            <br />
            <Typography>Product Price</Typography>
            <Input id="signUpInput" onChange={(e) => setMcp(e.target.value)} placeholder="Price..." />
            <br />
            <br />
            <Typography>Product Image URL</Typography>
            <Input id="signUpInput" onChange={(e) => setMci(e.target.value)} placeholder="Image URL..." />
            <br />
            <br />
            <Typography>Product Colors</Typography>
            <Input id="signUpInput" onChange={(e) => setMcc(e.target.value)} placeholder="Colors..." />
            <br />
            <br />
            <button onClick={() => handleAddWomenClothes()} id="signupButton">{loading ? "Adding Product..." : error ? "Failed" : "Add Product"}</button>
          </Box>
        </Fade>
      </Modal>
    </div>
    </Link>
    {/* Womens Shoes Sale */}
              <Link to="">
              <div>
      <Button onClick={handleOpenFourth}>Women's Shoes</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openFourth}
        onClose={handleCloseFourth}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFourth}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              Women's Shoes Product Sale
            </Typography>
            <br />
           <Typography>Seller's Name</Typography>
           <Input id="signUpInput" onChange={(e) => setMcs(e.target.value)} placeholder="Seller's Name" />
            <br />
            <br />
            <Typography>Product Name/Titel</Typography>
            <Input id="signUpInput" onChange={(e) => setMct(e.target.value)} placeholder="Product Title.." />
            <br />
            <br />
            <Typography>Product's Description</Typography>
            <Input id="signUpInput" onChange={(e) => setMcd(e.target.value)} placeholder="Product Description..." />
            <br />
            <br />
            <Typography>Product Price</Typography>
            <Input id="signUpInput" onChange={(e) => setMcp(e.target.value)} placeholder="Price..." />
            <br />
            <br />
            <Typography>Product Image URL</Typography>
            <Input id="signUpInput" onChange={(e) => setMci(e.target.value)} placeholder="Image URL..." />
            <br />
            <br />
            <Typography>Product Colors</Typography>
            <Input id="signUpInput" onChange={(e) => setMcc(e.target.value)} placeholder="Colors..." />
            <br />
            <br />
            <button onClick={() => handleAddWomenShoes()} id="signupButton">{loading ? "Adding Product..." : error ? "Failed" : "Add Product"}</button>
          </Box>
        </Fade>
      </Modal>
    </div>
              </Link>

              {/* Kids's Shoes Sale Category */}

            </Box>
       </Box>
      </Box>
   
  {/* Second Div Of The Navbar Container */}

      <Box id="secondDiv" >

        {/* Search Bar  */}

        <Box style={{display:"flex"}} >
        
        <div title="Search For Products" class="container">
       <input onChange={(e) => searchItems(e.target.value)} id="input" type="text" placeholder="Search..." />
       <div onClick={()=> handleSearch()} class="search"></div>
         </div>
         {filteredResults.length > 0 && (
          <Box
            className="abc"
            display={searchInput.length === 0 ? "none" : "inline"}
          >
            {filteredResults.map((item) => {
              return (
                <Link id="categoryAncer" to={`/searchedProducts/${item.id}`} >
                    <div className="searchmap" onClick={() => setSearchInput("")}>
                  <div style={{ width: "30px", height: "30px" }}>
                    <img src={item.image} style={{ width: "100%" }}></img>
                  </div>
                  {/* <a href={`/${item.category}/${item.title}/${item.id}`}>
                <p>{item.title}</p>
              </a> */}
                  <p>{item.title}</p>
                </div>
                </Link>
              
              );
            })}
          </Box>
        )}
        

        </Box>
        <Box id="bagDiv" ><Avatar title="Bag " style={{cursor:"pointer",width:"60px",marginTop:"40%"}} onClick={() => navigate("/cart")} src="https://cdn.icon-icons.com/icons2/2582/PNG/512/shopping_bag_icon_153998.png" />
        <span style={{marginTop:"35%",marginLeft:"-20%", backgroundColor:"black",color:"white",borderRadius:"50%",width:"25px",height:"25px",textAlign:"center"}}>{data ? data.length : "0"}</span>
        </Box>
       
        {/* <Button style={{width:"10%",}}><img  width="100%" src="https://www.shareicon.net/data/256x256/2016/09/14/829028_package_512x512.png" alt="" /></Button> */}
         {/* Menu Category */}
         <Box class="dropdown" style={{marginRight:"80px"}}>
          <Typography class="dropbtn"><Avatar src="" /></Typography>
            <Box class="dropdown-content">
              <Link to="/signUp">{name ? name : "SignIn"} </Link>
              <Link to="/login">Login</Link>
              <Link to="/cart">Wishlist</Link>
              <Link to="/">Home</Link>
              <a href="https://csb-m77eqe.netlify.app/" target="_blank">Users List</a>
              <a href="https://csb-9yqhy3.netlify.app/" target="_blank">Admin</a>
            </Box>
       </Box>
      </Box>
    </Box>
    
    </Box>
  )
}

export default Navbar
