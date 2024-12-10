import React from 'react'
import Header from "../src/Component/Header/Header"
import { Routes,Route } from 'react-router-dom'
import Home from '../src/Component/Home/Home'
import Project from "../src/Component/Project/Project"
import About from "../src/Component/About/About"
import Footer from "../src/Component/Footer/Footer"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default App