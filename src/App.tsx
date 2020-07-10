import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LoginButton } from "./components/LoginButton/LoginButton";
import { RegisterButton } from "./components/RegisterButton/RegisterButton";
import { Layout } from "./components/Layout/Layout";
import { EnterPage } from "./components/Enter/EnterPage";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/enter/:enterParams'>
            <EnterPage />
          </Route>
          <Route path='/enter/:enterParams'>
            <EnterPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
