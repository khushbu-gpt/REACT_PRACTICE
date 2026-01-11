import { useState, useMemo, useCallback } from "react";
import ProductItem from "./components/ProductList/ProductItem";
import LoginForm from "./components/LoginForm";

const PRODUCTS = [
  { id: 1, name: "Milk", price: 50 },
  { id: 2, name: "Bread", price: 40 },
  { id: 3, name: "Eggs", price: 60 },
  { id: 4, name: "Rice", price: 80 },
  { id: 5, name: "Oil", price: 120 },
];

export default function App() {
  const [search, setSearch] = useState("");

  // ✅ memoized handler
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // ✅ memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!search) return PRODUCTS;

    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // ✅ memoized total price
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((acc, curr) => acc + curr.price, 0);
  }, [filteredProducts]);

  return (
    <div className="mx-10">
      <h2 className="my-4">PRODUCTS</h2>

      {/* <input
        type="text"
        placeholder="search here...."
        value={search}
        onChange={handleSearch}
        className="bg-gray-200 p-2 rounded-md"
      />

      <h1>Total: ₹{totalPrice}</h1>

      {filteredProducts.length === 0 && <p>No products found</p>}

      <div className="flex gap-10 my-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div> */}
      <LoginForm/>
    </div>
  );
}
