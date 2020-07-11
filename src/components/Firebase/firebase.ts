import app from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../constants/constants";

export class Firebase {
  auth: any;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail();

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser.updatePassword();
}
