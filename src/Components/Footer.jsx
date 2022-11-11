import React from 'react'
import {Box,Avatar} from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  return (
    <Box>
      <Box id="footerContainer">
        <Box id="box1">
          <a href="#" id="ancer">FIND A STORE</a>
          <a href="#" id="ancer">BECOME A MEMBER</a>
          <a href="#" id="ancer">SIGN UP FOR EMAIL</a>
          <a href="#" id="ancer">SEND US FEEDBACK</a>
          <a href="#" id="ancer">STUDENTS DISCOUNTS</a>
        </Box>
        <Box id="box2">
          <a href="#" id="ancer">GET HELP</a>
          <a href="#" id="ancer2" >Order Status</a>
          <a href="#" id="ancer2" >Delivery</a>
          <a href="#" id="ancer2" >Returns</a>
          <a href="#" id="ancer2" >Contact Us On Nike.com</a>
          <a href="#" id="ancer2" >Inquiries</a>
          <a href="#" id="ancer2" >Contact Us On ALl Other Inquiries</a>
        </Box>
        <Box id="box3">
        <a href="#" id="ancer">ABOUT NIKE</a>
        <a href="#" id="ancer2" >News</a>
        <a href="#" id="ancer2" >Careers</a>
        <a href="#" id="ancer2" >Investors</a>
        <a href="#" id="ancer2" >Sustainability</a>

        </Box>
        <Box id="box4">
          <a href="https://twitter.com/AhilHussain8" target="_blank"><Avatar  src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" /></a>
          <a href="https://www.linkedin.com/in/rahim-ansari-43861922b" target="_blank"><Avatar  src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-vector-PNG.png" /></a>
          <a href="https://github.com/Rahi999" target="_blank"><Avatar  src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" /></a>
          <a href="https://rahim-ansari-masai.netlify.app/" target="_blank"><Avatar  src="https://w7.pngwing.com/pngs/683/384/png-transparent-white-and-gray-globe-logo-computer-icons-internet-world-wide-web-white-house-logo-website-brand.png" /></a>
        </Box>
      </Box>
      <Box id="footerbottomdiv" style={{backgroundColor:"#111111"}}>
      <a href="#" id="ancer3" >India</a>
      <a href="#" id="ancer3" >© 2022 Nike, Inc. All Rights Reserved</a>
      <a href="#" id="ancer3" >Guides</a>
      <a href="#" id="ancer3" >Terms Of Sale</a>
      <a href="#" id="ancer3" >Terms Of Use</a>
      <a href="#" id="ancer3" >Nike Privacy Policy</a>


      </Box>
    </Box>
  )
}

export default Footer