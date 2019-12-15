import React, { useState, useEffect, useContext, useReducer } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Break />
      <Session />
      <Timer />
    </div>
  );
}

export default App;
