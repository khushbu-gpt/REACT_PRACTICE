import { createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  function decreaseQty(id) {
    setCart((prevCart) => {
      return prevCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);
    });
  }
  function removeItem(id) {
    setCart((prevCart) => {
      return prevCart.filter((product) => product.id !== id);
    });
  }


  return (
    <CartContext.Provider value={{ addToCart, decreaseQty, removeItem,cart }}>
      {children}
    </CartContext.Provider>
  );
};


export function useCart(){
    return useContext(CartContext)
}