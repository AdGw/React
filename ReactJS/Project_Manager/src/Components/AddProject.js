import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
      super();
      this.state = {
        newProject:{
          id: uuid.v4()
        }
      }
  }

  static defaultProps = {
    categories: ['Web Design' , 'Web Development',
    'Mobile Development']
  }

  handleSubmit(ev){
    if(this.refs.title.value === ''){
      alert('Title is required');
    }else{
      this.setState({newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject)
      });
    }
    ev.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category=>{
      return <option key={category} value ={category}>
      {category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type = "text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type = "submit" value = "submit"/>
          <br />
        </form>
      </div>
    );
  }
}

export default AddProject;
