import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import Footer from "./components/Footer/index";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./components/categories/Category"
import Contact from "./components/contact/Contact"


function App() {
  const { products } = data;
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
  return (

    
    <div className="App">
      <Header countCartItems={cartItems.length}
      
      products={products} onAdd={onAdd}
      />
      {/* <Main products={products} onAdd={onAdd}></Main> */}

      <Routes>
       <Route path="/" element={
        <Main products={products} onAdd={onAdd}/>
       }/>
       <Route path="/category" element={
        // <Main products={products} onAdd={onAdd}/>
       
       <Category/>
       }/>
   
      {/* <div className="row"> */}
      
       <Route path="/contact" element={
        <Contact/>
       }/>


        <Route path="/cart" element={
          <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        }/>
      {/* </div> */}
      </Routes>
      <Footer/> 

    </div>

      
    
  );
}

export default App;
