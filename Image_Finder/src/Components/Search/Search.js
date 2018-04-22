import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component{
    state ={
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '8770393-3564736d346d9dc87adf8332a',
        images: []
    }

    onTextChange = (ev) =>{
        this.setState({
            [ev.target.name]: ev.target.value 
        });
    }

  render(){
      return(
        <div>
            <TextField 
            name = "searchText" 
            value ={this.state.searchText} 
            onChange={this.onTextChange} 
            floatingLabelText = "Search for images" 
            fullWidth={true}
            />
            <br />
            <SelectField
                name = "amount"
                floatingLabelText = "Amount"
                value = {this.state.amount}
                onChange = {this.onAmountChange}>

                <MenuItem value = {1} primaryText = "1" />
                <MenuItem value = {5} primaryText = "5" />
                <MenuItem value = {10} primaryText = "10" />
                <MenuItem value = {15} primaryText = "15" />
                <MenuItem value = {30} primaryText = "30" />
            </SelectField>
            <br />
        </div>  
      )
  }
}

export default Search;