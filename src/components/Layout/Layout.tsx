import * as React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { FixedRoundButton } from "../FixedRoundButton/FixedRoundButton";

export function Layout(props: any) {
  return (
    <React.Fragment>
      <Navigation authUser={props.authUser} />
      {props.children}
      <Footer />
      {props.authUser && <FixedRoundButton />}
    </React.Fragment>
  );
}
