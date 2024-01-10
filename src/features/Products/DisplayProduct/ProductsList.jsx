import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("/products");
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1></h1>
      {products.map((product, index) => (
        <Product {...product} key={index}></Product>
      ))}
    </>
  );
};

export default ProductsList;
