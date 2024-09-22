import React from 'react'

function Box({product,deleteProduct}) {
  return (
    <div className="box" >
      <img src={product.image}  alt=''/>
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={function(){deleteProduct(product)}} >delete</button>
    </div>
  )
}

export default Box