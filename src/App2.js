import React, { useState } from "react";
import Cart from "./Cart";

function App2() {
  const [state, setState] = useState(true);
//   var a;
//   if (state) {
//     a = <Cart />;
//   }
//   else{
//     a=null
//   }
  function showCart(){
    setState(!state)
  }

  return (
    <div>
      <button onClick={showCart}>{state?"hide":"show"}</button>
      {/* {a} */}
      {state===true?<Cart/>:null}
    </div>
  );
}

export default App2;
