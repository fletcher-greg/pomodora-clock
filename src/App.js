import React, { useState, useEffect, useContext, useReducer } from "react";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import "./App.css";

function App() {
  const [timerMin, setTimerMin] = useState(25);
  const [timerSec, setTimerSec] = useState(0);
  const [playing, setPlaying] = useState(false);

  function myReset() {
    setTimerMin(25);
    setTimerSec(0);
    return;
  }

  return (
    <div className="App">
      <Break />
      <Session timerMin={timerMin} setTimerMin={setTimerMin} />
      <Timer
        myReset={myReset}
        timerSec={timerSec}
        setTimerSec={setTimerSec}
        timerMin={timerMin}
        setTimerMin={setTimerMin}
      />
    </div>
  );
}

export default App;
