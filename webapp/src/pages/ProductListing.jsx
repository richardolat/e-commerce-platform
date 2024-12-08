import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;