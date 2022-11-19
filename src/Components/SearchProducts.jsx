import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {Box,Typography,StyledRating} from "@mui/material"
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useDispatch,useSelector} from "react-redux"
import {addToCart} from "../Redux/AppReducer/action"
import {useNavigate} from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const SearchProducts = () => {
  const params = useParams();
  const [SingleMenClothesData,setSingleMenClothesData] = useState({});
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [size,setSize] = useState("");
  const [openWarning, setOpenWarning] = React.useState(false);
  const [openLoginWarning, setOpenLoginWarning] = React.useState(false);

  console.log(params.id)
  useEffect(() => {
    setLoading(true)
    axios.get(`https://intermediate-little-dibble.glitch.me/All_Data/${params.id}`)
    .then((res) => {
             setSingleMenClothesData(res.data);
             setLoading(false)
             })
             .catch((err) => {
                            setError(true)
                            console.log(err)   
                            })  
  },[])
  
  const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
const name = localStorage.getItem("First_Name");
  const handleCart = () => {
    if(name) {
      if(size) {
        const payload = {
          id : new Date(),
          description : SingleMenClothesData.description,
          title : SingleMenClothesData.title,
          price : SingleMenClothesData.price,
          image : SingleMenClothesData.image,
          size : size
        }
        var cartItems =   JSON.parse(localStorage.getItem("CartData") || "[]");
        cartItems.push(payload)
        localStorage.setItem("CartData",JSON.stringify(cartItems))
        navigate("/cart");
      } else {
        setOpenWarning(true)
      }
    }else {
      setOpenLoginWarning(true)
    }
   
    
  }
  return loading ? (<Box id="menClothingContainer"><img width="30%" style={{marginLeft:"30%"}} src="https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif"  alt="Loading Logo"/></Box>)
  : error ? (<Box id="menClothingContainer"><img width="35%" style={{marginLeft:"30%"}} src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-2.gif" alt="Error Logo" /></Box>)
  : (
    <Box id="singleProductContainer">
      <Box id="SingleParent">
        {/* Image Box */}
        <Box id="singleChild">
          <img src={SingleMenClothesData.image} alt="" />
        </Box>
        {/* Details Box */}
        <Box id="singleChild2">
          <Typography id="description">{SingleMenClothesData.description}</Typography>
          <Typography id="title1" >{SingleMenClothesData.title}</Typography>
          <Typography id="color">{SingleMenClothesData.color}</Typography>
          <Typography id="price">MRP : ₹ {SingleMenClothesData.price}</Typography>
          <Typography id="color">incl. of taxes</Typography>
          <Typography id="color">(Also includes all applicable duties)</Typography>
          <Box style={{display:"flex",gap:"20px",marginTop:"20px"}}>
            <img src={SingleMenClothesData.image} style={{width:"80px",height:"80px"}} />
            <img src={SingleMenClothesData.image} style={{width:"80px",height:"80px"}} />
            <img src={SingleMenClothesData.image} style={{width:"80px",height:"80px"}} />
          </Box>
          <Typography id="h3" style={{textAlign:"left"}}>Select Size</Typography>
          <select onChange={(e) => setSize(e.target.value)} id="select">
            <option value="">Sizes</option>
            <option value="Extra Small">Extra Small</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
            <option value="XXL">XXL</option>
          </select>
          <br />
          <br />
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography id="price" component="legend">Please Select Rating Stars</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={3}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box> <br /><br />
    <Box sx={{ width: '100%',margin:"auto",fontSize:"22px" }}>
      <Collapse in={openLoginWarning}>
        <Alert severity="warning" variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpenLoginWarning(false);
                navigate("/signUp")
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,fontSize:"20px" }}
        >
          Looks Like You Haven't Logged In, Please Close to SignUp...
        </Alert>
      </Collapse>
      </Box>
    <Box sx={{ width: '100%',margin:"auto",fontSize:"22px" }}>
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
          Please Select The Sizes
        </Alert>
      </Collapse>
      </Box>
          <button onClick={() => handleCart()} id="cartButton">Add to Bag</button>
          <br /><br />
          <Typography id="color">This product is excluded from site promotions and discounts.</Typography>
          <Box id="textBox" style={{border:"0px solid",textAlign:"center",marginTop:"20px", width:"80%",padding:"15px",height:"150px",borderRadius:"10px",backgroundColor:"#f5f5f5"}}><Typography id="price">This Product is made with at least 20% recycled content by weight</Typography></Box>
          <Box id="textBox2">
          <Typography id="price" style={{marginTop:"20px"}}>So you're in love with the classic look of the '90s, but you've got a thing for today's fast-paced culture. Meet the Air Max TW. Inspired by the treasured franchise that brought Nike Air cushioning to the world and laid the foundation for the track-to-street aesthetic, its eye-catching design delivers a 1–2 punch of comfort and fashion. Ready to highlight any 'fit, its lightweight upper pairs angular and organic lines to create an entrancing haptic effect. The contrasting colourways make it easy to style. And if you're ready for the next step, the 5 windows underfoot deliver a modern edge to visible Air cushioning. Colour Show</Typography>

          </Box> <br />
          <Box id="textBox2" style={{padding:"15px"}}>
            <ul>
              <li id="price">Colour Shown: Light Bone/Olive Grey/Summit White/Red Clay</li>
              <li id="price">Style: DQ3984-002</li>
            </ul>
          </Box>
          <Box id="textBox2">
            <Typography id="h3" style={{textAlign:"left"}}>Delivery & Returns</Typography>
            <Typography id="price">All purchases are subjected to delivery fees.</Typography>
            <Typography id="price">Standard delivery 4–9 Working Days</Typography>
            <Typography id="price">Orders are processed and delivered Monday–Friday (excluding public holidays).</Typography>
            <Typography id="price">Nike Members enjoy free returns.</Typography>
          </Box>
         <br />
          <Box id="textBox2">
          <Typography id="h3" style={{textAlign:"left"}}>How This Was Made</Typography>
          <Typography id="price">This product was responsibly designed utilising recycled materials from post-consumer and/or post-manufactured waste. One of our biggest steps on our journey to zero carbon and zero waste is in choosing our materials because they account for more than 70% of any product's footprint. By reusing existing plastics, yarns and textiles, we significantly reduce our emissions. Our goal is to use as many recycled materials as possible without compromising on performance, durability and style.</Typography>
          <br /><Typography id="price">Learn more about our Move to Zero journey towards zero carbon and zero waste, including how we're working to design product with sustainability in mind and help protect the future of where we live and play.</Typography>

          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default SearchProducts