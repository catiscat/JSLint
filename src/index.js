import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import './sass/main.scss'

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

function renderRoutes() {
  const a = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
  return a;
}

ReactDOM.render((
  <Router>
    <div>
      {renderRoutes()}
    </div>
  </Router>
), document.getElementById('mount'));
