import React, { useState } from "react";

function Break() {
  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div className="break-content">
        <h2 id="break-length">1</h2>
        <div className="btn-wrapper">
          <button onClick={() => {}} id="break-decrement">
            DEC
          </button>
          <button onClick={() => {}} id="break-increment">
            INC
          </button>
        </div>
      </div>
    </div>
  );
}
export default Break;
