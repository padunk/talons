import React from "react";
import { useParams } from "react-router-dom";

export function EnterPage() {
  let { enterParams } = useParams();
  console.log(enterParams);

  if (enterParams === "login") {
    return <div>Login</div>;
  } else {
    return <div>Enter</div>;
  }
}
