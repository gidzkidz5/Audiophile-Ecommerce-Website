import { useParams} from "react-router"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"

import data from "../data.json"
import GoBack from "../components/GoBack"
import ItemCounter from "../components/ItemCounter"
import Button1 from "../components/Button1"
import AboutAudiophile from "../components/AboutAudioPhile"
import CategoriesBar from "../components/CategoriesBar"



export default function ProductShop() {

const { id } = useParams()
const { cartData, updateCartData } = useContext(CartContext);

const currentProduct = data.filter((product) => (product.slug === id) )[0]
function addCommasToPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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


// Item counter
const [itemQuantity, setItemQuantity] =  useState(1)

const handleValueChange = (value) => {
    setItemQuantity(value)
}

// Cart
const addToCart = () => {
    updateCartData({currentProduct, itemQuantity})
}


return (
    <>
   
        <GoBack/>
    
    <section>
        <div className='product-list-child flex'>
            <div className='product-img-container'>
                <img 
                src={"../src/assets/product-" + currentProduct.slug + "/" + screenSize + "/image-product.jpg"}
                />
            </div>

            <div className='product-text-container ff-sanserif'>
                <span className='fs-overline' style={currentProduct.new ? {color: "#D87D4A"} : {display: "none"}}>New Product</span>
                <h1 className='font-black fs-2 uppercase'>{currentProduct.name}</h1>
                <p className='fs-body product-list-description'>{currentProduct.description}</p>

                <span className="fs-6" style={screenWidth >= 1024 ? {marginBottom: "47px"} : {marginBottom: "31px"}}>${addCommasToPrice(currentProduct.price)}</span>
                
                <div className="flex count-and-cart-container" >
                    <ItemCounter
                        onValueChange={handleValueChange}
                    />
                    <Button1 
                        title = "Add to cart"
                        handleClick = {addToCart}
                    />
                </div>

                
            </div>
        </div>

        <div className="product-shop-text-container ff-sanserif">
            <div className="features">
                <h1 className="fs-3 font-black uppercase">Features</h1>
                <p className="fs-body">
                {currentProduct.features.split('\n\n')[0]}
                <br/><br/>
                {currentProduct.features.split('\n\n')[1]}
                
                </p>
            </div>
            <div className="in-the-box-container">
                <h1 className="fs-3 font-black uppercase">In the box</h1>
                <div>
                    {currentProduct.includes.map((part, index) => {
                        return (
                            <p className="fs-body flex" key = {index + 1}  ><span style={{color: "#D87D4A", marginRight: "1.5rem"}}>{part.quantity}x</span>{part.item}</p>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className="product-shop-images-container">
            <div className="grid-image-container">
                <img src={"../src/assets/product-" + currentProduct.slug + "/" + screenSize + "/image-gallery-1.jpg"}/>
            </div>
            <div className="grid-image-container">
                <img src={"../src/assets/product-" + currentProduct.slug + "/" + screenSize + "/image-gallery-2.jpg"}/>
            </div>
            <div className="grid-image-container">
                <img src={"../src/assets/product-" + currentProduct.slug + "/" + screenSize + "/image-gallery-3.jpg"}/>
            </div>

        </div>
        
        <div className="others-parent">
            <h1 className="fs-3 font-black uppercase ff-sanserif">You may also like</h1>
            <div id="others">
                <div className="others-child">
                    <div>
                        <img 
                        src = 
                        {"../src/assets/shared/" + screenSize + "/image-" + currentProduct.others[0].slug + ".jpg"}

                        />
                    </div>

                    <h1 className="fs-5 ff-sanserif font-black uppercase">{currentProduct.others[0].name}</h1>

                    <Button1
                        title="See product"
                    />
                    
                </div>

                <div className="others-child">
                    <div>
                        <img 
                        src = 
                        {"../src/assets/shared/" + screenSize + "/image-" + currentProduct.others[1].slug + ".jpg"}
                            
                        />
                    </div>

                    <h1 className="fs-5 ff-sanserif font-black uppercase">{currentProduct.others[1].name}</h1>

                    <Button1
                        title="See product"
                    />
                    
                </div>

                <div className="others-child">
                    <div>
                        <img 
                        src = 
                        {"../src/assets/shared/" + screenSize + "/image-" + currentProduct.others[2].slug + ".jpg"}
                            
                        />
                    </div>

                    <h1 className="fs-5 ff-sanserif font-black uppercase">{currentProduct.others[2].name}</h1>

                    <Button1
                        title="See product"
                    />
                    
                </div>
            </div>
        </div>

        <CategoriesBar/>
    </section>

    <AboutAudiophile/>

   

    


    </>
)

}