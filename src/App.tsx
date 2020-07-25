import * as React from "react";
import { Layout } from "./components/Layout/Layout";
import { useFirebaseContext } from "./components/Firebase";
import { Routes } from "./routes/Routes";

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
        <Routes authUser={authUser} />
      </Layout>
    </div>
  );
}

export default App;
