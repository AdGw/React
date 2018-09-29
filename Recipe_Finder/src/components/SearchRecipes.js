import React, { Component } from 'react'
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap'

class SearchRecipes extends Component {
  render() {
    return (
        <Form>
            <FormGroup>
                <ControlLabel>
                    Ingrediens
                </ControlLabel><br/>
                { " " }
                <FormControl className = "form-control" type="text" placeholder = "garlic, chicken"/>
            </FormGroup>
            { " " }
            <FormGroup>
                <ControlLabel>
                    { ' ' }
                    Dish
                </ControlLabel><br/>
                <FormControl className = "form-control" type="text" placeholder = "adobo"/>
            </FormGroup>
            { ' ' }
            <Button>Submit</Button>
        </Form>
    )
  }
}

export default SearchRecipes;