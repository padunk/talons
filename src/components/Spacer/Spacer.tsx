import * as React from "react";

export const Spacer = ({ size, inline }: any) => (
  <span
    style={{
      width: size,
      height: size,
      display: inline ? "inline-block" : "block",
    }}
  />
);
