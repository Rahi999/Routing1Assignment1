import React from 'react'
import { Link } from "react-router-dom"
 
const Home = () => {
  return (
    <div>Home
         <Link to="/allproduct">AllProducts</Link>
         <Link to="/productDetails">ProductDetails</Link>
    </div>
  )
}

export default Home