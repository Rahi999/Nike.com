import { Box,Input,h1,h2,h3,h4,h5,h6,Button,Typography,Container,Card } from '@mui/material'
import React from 'react'
import Navbar from './Navbar';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box><Navbar />
    <Box>
      
      <Box id="homePage">
        <Link to="/kidsShoes">
          <img id='kidsImage' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_981,c_limit/2bb48328-a124-4683-b785-cadae17e8eea/nike-just-do-it.jpg" alt="Kids"/>
        </Link>
        <Box style={{
          padding: "5%",
          textAlign:"Center"
        }}>
          <Typography id="h3">The Best Gifts Move You</Typography>
          <Typography id="h1">UNWRAP POSSIBILITIES</Typography>
          <Typography id="h3">This holiday, give more than a gift. give the joy of Possiblity. Inspire a specisal someone to chase that runners high.</Typography>
          <Typography id="h3">To dance like nobody's watching.</Typography>
          <Typography id="h3">Not sure What to gift? Keep Scrolling For Some Tips.</Typography>
           <Link to="/menClothing"><button id="shopButton">Shop</button></Link>
           <Link to="/menShoes"><button id="shopButton">Explore More Gifts</button></Link>
           
        </Box>

        <Box>
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>Featured</Typography>
          <Box id="categoryBox">
            <Box id="category1"><Link to="/womenClothing"><button id="divButton">Gifts For Her</button></Link></Box>
            <Box id="category2"><Link to="/menClothing"><button id="divButton">Gifts For Him</button></Link></Box>
            <Box id="category3"><Link to="/kidsShoes"><button id="divButton">Gifts For Kids</button></Link></Box>
          </Box>
        </Box>

        <Box style={{
          marginTop:"80px"
        }}>
        <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>The Latest</Typography>
        <Box id="categoryBox2">
            <Box id="category12">
              <Typography id="firsttitle">Move to Zero</Typography>
              <Typography id="secondtitle">The Way Forward</Typography>
              <Link to="/menClothing"><button id="divButton2">Shop More</button></Link></Box>
            <Box id="category22">
            <Typography id="firsttitle">Just In</Typography>
              <Typography id="secondtitle">The Way Forward</Typography>
              <Link to="/womenClothing"><button id="divButton2">Shop Now</button></Link></Box>
          </Box>

        </Box>

        <Box style={{
          padding: "5%",
          textAlign:"Center",
          marginTop : "100px"
        }}>
          <Typography id="h3">Just Dropped</Typography>
          <Typography id="h1">MERCURIAL CR7</Typography>
          <Typography id="h1">NATIONAL TREASER</Typography>
          <Typography id="h3">Portugal's heritage is now on their biggest icon. PT</Typography>
          <Typography id="h3">To dance like nobody's watching.</Typography>
          <Typography id="h3">Not sure What to gift? Keep Scrolling For Some Tips.</Typography>
           <Link to="/menClothing"><button id="shopButton">Shop</button></Link>
        </Box>

        <Box style={{
          marginTop:"80px"
        }}>
        <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>The Essentials</Typography>
        <Box id="categoryBox2">
            <Box id="category13">
              <Typography id="firsttitle">Keep Running With Infinity</Typography>
              <Link to="/menClothing"><button id="divButton2">Shop </button></Link></Box>
            <Box id="category23">
            <Typography id="firsttitle">Versity Vibes</Typography>
              <Link to="/womenClothing"><button id="divButton2">Shop </button></Link></Box>
          </Box>

        </Box>

        <Box style={{
          padding: "5%",
          textAlign:"Center",
          marginTop : "100px"
        }}>
          <Typography id="h3">Nike Air Max TW</Typography>
          <Typography id="h1">UNCOVER THE NEXT</Typography>
          <Typography id="h3">Let Your Style Do The Talking</Typography>
          <Typography id="h3">Featuring an unmissable wavy design and street-ready cushioning.</Typography>
           <Link to="/menClothing"><button id="shopButton">Shop</button></Link>
        </Box>

        {/* -----------Create Carousal Here -------------- */}

        <Box>
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>More Nike</Typography>
          <Box id="categoryBox">
            <Box id="category14"><Link to="/menClothing"><button id="divButton3">Men's</button></Link></Box>
            <Box id="category24"><Link to="/womenClothing"><button id="divButton3">Women's</button></Link></Box>
            <Box id="category34"><Link to="/kidsShoes"><button id="divButton3">Kids'</button></Link></Box>
          </Box>
        </Box>

      <Box id="linkBox">
        <Box id="child">
          <Box id="subchild">
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>Icons</Typography>
            <Link id="bottomLink" to="/menClothing">Air Force 1</Link>
            <Link  id="bottomLink"to="/menClothing">Huarache</Link>
            <Link  id="bottomLink" to="/womenClothing">Air Max 90</Link>
            <Link  id="bottomLink" to="/womenClothing">Air Max 95</Link>
          </Box>
          <Box id="subchild">
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>Shoes</Typography>
            <Link id="bottomLink" to="/menShoes">All Shoes</Link>
            <Link  id="bottomLink" to="/menShoes">Custom Shoes</Link>
            <Link  id="bottomLink" to="/womenShoes">Jordan Shoes</Link>
            <Link  id="bottomLink" to="/womenShoes">Runnig Shoes</Link>
          </Box>
        </Box>
        <Box id="child">
          <Box id="subchild">
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>Clothing</Typography>

          <Link  id="bottomLink" to="/menClothing">All Clothing</Link>
            <Link  id="bottomLink" to="/womenClothing">Modest Wear</Link>
            <Link  id="bottomLink" to="/menClothing">Hoodies & Pulvers</Link>
            <Link  id="bottomLink" to="/womenClothing">Shirts & Tops</Link>
          </Box>
          <Box id="subchild">
          <Typography id="h3" style={{textAlign:"left",fontSize:"30px"}}>Kids'</Typography>
            <Link  id="bottomLink" to="/kidsShoes">Infant & Toodler Shoes</Link>
            <Link  id="bottomLink" to="/kidsShoes">Kids's Shoes</Link>
            <Link  id="bottomLink" to="/wokidsShoes">Kids's Jordan Shoes</Link>
            <Link  id="bottomLink" to="/wokidsShoes">Kids's Basketball Shoes</Link>
          </Box>
        </Box>
      </Box>

      </Box>
      
    </Box>
    <Footer />
    </Box>
  )
}

export default Home