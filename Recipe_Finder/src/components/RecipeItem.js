import React, { Component } from 'react'
import {favoriteRecipe} from '../actions';
import {connect} from 'react-redux'

class RecipeItem extends Component {
  render() {
      let {recipe} = this.props;
    return (
        <div className='recipe-item'>
            <div className = "star" onClick={()=>this.props.favoriteRecipe(recipe)}>
                &#9734;
            </div>
            <div className = "recipe-text">
                <a href = {recipe.href}><h3>{recipe.title}</h3></a>
                <p>{recipe.ingredients}</p>
            </div>
            <img className= "recipe-image" src = {recipe.thumbnail} alt = {recipe.title}/>
        </div>
        )
    }
}

export default connect(null, {favoriteRecipe})(RecipeItem);