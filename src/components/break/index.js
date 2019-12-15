import React, { useState } from "react";

function Break({ dispatch }) {
  let [bCount, setBCount] = useState(5);

  function inc() {
    if (bCount >= 60) {
      return;
    }
    setBCount((bCount += 1));
    dispatch({ type: "BINC" });
  }

  function dec() {
    if (bCount <= 0) {
      return;
    }
    setBCount((bCount -= 1));
    dispatch({ type: "BDEC" });
  }

  function brTime() {
    return bCount;
  }

  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div className="break-content">
        <h2 id="break-length">{brTime()}</h2>
        <div className="btn-wrapper">
          <button onClick={() => dec()} id="break-decrement">
            DEC
          </button>
          <button onClick={() => inc()} id="break-increment">
            INC
          </button>
        </div>
      </div>
    </div>
  );
}
export default Break;
