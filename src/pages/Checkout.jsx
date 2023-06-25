import { CartContext } from "../CartContext";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Checkout() {

    function limitLength(input) {
        if (input.value.length > 4) {
          input.value = input.value.slice(0, 4);
        }}

    const {cartData, updateCartData, updateCartItemQuantity } = useContext(CartContext)

    function handleQuantityChange(productId, newQuantity) {
        updateCartItemQuantity(productId, newQuantity)
    }

    function addCommasToPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    return(
        <>
        <Header/>
        <main style={{backgroundColor: "#F1F1F1"}} >
        <form id="form-main">
            <div id="form-container" className="ff-sanserif">
                <h1 className="fs-3 uppercase ff-sanserif">Checkout</h1>
               
                {/* first part */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Billing Details</h1>

                    <section className="form-section">
                        <div className="label-input-container">
                            <label>
                                Name
                            </label>
                            <input type="text" name="name"/>
                            
                        </div>
                        <div className="label-input-container">
                            <label>
                                Email Adress
                            </label>
                            <input type="text" name="email"/>
                            
                        </div>
                        <div className="label-input-container">
                            <label>
                                Phone Number
                            </label>
                            <input type="text" name="phone"/>
                            
                        </div>
                    </section>

                {/* second part */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Shipping Info</h1>

                    <section className="form-section">
                        <div className="label-input-container address">
                            <label>
                                Address
                            </label>
                            <input type="text" name="address"/>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                ZIP Code
                            </label>
                            <input type="text" name="zip-code"/>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                City
                            </label>
                            <input type="text" name="city"/>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                Country
                            </label>
                            <input type="text" name="country"/>
                            
                        </div>
                        
                        
                    </section>
                
                {/* third part */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Payment Details</h1>

                    <section className="form-section">
                       
                            <div className="label-input-container ff-sanserif radio-container-parent">
                                <h1 className="font-black">
                                Payment Method
                                </h1>
                                <div className="radio-container-options">
                                    <div className="radio-container">
                                        <input type="radio" name="payment-method"/>
                                        <label>e-Money</label>
                                    </div>
                                    <div className="radio-container">
                                        <input type="radio" name="payment-method"/>
                                        <label>Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>

                        <div className="form-payment-container">
                            <div className="label-input-container ff-sanserif">
                                <label>
                                    e-Money Number
                                </label>
                                <input type="number" name="e-money-number" placeholder="e.g. 238521993"/>
                                
                            </div>
                            <div className="label-input-container ff-sanserif">
                                <label>
                                    e-money PIN
                                </label>
                                <input type="number" name="PIN" min={"0000"} max={"9999"} maxLength="4" placeholder="e.g. 6891"/>
                                
                            </div>
                        </div>
                     
                        
                        
                    </section>


               
            </div>

          
            <div className="cart-container-checkout ff-sanserif">
                <div className="cart-header">
                    <h1 className="fs-6">Cart {cartData.length === 0 ? "" : "(" + cartData.length + ")"}</h1>
                    <h2 className="fs-body">Remove all</h2>
                </div>

                

                {/* cart item */}
                {(cartData.length > 0) ?   
                cartData.map((item, index) => {
                    return(
                    <div className="cart-item-container ff-sanserif" key={index}>
                        <div className="cart-item">
                            <img src={"../src/assets/cart/image-" + item.currentProduct.slug + ".jpg"}/>
                            <div className="cart-item-text">
                                <h1 className="fs-body">{item.currentProduct.name.split(item.currentProduct.category.charAt(0).toUpperCase() + item.currentProduct.category.slice(1))[0]}</h1>
                                <h2 className="font-black" style={{opacity: "0.5"}}>${addCommasToPrice(item.currentProduct.price)}</h2>
                            </div>
                        </div>
                        {/* <ItemCounter /> */}
                        <div className='item-counter flex'>
                            <button onClick={() => handleQuantityChange(item.currentProduct.id, (item.itemQuantity-1))} className='cart-btn'>-</button>
                            <input type="text" value={item.itemQuantity} readOnly />
                            <button onClick={() => handleQuantityChange(item.currentProduct.id, (item.itemQuantity+1))} className='cart-btn'>+</button>
                        </div>
                    </div>
                    )
                    })
                    : <h1>Cart is Empty</h1>}   
                


                <div className="cart-total ff-sanserif uppercase">
                    <h1>Total</h1>
                    <h2>$5396</h2>
                </div>

                <button
                    className="btn-cart uppercase font-white fs-subtitle"
                    >
                    Checkout
                </button>
            </div>
        </form>
            
        </main>
        <Footer/>
        </>
    )
}