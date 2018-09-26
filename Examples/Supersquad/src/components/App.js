import React , {Component} from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css'

class App extends Component{
    render(){
        return(
            <div className = "App">
                <CharacterList/>
            </div>
        )
    }
}

export default App;