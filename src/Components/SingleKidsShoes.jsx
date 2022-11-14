import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleKidsShoes = () => {
  const params = useParams();
  const [SingleMenShoesData,setSingleMenShoesData] = useState({});
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/kid_Shoes/${params.id}`)
    .then((res) => {
             setSingleMenShoesData(res.data);
             setLoading(false)
             })
             .catch((err) => {
                            setError(true)
                            // console.log(err)   
                            })  
  },[])
  console.log(params)
  // console.log(loading,error,SingleMenShoesData);
  
  return loading ? (<div id="menClothingContainer"><img width="30%" style={{marginLeft:"30%"}} src="https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif"  alt="Loading Logo"/></div>)
  : error ? (<div id="menClothingContainer"><img width="35%" style={{marginLeft:"30%"}} src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-2.gif" alt="Error Logo" /></div>)
  : (
    <div id="singleProductContainer">{params.id}</div>
  )
}

export default SingleKidsShoes