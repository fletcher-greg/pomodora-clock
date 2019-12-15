import React, { useState, useEffect, useContext, useReducer } from "react";
import { reducer, initialState } from "./store/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Break dispatch={dispatch} />
      <Session dispatch={dispatch} />
      <Timer state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

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

function Timer({ state, dispatch }) {
  useEffect(() => {});
  return (
    <section className="timer">
      <h2 id="timer-label">Session</h2>
      <TimeLeft state={state} />
      <Controls state={state} dispatch={dispatch} />
    </section>
  );
}

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
  }, [playing]);
  useEffect(() => {
    setInterval(() => timerLogic(), 1000);
  });

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

function Controls({ state, dispatch }) {
  return (
    <div className="controls-wrapper">
      <button
        onClick={() => {
          if (state.isPlaying) {
            console.log("it is true");
            dispatch({ type: "START_STOP" });
          } else {
            console.log("set session true");
            dispatch({ type: "SESSPLAY" });
          }
        }}
        id="start_stop"
      >
        Start
      </button>
      <button onClick={() => dispatch({ type: "RESET" })} id="reset">
        Reset
      </button>
    </div>
  );
}
