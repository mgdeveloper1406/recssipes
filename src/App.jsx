import Recipes from './components/Recipes/Recipes'
import ContactUsRecipes from './components/ContactUsRecipes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Recipes items={ContactUsRecipes} />
    </div>
  )
}

export default App
