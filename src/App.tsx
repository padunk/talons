import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
