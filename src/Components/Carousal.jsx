import { Typography,Box } from "@mui/material";
import React from "react"
import Carousel from 'react-material-ui-carousel';
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom"

const Carousal = () =>  {

  
 const carouselData =  useSelector((state) => state.AppReducer.carouselData)
  console.log(carouselData)

    return (<div >
      <Carousel>
       {
        carouselData.map((item)=> <Box id="carousalDiv" ey={item.id}>
         <Box>
         <img src={item.image} alt="CarouselData Image" />
           <Box id="cdiv"  ><Typography style={{
            fontSize:"22px",
            fontStyle:"italic",
            color:"crimson"
           }} id='text1'>{item.title}</Typography>
           <Typography style={{
            fontSize:"22px",
            fontStyle:"italic",
            color:"black"
           }}  id='text2'>₹{item.price}</Typography></Box>
           <Box id="color"><Typography style={{
            fontSize:"20px",
            fontStyle:"italic",
            color:""
           }}  id="colortext">{item.color}</Typography>
</Box>
<Link to="/womenShoes"><button id="carousalButton">See More Details</button></Link>
         </Box>
        </Box>)
        }

        
      </Carousel>
      </div>
)
}
export default Carousal