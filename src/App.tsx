import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { Layout } from "./components/Layout/Layout";
import { MAIN_ROUTES } from "./constants";
import { ResetPasswordPage } from "./components/ResetPasswordPage/ResetPasswordPage";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path={MAIN_ROUTES.landing}>
            <Home />
          </Route>
          <Route exact path={MAIN_ROUTES.home}>
            <Home />
          </Route>
          <Route path={MAIN_ROUTES.register}>
            <RegisterPage />
          </Route>
          <Route path={MAIN_ROUTES.login}>
            <LoginPage />
          </Route>
          <Route path={MAIN_ROUTES["password-forget"]}>
            <ResetPasswordPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
