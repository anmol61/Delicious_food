import React from 'react'
import "./style.css";
import data from "./data"
import { useState,useEffect } from 'react';

const Category = () => {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  const [input,setInput] = useState('');
  const [output,setOutput] = useState([]);
  
  useEffect(() => {
    setOutput([]);
    data.filter((val, id) => {
      if (val.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);


  return (
   <>
    <div className="cat">
    <ul>
      <li>Pizza</li>
   
  
      <li>Pasta</li>
   
   
      <li>Burger</li>
  
    
      <li>Fruit</li>
 
 
      <li>Salads</li>
  
   
      <li>Fruit chaat </li>
   </ul>
   
    </div>


    <div className="serchbar">
    <input type="text" id='srch' placeholder='search items'
    
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
   </div>


{/* <Items 
data={data}
onAdd={onAdd}
/> */}

<main>
      {output.map((item) => (
       <div className="item">
       <img src={item.image} alt="Img" />
       <div className="item_head_desc">
         <p className="head_desc_name">{item.name}</p>
         <p className="head_desc_info">
           <small>{item.info}</small>
         </p>
       </div>
       <div className="item_foot_desc">
         <span className="foot_desc_price">Rs.{item.price}</span>
         <button onClick={() => onAdd(data)}>Add</button>
       </div>
     </div>
       
       
       
       
      //  <DisplayItem  key={data.id} data={data} onAdd={onAdd}  />
      ))}
</main>









    </>
    
  );
}

export default Category;