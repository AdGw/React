import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes'
import '../styles/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Recipe Finder</h3>
        <SearchRecipes />
      </div>
    )
  }
}

export default App;