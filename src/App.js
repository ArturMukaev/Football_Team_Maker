import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {StartPage} from "./pages/StartPage"
import {MainPage} from "./pages/MainPage";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route path={"/"} exact component={StartPage}/>
              </Switch>
              <Switch>
                  <Route path={"/main"} exact component={MainPage}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
