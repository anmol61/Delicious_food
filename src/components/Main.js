import React from "react";
import Product from "./Product";
// import Category from "./categories/Category";
export default function Main(props) {
  const { products, onAdd } = props;
  return (
    // <main className="block col-2 ">

    //   <div className="row productMargin">
    //     {products.map((product) => (
    //       <Product key={product.id} product={product} onAdd={onAdd}></Product>
    //     ))}
    //   </div>
    // </main>

    <>
      <h1 className="heading"> Delicious Food You</h1>
      <main>
        {products.map((product) => (
         <> <Product key={product.id} product={product} onAdd={onAdd} />
        </>
        
        ))}
      </main>
    </>
  );
}
