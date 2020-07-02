import * as React from "react";
import { Hero } from "../Hero/Hero";
import { Spacer } from "../Spacer/Spacer";
import { DisplayProjects } from "../DisplayProjects/DisplayProjects";

export function Home() {
  return (
    <div>
      <Hero />
      <Spacer size='2rem' />
      <DisplayProjects />
    </div>
  );
}
