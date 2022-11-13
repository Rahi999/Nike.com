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



const MenClothing = () => {
    
  const dispatch = useDispatch();
  const [limit,setLimit] = useState(20);
  const [page,setPage] = useState(1);
  const [allData,setAllData] = useState([]);
  const [sort, setSort] = React.useState('');
  const [searchParams,setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [text,setText] = useState('')

  // const handleSortChange = (event) => {
  //   setAge(event.target.value);
    
  // };
  // alert(age)
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
     dispatch(menClothingLoadingFunction());
     axios.get(`http://localhost:8080/Men_Clothing?_limit=${limit}&_page=${page}`,queryParams)
     .then((res) => dispatch(menClothingSuccessFunction(res.data)))
     .catch((err) => dispatch(menClothingFailureFunction()))
  },[limit,page,sort,text]);

  useEffect(() => {
    dispatch(menClothingLoadingFunction());
    axios.get("http://localhost:8080/Men_Clothing")
    .then((res)=> {
      setAllData(res.data)
       
    })
    .catch((err) => null)
  },[])

  useEffect(() => {
     setSearchParams({
      page,
      limit,
      sort
     })
  },[page,limit,sort])

  const {menClothesLoading,menClothesError,menClothes} = useSelector((state) => {
    return {
      menClothesLoading : state.AppReducer.menClothesLoading,
      menClothesError :   state.AppReducer.menClothesError,
      menClothes :        state.AppReducer.menClothes
    }
  })
  //  console.log(menClothesLoading,menClothesError,menClothes)
  // alert(text)
  
  return menClothesLoading ? (<div id="menClothingContainer"><img width="30%" style={{marginLeft:"30%"}} src="https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif"  alt="Loading Logo"/></div>)
    : menClothesError ? (<div id="menClothingContainer"><img width="35%" style={{marginLeft:"30%"}} src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-2.gif" alt="Error Logo" /></div>)
    :(
    <Box id="menClothingContainer">
      <Box style={{display:"flex",justifyContent : "space-between",padding:"10px"}}>
      <Typography id="h3">Men's Clothing({allData ? allData.length : 0})</Typography>

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
          <Typography id="h3" style={{textAlign:"left"}}>Category</Typography>
          <Link id="categoryAncer" to="/menShoes" >Shoes</Link>
          <Link id="categoryAncer" to="/menClothing" >Tops & T-shirts</Link>
          <Link id="categoryAncer" to="/womenClothing" >Women Clothing</Link>
          <Link id="categoryAncer" to="/womenShoes" >Women Shoes</Link>
          <Link id="categoryAncer" to="/kidsShoes" >Kids</Link>
          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Gender(2)</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px"}} >Male</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenClothing")} color="default" />
          <Link id="categoryAncer" to="/womenClothing" style={{marginTop:"-1px"}} >Female</Link>
          </Box>
          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Kids</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px"}} >Shoes</Link>
          </Box>
          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Brand</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Nike Sportswear</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Jordan</Link>
          </Box>
           <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenShoes")} color="default" />
          <Link id="categoryAncer" to="/womenShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Nike By You</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenShoes")} color="default" />
          <Link id="categoryAncer" to="/womenShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Nike Lab</Link>
          </Box>

          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Sports</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Lifestyle</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenShoes")} color="default" />
          <Link id="categoryAncer" to="/womenShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Running</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Training & Gym</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",fontWeight:"bold"}} >Basketball</Link>
          </Box>

          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Collaborator</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",}} >Nike X MMW</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenClothing")} color="default" />
          <Link id="categoryAncer" to="/womenClothing" style={{marginTop:"-1px",}} >Sacai</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",}} >Stussy</Link>
          </Box>
          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Best For</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menClothing")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",fontweight:"bold"}} >Warm Weather</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenClothing")} color="default" />
          <Link id="categoryAncer" to="/womenClothing" style={{marginTop:"-1px",fontweight:"bold"}} >Wet Weather</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",fontweight:"bold"}} >Cold Weather</Link>
          </Box>

          <hr style={{marginTop:"20px"}} />
          <Typography id="h3" style={{textAlign:"left"}}>Atheletes</Typography>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/menShoes")} color="default" />
          <Link id="categoryAncer" to="/menShoes" style={{marginTop:"-1px",}} >LeBron James</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/womenClothing")} color="default" />
          <Link id="categoryAncer" to="/womenClothing" style={{marginTop:"-1px",}} >Kyrie Irving</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",}} >Kevin Duant</Link>
          </Box>
          <Box style={{display:"flex",height:"30px"}}>
          <Checkbox label="Male" onClick={()=>navigate("/kidsShoes")} color="default" />
          <Link id="categoryAncer" to="/kidsShoes" style={{marginTop:"-1px",}} >Paul George</Link>
          </Box>

        </Box>

        {/* -------------------      Products Container  ------- */}

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
      <Box style={{width:"50%",margin:"auto",padding:"20px",marginTop:"30px",borderRadius:"10px",backgroundColor:"#f5f5f5",textAlign:"center"}}>
      <Pagination size="large" variant="outlined"  count={allData ? Math.floor(allData.length/limit): 1 } page={page} onChange={handleChange} />
      </Box>
    
    </Box>
  )
}

export default MenClothing

