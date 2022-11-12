import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleMenClothes = () => {
  const params = useParams();
  const [SingleMenClothesData,setSingleMenClothesData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/Men_Clothing/${params.id}`)
    .then((res) => {
             setSingleMenClothesData(res.data);
             setLoading(false)
             })
             .catch((err) => {
                            setError(true)
                            console.log(err)   
                            })  
  },[])
  console.log(params)
  console.log(loading,error,SingleMenClothesData)
  return (
    <div id="singleProductContainer">{params.id}</div>
  )
}

export default SingleMenClothes