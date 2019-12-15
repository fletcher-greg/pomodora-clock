import React from "react";
import Controls from "./Controls";
import TimeLeft from "./TimeLeft";

function Timer({ state, dispatch }) {
  return (
    <section className="timer">
      <h2 id="timer-label">Session</h2>
      <TimeLeft state={state} />
      <Controls state={state} dispatch={dispatch} />
    </section>
  );
}

export default Timer;
