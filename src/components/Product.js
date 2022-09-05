import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    // <div>
    //   <img className="small" src={product.image} alt={product.name} />
    //   <h3>{product.name}</h3>
    //   <small>{product.info}</small>
    //   <div>${product.price}</div>
    //   <div>
    //     <button onClick={() => onAdd(product)}>Add To Cart</button>
    //   </div>
    // </div>
    <div className="item">
    <img src={product.image} alt="Img" />
    <div className="item_head_desc">
      <p className="head_desc_name">{product.name}</p>
      <p className="head_desc_info">
        <small>{product.info}</small>
      </p>
    </div>
    <div className="item_foot_desc">
      <span className="foot_desc_price">Rs.{product.price}</span>
      <button onClick={() => onAdd(product)}>Add</button>
    </div>
  </div>
  );
}
