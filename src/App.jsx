import Recipes from './components/Recipes/Recipes'
import ContactUsRecipes from './components/ContactUsRecipes'
import Footer from './components/comp-footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Recipes items={ContactUsRecipes} />
      <Footer />
    </div>
  )
}

export default App
