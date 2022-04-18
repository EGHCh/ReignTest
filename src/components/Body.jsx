import React from "react";
import './Body.css'
import { DisplaySelector } from "./DisplaySelector"
import {NewsDisplay} from "./NewsDisplay"

export function Body() {
  return (
    <main className="main">
      <NewsDisplay/>
    </main>
  );
}
