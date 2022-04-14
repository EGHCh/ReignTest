import React from "react";
import './Body.css'
import { Dropdown } from "./Dropdown"
import { DisplaySelector } from "./DisplaySelector"
import {NewsDisplay} from "./NewsDisplay"

export function Body() {
  return (
    <main className="main">
      <DisplaySelector/>
      <Dropdown/>
      <NewsDisplay/>
    </main>
  );
}
