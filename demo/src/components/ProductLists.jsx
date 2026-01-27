import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api/productApi";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await fetchProduct();
        setProducts(res.data);
        console.log(res);
      } catch (err) {
        setError(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loadng...</div>;
  if (error) return console.log(error);
  return (
    <>
      <h1 className="text-4xl font-semibold text-center  ">Our Products</h1>
      <div className="flex gap-4 flex-wrap my-4 justify-center ">
        {products.slice(15, products.length - 4).map((product) => (
          <div key={product.title}>
            {/* <img src={product.category.image} height={250} width={250} /> */}
            {product.images.map((image) => (
              <img
                src={image}
                height={250}
                width={250}
                alt={product.title}
                key={image}
              />
            ))}
            <p>{product.title}</p>

            {/* <p>{product.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductLists;
