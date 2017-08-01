// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import './styles/App.css';
import './styles/style.css';
// import Auth0Lock from 'auth0-lock'
import Nav from './components/common/Nav.jsx';
import Footerr from './components/common/Footer.jsx';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
// import routes from './routes';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';
// import { connect } from 'react-redux';

// const store = configureStore();
// store.dispatch(loadArticles());

class App extends Component {
  render() {
    return (
      <div>
        {/*<Provider store={ store }>
          <Router history={ browserHistory } routes={ routes } />
        </Provider>*/}
        <Nav />
        {this.props.children}
        <Footerr />
        <Alert stack={{limit: 3}} effect='genie' timeout={5000} />
      </div>
    );
  }
}

export default App;
