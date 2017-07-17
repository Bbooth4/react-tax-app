import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { Route, IndexRoute } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './components/common/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/*<Route path="course" component={CoursesPage} />*/}
  </Route>
);
