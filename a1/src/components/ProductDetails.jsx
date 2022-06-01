import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

 
const ProductDetails = () => {
 const [product, setProduct ] = useState({});
 const { id } = useParams();

 useEffect(()=> {
    if(id){
          fetch(`http://fakestoreapi.com/users/${id}`)
          .then((res)=> res.json())
          .then((data)=> setProduct(data))
          .catch((err)=> alert("Product does not exist"))
    }
     
 },[id])

  return (
    <div>ProductDetails : {id}
    <h1>Name: {product.username}</h1>
     <h1>Phone: {product.phone}</h1>


    </div>
  )
}

export default ProductDetails