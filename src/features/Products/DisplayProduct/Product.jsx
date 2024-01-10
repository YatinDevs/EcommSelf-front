import React from "react";
import "./Product.css";

const Product = ({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
}) => {
  const handleClick = (productId) => {
    // Implement your wishlist logic here
    console.log("Add to wishlist:", productId);
  };

  return (
    
  );
};

export default Product;
