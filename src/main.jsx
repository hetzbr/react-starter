import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HelloWorld } from './components/hello-world';
import './main.scss';

const Main = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" />
      <Route path="/hello-world" component={HelloWorld} />
    </Switch>
  </BrowserRouter>
);

render(<Main />, global.document.getElementById('main'));
