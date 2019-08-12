import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

const Product = props => {
  const { products, addItem } = useContext(ProductContext);

  return (
    <div className="product">
      <img src={state.product.image} alt={`${state.product.title} book`} />

      <h1 className="title">{state.product.title}</h1>

      <p className="price">${state.product.price}</p>

      <button onClick={() => state.addItem(state.product)}>Add to cart</button>
    </div>
  );
};

export default Product;
