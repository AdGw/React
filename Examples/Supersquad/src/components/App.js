import React , {Component} from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css'
import HeroList from './HeroList'

class App extends Component{
    render(){
        return(
            <div className = "App">
                <div className = "col-md-6">
                    <CharacterList/>
                </div>
                <div className = "col-md-6">
                    <HeroList/>
                </div>
            </div>
        )
    }
}

export default App;