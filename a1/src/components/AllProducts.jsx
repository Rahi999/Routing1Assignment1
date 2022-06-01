import React, { useEffect, useState } from 'react'
import {Link, Outlet} from "react-router-dom"


const AllProducts = () => {
  const [prod, setProd] = useState([]);

  useEffect(()=> {
      const data = ()=> {
          fetch("http://fakestoreapi.com/users")
          .then((res)=> res.json())
          .then((d)=> {
              console.log(d)
              setProd(d)
          })
      }
      data()
  },[])



  return (
    <div>AllProducts
   <div>
       {prod.map((p)=> (
           <div key={p.id} >
               <Link to={`/allProducts/${p.id}`}>{p.username}</Link>
           </div>
           
       ))}
   </div>
   <Outlet />


    </div>
  )
}

export default AllProducts