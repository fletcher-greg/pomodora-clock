import React, { useState, useEffect, useContext, useReducer } from "react";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Break />
      <Session />
      <Timer />
    </div>
  );
}

export default App;
