import React, { useState } from "react";

function Break() {
  const [bLength, setBLength] = useState(5);

  function inc() {
    if (bLength < 60) {
      setBLength(num => num + 1);
      return;
    }
    return;
  }
  function dec() {
    if (bLength > 0) {
      setBLength(num => num - 1);
      return;
    }
    return;
  }
  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div className="break-content">
        <h2 id="break-length">{bLength}:00</h2>
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
