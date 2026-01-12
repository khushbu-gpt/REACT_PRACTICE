import React, { useCallback, useMemo, useState } from "react";
import ProductCard from "../ProductList/ProductCard";
import { useCart } from "../CartContext";

const Cart = () => {
  const { addToCart, decreaseQty, removeItem, cart } = useCart();
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);
  return (
    <div className="w-full">
 
      {cart.length == 0 && <p>Your Cart is Empty</p>}
      <div className="w-full flex gap-5 flex-col">
        {cart.map((products) => {
          return (
            <div className="w-full bg-amber-50" key={products.id}>
              <p>Name:{products.name}</p>
              <p>Price:{products.price}</p>
              <p>qty:{products?.qty}</p>
              <button
                className="w-14 h-7 bg-blue-500 rounded"
                onClick={() => decreaseQty(products.id)}
              >
                -
              </button>
              <button
                className="w-14 h-7 rounded bg-gray-300"
                onClick={() => addToCart(products)}
              >
                +
              </button>
              <button
                className="w-20 h-7 rounded bg-red-300"
                onClick={() => removeItem(products.id)}
              >
                Remove
              </button>
              {/* <p>Total:{products.price * products.qty || 1}</p> */}
            </div>
          );
        })}
        <p>Total:{total}</p>
      </div>
    </div>
  );
};

export default Cart;
