import React, { useState, useEffect } from "react";

function TimeLeft() {
  return (
    <div className="time-left-wrapper">
      <p id="time-left">{numFormat()}</p>
    </div>
  );
}
export default TimeLeft;
