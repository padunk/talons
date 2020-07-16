import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { Layout } from "./components/Layout/Layout";
import { MAIN_ROUTES, NAV_ROUTES } from "./constants/constants";
import { ResetPasswordPage } from "./components/ResetPasswordPage/ResetPasswordPage";
import { useFirebaseContext } from "./components/Firebase";
import { Developers } from "./components/Developers/Developers";
import { UserAccountPage } from "./components/UserAccountPage/UserAccountPage";

function App() {
  const [authUser, setAuthUser] = React.useState<firebase.User>();
  const firebaseContext = useFirebaseContext();

  React.useEffect(() => {
    const listener = firebaseContext.auth.onAuthStateChanged(
      (authUsr: firebase.User | null) => {
        authUsr ? setAuthUser(authUsr) : setAuthUser(undefined);
      }
    );

    return () => listener();
  });

  return (
    <div>
      <Layout authUser={authUser}>
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
            <UserAccountPage authUser={authUser} />
          </Route>
          <Route path={NAV_ROUTES[0].path}>
            <Developers />
          </Route>
          <Route path={NAV_ROUTES[1].path}>
            <ResetPasswordPage />
          </Route>
          <Route path={NAV_ROUTES[2].path}>
            <ResetPasswordPage />
          </Route>
          <Route path={NAV_ROUTES[3].path}>
            <ResetPasswordPage />
          </Route>
          <Route path={NAV_ROUTES[4].path}>
            <ResetPasswordPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
