import React from 'react'
import {Box,Typography,Checkbox,} from "@mui/material";
import {Link,useNavigate} from "react-router-dom";

const Filter = () => {
    const navigate = useNavigate
  return (
    <Box>
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
  )
}

export default Filter