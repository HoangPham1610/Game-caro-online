import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoute from './router/route';
import PersistedStore from './store/appStore';
ReactDOM.render(
<Provider store = {PersistedStore.getDefaultStore().store}>
    <Router>
        <App />
        <AppRoute/>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
