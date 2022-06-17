import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '@components/pages/Home';
import Recipes from '@components/pages/Recipes';
import Blog from '@components/pages//Blog'
import About from '@components/pages/About';
import Contact from '@components/pages/Contact';

import { ToastProvider } from './contexts/ToastContext';

import './App.scss';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/recipes' element={<Recipes />} exact />
          <Route path='/blog' element={<Blog />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default App;
