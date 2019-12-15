import React, { useState } from "react";

function Session() {
  return (
    <div>
      <h2 id="session-label">session Length</h2>
      <div className="session-content">
        <h2 id="session-length">1</h2>
        <div className="btn-wrapper">
          <button onClick={() => {}} id="session-decrement">
            DEC
          </button>
          <button onClick={() => {}} id="session-increment">
            INC
          </button>
        </div>
      </div>
    </div>
  );
}
export default Session;
