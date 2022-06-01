import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route } from "react-router-dom"
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import AllProducts from './components/AllProducts'

function App() {

  return (
    <div className="App">
      <h1>Routing1</h1>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproduct" element={<AllProducts/>}/>
        <Route path="/allproducts/:id" element={<ProductDetails/>}/>

      </Routes>

    </div>
  )
}

export default App
