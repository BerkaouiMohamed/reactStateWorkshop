import React, { useState } from "react";

function ShowName() {
  const [name,setName]=useState("salah")

  function changeName(e) {
    console.log(e)
   setName(e.target.value)
  }
console.log('render')
  return (
    <div>
      <input type="text" onChange={changeName} />
      <h1>{name}</h1>
    </div>
  );
}

export default ShowName;
