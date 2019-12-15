import React, { useState, useEffect } from "react";

function TimeLeft({ state }) {
  let [count, setCount] = useState(false);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(25);
  let [isPlaying, setIsPlaying] = useState(false);
  let { playing, session, bCount } = state;
  function secDec() {
    if (seconds === 0) {
      setSeconds(60);
      console.log("zero");
      console.log(seconds);
      setMinutes(minutes - 1);
      return;
    }
    console.log("everything else");
    setSeconds(seconds - 1);
  }

  function timerLogic() {
    console.log("timer logic");
    secDec();
    if (isPlaying && session.play) {
    }
  }
  useEffect(() => {
    setIsPlaying(playing);
    console.log("playing!");
  }, [isPlaying]);
  useEffect(() => {
    setTimeout(() => timerLogic(), 1000);
  }, [isPlaying]);

  function numFormat() {
    if (Number(seconds) < 10) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  function CountDown() {
    if (session.playing) {
      return (
        <div className="time-left-wrapper">
          <p id="time-left">{numFormat()}</p>
        </div>
      );
    } else {
      return (
        <div className="time-left-wrapper">
          <p id="time-left">{numFormat()}</p>
        </div>
      );
    }
  }
  return <CountDown />;
}
export default TimeLeft;
