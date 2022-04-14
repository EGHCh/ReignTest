import React, { Fragment, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";

export function App() {
  return(
    <Fragment>
      <Navbar/>
      <Body/>
    </Fragment>
  )
}