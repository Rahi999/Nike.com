import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link, Navigate, useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import { menClothingFailureFunction, menClothingLoadingFunction, menClothingSuccessFunction } from '../Redux/AppReducer/action';
import {Box,Typography,Checkbox} from "@mui/material" ;
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./men.module.css";
import Filter from "./Filter"
const SearchProducts = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [limit,setLimit] = useState(20);
    const [page,setPage] = useState(1);
    const [sort, setSort] = React.useState('');
    const [searchParams,setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const text = localStorage.getItem("searched");


      useEffect(() => {
        setLoading(true)
        axios.get( `http://localhost:8080/Men_Clothing?_limit=${limit}&_page=${page}&q=${text}`)
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
        .catch((err) => setError(true))
      },[page,limit,sort])
    const handleChange = (event, value) => {
      setPage(value);
    };
     
    const queryParams = {
      params: {
         query: text,
         _sort: sort && "price",
         _order: sort
      }
    };

    useEffect(() => {
      setSearchParams({
       page,
       limit,
       sort
      })
   },[page,limit,sort])
    
    
  return loading ? (<div id="menClothingContainer"><img width="30%" style={{marginLeft:"30%"}} src="https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif"  alt="Loading Logo"/></div>)
  : error ? (<div id="menClothingContainer"><img width="35%" style={{marginLeft:"30%"}} src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-2.gif" alt="Error Logo" /></div>)
  : (
    <Box id="searchedContainer">
       <Box style={{display:"flex",justifyContent : "space-between",padding:"10px"}}>
      <Typography id="h3">Searched Items({data ? data.length : 0})</Typography>

      {/* ------------- Filtering Contaier ------------------ */}
      <Box>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">SortBy Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={(e)=> setSort(e.target.value)}
          label="sortBy"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="desc">High To Low</MenuItem>
          <MenuItem value="asc">Low To High</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Items / Page</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={limit}
          onChange={(e)=> setLimit(e.target.value)}
          label="sortBy"
        >
          <MenuItem value="20">
            <em>Default</em>
          </MenuItem>
          <MenuItem value="20">20 Products</MenuItem>
          <MenuItem value="30">30 Products</MenuItem>
          <MenuItem value="40">40 Products</MenuItem>
          <MenuItem value="50">50 Products</MenuItem>
          <MenuItem value="100">100 Products</MenuItem>
        </Select>
      </FormControl>

      </Box>
      <Box id="menClotheContainer" >
        <Box id="container1" >
          <Filter />
        </Box>

        {/* -------------------      Products Container  ------- */}

        <Box id="container2" >
          {data && data.reverse().map((items) => (
           <Link key={items.id} to={`/menClothing/${items.id}`} style={{textDecoration:"none"}}>
             <Box id="mappedBox" >
                 <img src={items.image} alt={items.title} />
                 <Typography  id="description">{items.description}</Typography>
                 <Typography id="title">{items.title}</Typography>
                 <Typography id="color">{items.color}</Typography>
                 <Typography id="price">MRP : ₹ {items.price}</Typography>
                 
             </Box>
           </Link>
          ))}
        </Box>
      </Box>
      <Box style={{width:"50%",margin:"auto",padding:"20px",marginTop:"30px",borderRadius:"10px",backgroundColor:"#f5f5f5",textAlign:"center"}}>
      <Pagination size="large" variant="outlined"  count={data ? Math.floor(data.length/limit): 1 } page={page} onChange={handleChange} />
      </Box>
    
    </Box>
  )
}

export default SearchProducts