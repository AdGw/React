import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
// store.subscribe(()=>console.log(store.getState()));
<App />
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exac path = "/" component={App} />
                <Route path = "/favorites" component={FavoriteRecipeList}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
)

