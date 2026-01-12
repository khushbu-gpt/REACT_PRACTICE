import React from "react";

const ProductCard = React.memo(({ product, onAdd,onDecrease }) => {
  console.log("Rendering:", product.name);

  return (
    <>
      <div
        key={product.id}
        className="bg-amber-300 w-48 h-48 rounded-sm shadow flex gap-4
             flex-col justify-center items-center "
      >
        {product.name} - ₹{product.price}
        <div>
          <button
            className="bg-white rounded shadow px-6 py-2 cursor-pointer"
            onClick={() => onDecrease(product.id)}
          >
            -
          </button>
          <button
            className="bg-white rounded shadow px-6 py-2 cursor-pointer"
            onClick={() => onAdd(product)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
});

export default ProductCard;
