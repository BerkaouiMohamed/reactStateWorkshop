import React, { useState } from "react";

function Counter2() {
  // console.log(useState())
  const [counter,setCounter]=useState(1)
    // var counter = 1;
    function plus(){

      setCounter(counter+1)
    }
    
    console.log("hello")
  return (
    <div>
      <button onClick={plus}>+</button>
      <h1>{counter}</h1>
      <button>-</button>
    </div>
  );
}

export default Counter2;
