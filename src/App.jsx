import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Recipes from './components/Recipes/Recipes'
import Newsletter from './components/Newsletter/Newsletter'
import ContactUsRecipes from './components/ContactUsRecipes'
import Footer from './components/Footer/Footer'

import './App.css'
import React from 'react'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/recipes' element={<Recipes />} exact />
        <Route path='/blog' element={<Blog />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
      <Newsletter />
      <Recipes items={ContactUsRecipes} />
      <Footer />

    </div>
  )
}

export default App;
