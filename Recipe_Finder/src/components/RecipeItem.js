import React, { Component } from 'react'

class RecipeItem extends Component {
  render() {
      let {recipe} = this.props;
    return (
        <div className='recipe-item'>
            <div className = "recipe-text">
                <a href = {recipe.href}><h3>{recipe.title}</h3></a>
                <p>{recipe.ingredients}</p>
            </div>
            <img className= "recipe-image" src = {recipe.thumbnail} alt = {recipe.title}/>
        </div>
        )
    }
}

export default RecipeItem;