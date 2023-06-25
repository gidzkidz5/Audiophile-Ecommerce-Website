import data from '../data.json';
import Button1 from './Button1';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({category}) {

    // screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    let screenSize = '';
  
    // Determine the src value based on the screen width

    if (screenWidth < 561) { // Mobile
      screenSize = 'mobile';
    } else if (screenWidth >= 561 && screenWidth < 1024) { // Tablet
      screenSize = 'tablet';
    } else { // Desktop
      screenSize = 'desktop';
    }

    // filter and map products

    const filteredData = data.filter((product) => (
        product.category === category
    ))

   


    return (
        <section id="product-list">

            {filteredData.map((item) => {
                return (
                    <div className='product-list-child flex' key={item.id}>
                        <div className='product-img-container'>
                          <img 
                          src={"src/assets/product-" + item.slug + "/" + screenSize + "/image-category-page-preview.jpg"}
                          />
                    
                        </div>
                    <div className='product-text-container ff-sanserif'>
                        <span className='fs-overline' style={item.new ? {color: "#D87D4A"} : {display: "none"}}>New Product</span>
                        <h1 className='font-black fs-2 uppercase'>{item.name}</h1>
                        <p className='fs-body product-list-description'>{item.description}</p>

                        <Link to = {"./" + item.slug }>
                          <Button1
                              title = "See Product"
                          />
                        </Link>
                    </div>
            </div>
                )
            })}
        </section>
    )
}




// src={"src/assets/product-xx99-mark-two-headphones/" + screenSize + "/image-category-page-preview.jpg"}
                  