import React, { useState } from "react";

function AddProduct({addProd,setProduct,product}) {

  return (
    <div>
      <h1>add product</h1>
      title:
      <input type="text"  onChange={(e)=>setProduct({...product,title:e.target.value})}/> <br />
      price:
      <input type="text" onChange={(e)=>setProduct({...product,price:e.target.value})} /> <br />
      <button onClick={addProd} >add</button>
    </div>
  );
}

export default AddProduct;
