import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import RecipesData from '@api/RecipesData.json'
import TastyRecipes from '@organisms/TastyRecipes'
import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'
import Newsletter from '@organisms/Newsletter'
import CheckoutRecipes from '@organisms/CheckoutRecipes'

import './styles.scss'

const Recipe = () => {

  const { state } = useLocation()
  
  // erro se não tiver id correspondente a uma receita
  // "fetch" caso não tenha state
  // lembrar de mudar state em recipe (cards) e TastyRecipes

  return (
    <div className="recipePage">
      Recipe {state.title}
      <TastyRecipes data={RecipesData.slice(20, 23)}/>
      <AdvertisingCard data={AdvertisingData} />
      <Newsletter />
      <CheckoutRecipes />
    </div>
  )
}

export default Recipe
