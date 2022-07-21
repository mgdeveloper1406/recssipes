import { Route, Routes } from 'react-router-dom'
import Navbar from '@organisms/Navbar'
import Footer from '@organisms/Footer'
import Home from '@components/pages/Home'
import Recipes from '@components/pages/Recipes'
import Recipe from '@components/pages/Recipe'
import Blog from '@components/pages//Blog'
import About from '@components/pages/About'
import Contact from '@components/pages/Contact'
import { ToastProvider } from './contexts/ToastContext'

import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipe/:recipeId' element={<Recipe />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </div>
  )
}

export default App
