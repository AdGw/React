import React, { Component } from 'react'
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap'

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

export default SearchRecipes;