import React, { useState } from "react";
import Controls from "./Controls";
import TimeLeft from "./TimeLeft";

function Timer({
  timerMin,
  playing,
  setPlaying,
  setTimerMin,
  timerSec,
  setTimerSec,
  myReset,
  setUpdate,
  update
}) {
  return (
    <section className="timer">
      <h2 id="timer-label">Session</h2>
      <TimeLeft
        setPlaying={setPlaying}
        playing={playing}
        timerMin={timerMin}
        timerSec={timerSec}
        update={update}
        setUpdate={setUpdate}
      />
      <Controls
        setUpdate={setUpdate}
        myReset={myReset}
        playing={playing}
        setPlaying={setPlaying}
      />
    </section>
  );
}

export default Timer;
