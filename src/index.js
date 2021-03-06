import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import AppContainer from './containers/AppContainer'
import * as serviceWorker from './serviceWorker';
//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'
// import store from './store';

let store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    
    , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
