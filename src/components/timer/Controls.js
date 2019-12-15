import React from "react";

function Controls({ playing, setPlaying, myReset }) {
  return (
    <div className="controls-wrapper">
      <button onClick={() => setPlaying(!playing)} id="start_stop">
        {playing ? "Pause" : "Start"}
      </button>
      <button onClick={() => myReset()} id="reset">
        Reset
      </button>
    </div>
  );
}

export default Controls;
