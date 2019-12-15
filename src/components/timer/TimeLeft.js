import React, { useState, useEffect } from "react";

function TimeLeft({ timerMin, timerSec, playing, setPlaying }) {
  const [localMin, setLocalMin] = useState(25);
  const [localSec, setLocalSec] = useState(5);

  function timerLogic() {
    if (localMin === 0 && localSec === 0) {
      setLocalSec(0);
      setLocalMin(0);
      setPlaying(false);
      return;
    }
    if (localSec === 0) {
      setLocalSec(59);
      setLocalMin(num => num - 1);
    }
    setLocalSec(num => num - 1);
  }

  useEffect(() => {
    setLocalMin(timerMin);
    setLocalSec(timerSec);
    console.log("onho");
  }, []);

  useEffect(() => {
    if (playing) {
      let id = setInterval(() => timerLogic(), 1);
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
