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
  }

  function dec() {
    if (bCount <= 0) {
      return;
    }
    setBCount((bCount -= 1));
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
      <Controls dispatch={dispatch} />
    </section>
  );
}

function TimeLeft({ state }) {
  const [count, setCount] = useState(25);

  const [isPlaying, setIsPlaying] = useState(false);
  const { playing, session, bCount } = state;
  useEffect(() => {
    setCount(playing);
    console.log("playing!");
  }, [playing]);
  useEffect(() => {}, [session]);

  function CountDown() {
    if (session.playing) {
      return (
        <div className="time-left-wrapper">
          <p id="time-left">{session.count}</p>
        </div>
      );
    } else {
      return (
        <div className="time-left-wrapper">
          <p id="time-left">{bCount.count}</p>
        </div>
      );
    }
  }
  return <CountDown />;
}

function Controls({ dispatch }) {
  return (
    <div className="controls-wrapper">
      <button onClick={() => dispatch({ type: "START_STOP" })} id="start_stop">
        Start
      </button>
      <button onClick={() => dispatch({ type: "SESSINC" })} id="reset">
        Reset
      </button>
    </div>
  );
}
