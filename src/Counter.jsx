import React from "react";

function Counter() {
    //   function changeColor(event,param) {
        //     // return function () {
            //     //     console.log(param)
//     // };
//     event.target.style.background=param

//   }

// function highorderfunc(){
    //     return changeColor("hello")
    // }
    var counter = 1;
  return (
    <div>
      {/* <button
        onClick={(e)=>changeColor(e,"green")}>
        change color
      </button> */}
      <button>+</button>
      <h1>{counter}</h1>
      <button>-</button>
    </div>
  );
}

export default Counter;
