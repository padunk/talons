import * as React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

export function Layout(props: any) {
  return (
    <React.Fragment>
      <Navigation authUser={props.authUser} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
