import React from "react";
import AddProduct from "./ProductsForm/AddProduct";
import ProductsList from "./DisplayProduct/ProductsList";

function ProductsPage() {
  return (
    <div>
      <div style={{ marginTop: 150 }}>
        <AddProduct />
        <ProductsList />
      </div>
    </div>
  );
}

export default ProductsPage;
