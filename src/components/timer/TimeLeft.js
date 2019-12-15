import React, { useState, useEffect } from "react";

function TimeLeft({ timerMin, timerSec, playing }) {
  const [localMin, setLocalMin] = useState(25);
  const [localSec, setLocalSec] = useState(5);

  useEffect(() => {
    setLocalMin(timerMin);
    setLocalSec(timerSec);
    console.log("onho");
  }, []);
  useEffect(() => {
    if (playing) {
      let id = setInterval(() => setLocalSec(sec => sec - 1), 1000);
      return () => clearInterval(id);
    }
  }, [playing, localSec]);
  return (
    <div className="time-left-wrapper">
      <p id="time-left">
        {localMin}:{localSec < 10 ? `0${localSec}` : localSec}
      </p>
    </div>
  );
}
export default TimeLeft;
