import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/candy'>
          <Candy />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
