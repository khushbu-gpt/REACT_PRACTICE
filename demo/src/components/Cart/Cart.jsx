import React, { useState } from "react";

const Cart = () => {
  const products = [
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Bread", price: 40 },
    { id: 3, name: "Eggs", price: 60 },
  ];
  const [cart, setCart] = useState([]);

 function addToCart(product) {
  setCart((prevCart) => {
    const exists = prevCart.find((item) => item.id === product.id);

    if (exists) {
  
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }


    return [...prevCart, { ...product, qty: 1 }];
  });
}
const total=cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)
  return (
    <div className="w-full">
      <div className="flex gap-10 my-10 mx-auto w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-amber-300 w-48 h-48 rounded-sm shadow flex gap-4
             flex-col justify-center items-center "
          >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              className="bg-white rounded shadow px-6 py-2 cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <hr className="border border-gray-200" />
      {cart.length == 0 && <p>Your Cart is Empty</p>}
      <div className="w-full flex gap-5 flex-col">
        {cart.map((products) => {
          return <div className="w-full bg-amber-50" key={products.id}>
            <p>Name:{products.name}</p>
            <p>Price:{products.price  }</p>
              <p>qty:{products?.qty}</p>
              <p>Total:{products.price*products.qty||1}</p>
          </div>
        })}
        <p>Total:{total}</p>
      </div>
    </div>
  );
};

export default Cart;
