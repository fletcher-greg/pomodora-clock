import React, { useState, useEffect, useContext, useReducer } from "react";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import "./App.css";

function App() {
  const [timerMin, setTimerMin] = useState(25);
  const [timerSec, setTimerSec] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [update, setUpdate] = useState(false);

  function myReset() {
    setTimerMin(25);
    setTimerSec(0);
    setPlaying(false);
    setUpdate(true);
    return;
  }

  return (
    <div className="App">
      <Break />
      <Session
        setUpdate={setUpdate}
        timerMin={timerMin}
        setTimerMin={setTimerMin}
      />
      <Timer
        update={update}
        playing={playing}
        setPlaying={setPlaying}
        myReset={myReset}
        setUpdate={setUpdate}
        timerSec={timerSec}
        setTimerSec={setTimerSec}
        timerMin={timerMin}
        setTimerMin={setTimerMin}
      />
    </div>
  );
}

export default App;
