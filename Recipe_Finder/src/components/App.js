import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes'
import RecipeList from './RecipeList'
import '../styles/styles.css';
import FavoriteRecipeList from './FavoriteRecipeList'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Recipe Finder</h3>
        <SearchRecipes />
        <RecipeList/>
        <FavoriteRecipeList/>
      </div>
    )
  }
}

export default App;