import React, { useState } from "react";

function Session({ dispatch }) {
  let [session, setSession] = useState(25);

  function inc() {
    if (session >= 60) {
      return;
    }
    setSession((session += 1));
    dispatch({ type: "SESSINC" });
  }

  function dec() {
    if (session <= 0) {
      return;
    }
    setSession((session -= 1));
    dispatch({ type: "SESSDEC" });
  }

  function sessTime() {
    return session;
  }

  return (
    <div>
      <h2 id="session-label">session Length</h2>
      <div className="session-content">
        <h2 id="session-length">{sessTime()}</h2>
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
