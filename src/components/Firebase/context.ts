import { createCtx } from "../../utils/createCtx";
import Firebase from ".";

// export const FirebaseContext = React.createContext(null);
export const [useFirebaseContext, FirebaseContextProvider] = createCtx<
  Firebase
>();
