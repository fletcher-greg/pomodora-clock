import React from "react";

function Controls({ playing, setPlaying, myReset, setUpdate }) {
  return (
    <div className="controls-wrapper">
      <button
        onClick={() => {
          setUpdate(false);
          setPlaying(!playing);
        }}
        id="start_stop"
      >
        {playing ? "Pause" : "Start"}
      </button>
      <button onClick={() => myReset()} id="reset">
        Reset
      </button>
    </div>
  );
}

export default Controls;
