import React from "react";

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

export default Controls;
