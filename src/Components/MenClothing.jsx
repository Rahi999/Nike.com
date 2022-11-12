import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import { menClothingFailureFunction, menClothingLoadingFunction, menClothingSuccessFunction } from '../Redux/AppReducer/action';
import {Box,Typography} from "@mui/material" ;
import "./men.module.css"

const MenClothing = () => {
    
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(menClothingLoadingFunction());
     axios.get("http://localhost:8080/Men_Clothing")
     .then((res) => dispatch(menClothingSuccessFunction(res.data)))
     .catch((err) => dispatch(menClothingFailureFunction()))
  },[]);

  const {menClothesLoading,menClothesError,menClothes} = useSelector((state) => {
    return {
      menClothesLoading : state.AppReducer.menClothesLoading,
      menClothesError :   state.AppReducer.menClothesError,
      menClothes :        state.AppReducer.menClothes
    }
  })
  //  console.log(menClothesLoading,menClothesError,menClothes)

  return menClothesLoading ? (<div id="menClothingContainer"><img width="30%" style={{marginLeft:"30%"}} src="https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif"  alt="Loading Logo"/></div>)
    : menClothesError ? (<div id="menClothingContainer"><img width="35%" style={{marginLeft:"30%"}} src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-2.gif" alt="Error Logo" /></div>)
    :(
    <Box id="menClothingContainer">
      <Box style={{display:"flex",justifyContent : "space-between"}}>
      <Typography id="h3">Men's Clothing({menClothes ? menClothes.length : 0})</Typography>
      <Typography id="h3">SortBy</Typography>
      <Typography id="h3">Set Limit</Typography>

      </Box>
      <Box id="menClotheContainer" >
        <Box id="container1" ></Box>
        <Box id="container2" >
          {menClothes && menClothes.map((items) => (
           <Link key={items.id} to={`/menClothing/${items.id}`}>
             <Box style={{border:"1px solid",height:"300px"}}  >
                 
             </Box>
           </Link>
          ))}
        </Box>
      </Box>
    
    </Box>
  )
}

export default MenClothing