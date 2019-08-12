import React from "react";

const Item = props => {
  const removeItem = id => {
    console.log("remove" + id);
    const newItems = [...props.cart.filter(item => item !== id)];

    props.setCart([...props.cart, newItems]);
  };
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
