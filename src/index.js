import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './styles/App.css';
import './styles/style.css';
import './styles/index.css';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadPosts } from './actions/postsActions';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import { Route, BrowserRouter as Router } from 'react-router-dom'

const app = document.getElementById('root')

const store = configureStore();
store.dispatch(loadPosts());

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  app
);