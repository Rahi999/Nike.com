import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import { menClothingFailureFunction, menClothingLoadingFunction, menClothingSuccessFunction } from '../Redux/AppReducer/action';
import {Box,Typography} from "@mui/material" ;
import "./men.module.css"

const MenClothing = () => {
    
  const dispatch = useDispatch();
  const [limit,setLimit] = useState(20);
  const [page,setPage] = useState(1);

  useEffect(() => {
     dispatch(menClothingLoadingFunction());
     axios.get(`http://localhost:8080/Men_Clothing?_limit=${limit}&_page=&{page}`)
     .then((res) => dispatch(menClothingSuccessFunction(res.data)))
     .catch((err) => dispatch(menClothingFailureFunction()))
  },[limit,page]);

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
      <Box style={{display:"flex",justifyContent : "space-between",padding:"10px"}}>
      <Typography id="h3">Men's Clothing({menClothes ? menClothes.length : 0})</Typography>
      <Typography id="h3">SortBy</Typography>
      <Typography id="h3">Set Limit</Typography>

      </Box>
      <Box id="menClotheContainer" >
        <Box id="container1" ></Box>
        <Box id="container2" >
          {menClothes && menClothes.map((items) => (
           <Link key={items.id} to={`/menClothing/${items.id}`} style={{textDecoration:"none"}}>
             <Box id="mappedBox" >
                 <img src={items.image} alt={items.title} />
                 <Typography  id="description">{items.description}</Typography>
                 <Typography id="title">{items.title}</Typography>
                 <Typography id="color">{items.color}</Typography>
                 <Typography id="price">{items.price}</Typography>
                 
             </Box>
           </Link>
          ))}
        </Box>
      </Box>
    
    </Box>
  )
}

export default MenClothing