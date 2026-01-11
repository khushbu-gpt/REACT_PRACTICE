import React from "react";

const ProductItem = React.memo(({ product }) => {
  console.log("Rendering:", product.name);

  return (
    <ul className="bg-red-300 rounded-md p-5">
      <li>{product.name}</li>
      <li>₹{product.price}</li>
    </ul>
  );
});

export default ProductItem;
