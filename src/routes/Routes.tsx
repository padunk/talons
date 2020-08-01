import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { RegisterPage } from "../components/RegisterPage/RegisterPage";
import { MAIN_ROUTES, NAV_ROUTES } from "../constants/constants";
import { ResetPasswordPage } from "../components/ResetPasswordPage/ResetPasswordPage";
import { Developers } from "../components/Developers/Developers";
import { UserAccountPage } from "../components/UserAccountPage/UserAccountPage";
import { Meetups } from "../components/Meetups/Meetups";
import { Blogs } from "../components/Blogs/Blogs";
import { Hiring } from "../components/Hiring/Hiring";
import { AddProject } from "../components/AddProject/AddProject";

export function Routes(props: any) {
  return (
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
      <Route path={MAIN_ROUTES.account}>
        <UserAccountPage authUser={props.authUser} />
      </Route>
      <Route path={NAV_ROUTES[0].path}>
        <Developers />
      </Route>
      <Route path={NAV_ROUTES[1].path}>
        <Home />
      </Route>
      <Route path={NAV_ROUTES[2].path}>
        <Meetups />
      </Route>
      <Route path={NAV_ROUTES[3].path}>
        <Blogs />
      </Route>
      <Route path={NAV_ROUTES[4].path}>
        <Hiring />
      </Route>
      <Route path='/add-project'>
        <AddProject />
      </Route>
    </Switch>
  );
}
