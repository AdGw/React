import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class SearchRecipes extends Component {
    constructor(){
        super();
        this.state={
            ingrediens: '',
            dish: ''
        }
    }
    search(state){
        let {
            ingrediens, dish
        }=this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingrediens}&q=${dish}`;
        fetch(url,{
            method: 'GET'
        })
        .then(response=>response.json())
        .then(json => {
            this.props.setRecipes(json.results);
        });
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <ControlLabel>
                        Ingrediens
                    </ControlLabel><br/>
                    { " " }
                    <FormControl 
                    className = "form-control" type="text" 
                    placeholder = "garlic, chicken"
                    onChange={event=>this.setState({
                        ingrediens: event.target.value
                    })}/>
                </FormGroup>
                { " " }
                <FormGroup>
                    <ControlLabel>
                        { ' ' }
                        Dish
                    </ControlLabel><br/>
                    <FormControl 
                    className = "form-control" type="text" 
                    placeholder = "adobo"
                    onChange={event=>this.setState({
                        dish: event.target.value
                    })}/>
                </FormGroup>
                { ' ' }
                <Button onClick={()=>this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, {setRecipes})(SearchRecipes);