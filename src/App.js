import React, { useState, useEffect, useContext, useReducer } from "react";
import { reducer, initialState } from "./store/reducer";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Break dispatch={dispatch} />
      <Session dispatch={dispatch} />
      <Timer state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
