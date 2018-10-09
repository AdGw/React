import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'
import ContactListItem from './ContactListItem'

function getContactsListItem(contact){
    return(
        <ContactListItem key={contact.id} contact={contact}/>
    );
}

class Contacts extends Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: []
        }
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
        AppStore.addChangeListener(this.onChange);
    }

    componentDidMount(){
        AppActions.recieveContacts();
    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this.onChange);
    }

    onChange(){
        this.setState({
            contacts : AppStore.getContacts()
        });
    }

    render() {
        let contactListItems;
        if(this.state.contacts){
            contactListItems = this.state.contacts.map(contact=> getContactsListItem(contact))
        }   
        return (
            <div>
                <ListGroup>
                    {contactListItems}
                </ListGroup>
            </div>
        );
    }
}

export default Contacts;
