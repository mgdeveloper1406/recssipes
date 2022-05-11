import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'
import React from 'react'

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/recipes' element={<Recipes />} exact />
        <Route path='/blog' element={<Blog />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>

    </div>
  )
}


export default App;
