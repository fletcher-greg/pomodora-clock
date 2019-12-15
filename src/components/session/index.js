import React, { useState } from "react";

function Session({ setTimerMin, setUpdate }) {
  const [session, setSession] = useState(25);

  function inc() {
    if (session < 60) {
      setTimerMin(num => num + 1);
      setSession(num => num + 1);
      setUpdate(true);
      return;
    }
    return;
  }
  function dec() {
    if (session > 0) {
      setSession(num => num - 1);
      setTimerMin(num => num - 1);
      setUpdate(true);
      return;
    }
    return;
  }
  return (
    <div>
      <h2 id="session-label">session Length</h2>
      <div className="session-content">
        <h2 id="session-length">{session}:00</h2>
        <div className="btn-wrapper">
          <button onClick={() => dec()} id="session-decrement">
            DEC
          </button>
          <button onClick={() => inc()} id="session-increment">
            INC
          </button>
        </div>
      </div>
    </div>
  );
}
export default Session;
