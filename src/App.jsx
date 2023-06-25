import productData from './data.json';

import { CartProvider } from './CartContext';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import Layout from './components/Layout';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';

import ProductShop from './pages/ProductShop';
import Checkout from './pages/Checkout';





function App() {



  const headphones = productData.filter((product) => product.category === "headphones");

  return (
    <BrowserRouter>

      <CartProvider>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />

              <Route path="headphones" element={<Headphones/>} /> 
              <Route path="/headphones/:id" element={<ProductShop/>} />
             
                
              <Route path="speakers" element={<Speakers/>} />
              <Route path="/speakers/:id" element={<ProductShop/>} />

              
              <Route path="earphones" element={<Earphones/>} />
              <Route path="/earphones/:id" element={<ProductShop/>} />
            </Route>
          <Route path="/checkout" element={<Checkout/>} />


          </Routes>
     
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;



 {/* <>
        <img src='src\assets\product-yx1-earphones\desktop\image-category-page-preview.jpg'/>
        <h1>Product List</h1>
        {productData.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.slug}</h2>
              <h3>{product.price}</h3>
              <button
                onClick={handleClick}
                data-id={product.id}
                data-price={product.price}
              >
                Add to Cart
              </button>
      
              <br /><br />
              <img src={"src/" + product.categoryImage.desktop.split('./')[1]}/>
              <br /><br />

            </div>
          );
        })}

        <h1>Filtered Product List</h1>
        {headphones.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.slug}</h2>
              <h3>{product.price}</h3>
         
            </div>
          );
        })}

        <S92 />
      </> */}