import React, { Component } from 'react';
import {FormGroup, Button} from 'react-bootstrap';
import AppActions from '../actions/AppActions'

class AddContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
        }
    }

    handleSubmit(e){
        if(this.refs.name.value == ''){
            alert('Name required')
        }else{
            this.setState({
                newContact: {
                    name: this.refs.name.value,
                    email: this.refs.email.value,
                    phone: this.refs.phone.value
                }
            },function(){
                AppActions.saveContact(this.state.newContact);
            });
            this.refs.name.value = '';
            this.refs.email.value = '';
            this.refs.phone.value = '';
        }
        e.preventDefault();
    }

    render() {
        return (
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <input className = "form-control" type = "text" ref = "name" placeholder="Add Name"/>
                    </FormGroup>
                    <FormGroup>
                        <input className = "form-control" type = "text" ref = "phone" placeholder="Add Phone"/>
                    </FormGroup>
                    <FormGroup>
                        <input className = "form-control" type = "text" ref = "email" placeholder="Add Email"/>
                    <Button type = "submit">Submit</Button>
                    </FormGroup>
                    
                </form>
        );
    }
}

export default AddContact;
