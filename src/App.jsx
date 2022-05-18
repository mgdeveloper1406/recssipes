import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import './App.css';
import React from 'react';

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
    </div>
  );
};

export default App;
