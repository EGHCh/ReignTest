import React from "react";
import './Body.css'
import { Dropdown } from "./Dropdown"
import { DisplaySelector } from "./DisplaySelector"

export function Body() {
  return (
    <main className="main">
      <DisplaySelector/>
      <Dropdown/>
    </main>
  );
}
