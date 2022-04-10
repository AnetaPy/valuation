import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <p className="name">{props.product.name}</p>
      <p className="description">{props.product.description}</p>
      <p className="category">{props.product.category}</p>
      <p className="price">{props.product.price}</p>
      <button onClick={() => props.delete(props.product.id)}>Delete</button>
    </div>
  );
};

export default Product;
