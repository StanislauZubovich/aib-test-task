import React from 'react';
import Header from "./Header/Header";
import MarketsList from "./MarketsList/MarketsList";
import CoinList from "./CoinList/CoinList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <MarketsList />
            </Route>
            <Route path="/coin/:coinId">
              <CoinList/>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
