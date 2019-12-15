import React from "react";
import Controls from "./Controls";
import TimeLeft from "./TimeLeft";

function Timer() {
  return (
    <section className="timer">
      <h2 id="timer-label">Session</h2>
      <TimeLeft />
      <Controls />
    </section>
  );
}

export default Timer;
