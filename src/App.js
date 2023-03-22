import React from "react";
import "./assets/scss/style.scss";

import LandingPage from "pages/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
