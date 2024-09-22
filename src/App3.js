import React, { useState } from "react";
import Box from "./Box";
import AddProduct from "./AddProduct";
var products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

function App3() {
  const [arrayOfProducts, setArrayOfProducts] = useState(products);
  const [product, setProduct] = useState({ title: "", price: "" });
  function addProd() {
    setArrayOfProducts([...arrayOfProducts,product])
  }
  function deleteProduct(product) {
    var newArray = arrayOfProducts.filter((prod) => prod.id !== product.id);
    // var res=[]
    // for (let i = 0; i < arrayOfProducts.length; i++) {
    //   if(arrayOfProducts[i].id!==product.id){
    //       res.push(arrayOfProducts[i])
    //   }
    // }
    setArrayOfProducts(newArray);
  }
  const arrayOfProductsJsx = arrayOfProducts.map((prod) => (
    <Box product={prod} deleteProduct={deleteProduct} />
  ));

  return (
    <div>
      {/* <div>
        <h1>add product</h1>
        title:
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <br />
        price:
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <br />
        <button onClick={addProd}>add</button>
      </div> */}
           <AddProduct  addProd={addProd} setProduct={setProduct} product={product}/>
      <div className="boxs-container">{arrayOfProductsJsx}</div>
    </div>
  );
}

export default App3;
