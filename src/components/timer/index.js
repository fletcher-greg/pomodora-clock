import React, { useState } from "react";
import Controls from "./Controls";
import TimeLeft from "./TimeLeft";

function Timer({ timerMin, setTimerMin, timerSec, setTimerSec, myReset }) {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="timer">
      <h2 id="timer-label">Session</h2>
      <TimeLeft
        setPlaying={setPlaying}
        playing={playing}
        timerMin={timerMin}
        timerSec={timerSec}
      />
      <Controls myReset={myReset} playing={playing} setPlaying={setPlaying} />
    </section>
  );
}

export default Timer;
