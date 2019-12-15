import React, {useState, useEffect, useContext, useReducer} from 'react';
import {reducer, initialState} from './store/reducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <Break />
      <Session />
      <Timer dispatch={dispatch} />
    </div>
  );
}

export default App;



function Break(){
  
 let [bCount, setBCount] = useState(5)

 function inc(){
  if(bCount >= 60 ){
    return 
  }
  setBCount(bCount +=1)
}  

function dec(){
  if( bCount <=0){
    return 
  }
  setBCount(bCount -=1)
}  


 function brTime(){
  
  return bCount
}

return <div>
  <h2 id='break-label'>Break Length</h2>
  <div className="break-content">
  <h2 id="break-length">{brTime()}</h2>
  <div className="btn-wrapper">
    <button onClick={() => dec()} id="break-decrement">DEC</button>
    <button onClick={() =>inc()} id="break-increment">INC</button>
  </div>
  </div>
</div>
}


function Session(){
  let [session, setSession] = useState(25)

  function inc(){
    if(session >= 60 ){
      return 
    }
    setSession(session +=1)
  }  

  function dec(){
    if( session <=0){
      return 
    }
    setSession(session -=1)
  }  

  function sessTime(){
    
    return session
  }
 
 return <div>
   <h2 id='session-label'>session Length</h2>
   <div className="session-content">
   <h2 id="session-length">{sessTime()}</h2>
   <div className="btn-wrapper">
     <button onClick={() => dec()} id="session-decrement">DEC</button>
     <button onClick={() => inc()} id="session-increment">INC</button>
   </div>
   </div>
 </div>
 }


 function Timer({dispatch}){
   return <section className="timer">
     <h2 id="timer-label">Session</h2>
     <TimeLeft />
     <Controls dispatch={dispatch}/>
   </section>
 }


 function TimeLeft ({state}){
   return <div className="time-left-wrapper"><p id="time-left">25:00</p></div>
 }

 function Controls({dispatch}){
   return <div className="controls-wrapper">
     <button onClick={() => dispatch({type: 'START_STOP'})} id="start_stop">Start</button>
     <button onClick={() => dispatch({type: 'SESSINC'})} id="reset">Reset</button>
   </div>
 }