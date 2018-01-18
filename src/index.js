import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import BoardPage from './BoardPage';

import 'bootstrap/dist/css/bootstrap.css';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());


    
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/board/:id" component={BoardPage} />
            </Switch>
        </Router>

    </Provider>,
    document.getElementById('root')
);
