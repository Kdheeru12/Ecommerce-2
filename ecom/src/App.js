import React from 'react'
import Login from './Users/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Cart} />
        </Switch>
    </BrowserRouter>
  )
}
