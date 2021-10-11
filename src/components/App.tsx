import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from 'components/layouts/Header';
import { Home, Products } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
