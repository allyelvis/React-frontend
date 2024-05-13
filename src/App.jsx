import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Retail from './pages/Retail';
import Restaurant from './pages/Restaurant';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/retail" component={Retail} />
        <Route path="/restaurant" component={Restaurant} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
