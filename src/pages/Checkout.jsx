import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderConfirmation from "../components/OrderConfirmation";

import { Spinner } from "@chakra-ui/spinner"

export default function Checkout() {

    function limitLength(input) {
        if (input.value.length > 4) {
          input.value = input.value.slice(0, 4);
        }}

    const {cartData, updateCartData, updateCartItemQuantity, clearCart } = useContext(CartContext)

    const [ sum, setSum ] = useState(0);
    
    useEffect (()=> {
    
    let cartSum = 0

    cartData.forEach( function(item, index) {
        cartSum += (item.currentProduct.price * item.itemQuantity)
    })
    setSum(cartSum)

    }, [cartData]
    )

    function handleQuantityChange(productId, newQuantity) {
        updateCartItemQuantity(productId, newQuantity)
    }

    function removeAll() {
        clearCart()
    }

    function addCommasToPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // State for forms

    const [ inputs, setInputs ] = useState({ paymentMethod: "e-money"});
    const [error, setError ] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevValue) => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }

    function validateEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailRegex.test(email);
      }

    const handleSubmit = (e) => {
        
        e.preventDefault
        console.log(inputs)

        const errorName = document.querySelectorAll('.error')[0];
        const errorEmail = document.querySelectorAll('.error')[1];
        const errorPhone = document.querySelectorAll('.error')[2];

        const errorAddress = document.querySelectorAll('.error')[3];
        const errorZip = document.querySelectorAll('.error')[4];
        const errorCity = document.querySelectorAll('.error')[5];
        const errorCountry = document.querySelectorAll('.error')[6];

        const errorEMoney = document.querySelectorAll('.error')[7];
        const errorEPin = document.querySelectorAll('.error')[8];

        let errors = {}


        if (!inputs.name) {
            e.preventDefault();
            errors.name = "This field is required"
            errorName.classList.remove('hide')
        } else {
            errorName.classList.add('hide')
        }

        if (!inputs.email){
            e.preventDefault();
            errors.email = 'This field is required'
            errorEmail.classList.remove('hide')
        } else if (!validateEmail(inputs.email)) {
            e.preventDefault();
            errors.email = 'Wrong Format'
            errorEmail.classList.remove('hide')
        } else {
            errorEmail.classList.add('hide')
        }

        if (!inputs.phone){
            e.preventDefault();
            errors.phone = 'This field is required'
            errorPhone.classList.remove('hide');
        } else {
            errorPhone.classList.add('hide')
        }

        if (!inputs.address) {
            e.preventDefault();
            errors.address = "This field is required"
            errorAddress.classList.remove('hide')
        } else {
            errorAddress.classList.add('hide')
        }

        if (!inputs.zip){
            e.preventDefault();
            errors.zip = 'This field is required'
            errorZip.classList.remove('hide');
        } else {
            errorZip.classList.add('hide')
        }

        if (!inputs.city){
            e.preventDefault();
            errors.city = 'This field is required'
            errorCity.classList.remove('hide');
        } else {
            errorCity.classList.add('hide')
        }

        if (!inputs.country){
            e.preventDefault();
            errors.country = 'This field is required'
            errorCountry.classList.remove('hide');
        } else {
            errorCountry.classList.add('hide')
        }

        if (inputs.paymentMethod === "e-money"){
            if (!inputs.eMoneyNum){
                e.preventDefault();
                errors.eMoney = 'This field is required'
                errorEMoney.classList.remove('hide');
            } else {
                errorEMoney.classList.add('hide')
            }
    
            if (!inputs.pin){
                e.preventDefault();
                errors.pin = 'This field is required'
                errorEPin.classList.remove('hide');
            } else {
                errorEPin.classList.add('hide')
            }
        }

        
        
        if (Object.keys(errors).length > 0) {
            setError(errors);
        } else if (cartData.length === 0) {
            e.preventDefault();
        } else {
            e.preventDefault()
            setShowConfirmation(true)

            setTimeout( () => {
                setProcessing(false)
            }, 2500)
        }

        

    }

    const [ showConfirmation, setShowConfirmation ] = useState(false)
    const [ processing, setProcessing] = useState(true)


    return(
        <>
        <Header/>
        <main style={{backgroundColor: "#F1F1F1"}} >
        <form id="form-main" onSubmit={handleSubmit} action="/">
            <div id="form-container" className="ff-sanserif">
                <h1 className="fs-3 uppercase ff-sanserif">Checkout</h1>
               
                {/* First part - Billing Details */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Billing Details</h1>

                    <section className="form-section">
                        <div className="label-input-container ff-sanserif">
                            <label>
                                Name
                            </label>
                            <input type="text" name="name" id="form-name" placeholder="Alexei Ward" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.name}</h1>
                            
                        </div>
                        <div className="label-input-container">
                            <label>
                                Email Adress
                            </label>
                            <input type="text" name="email" placeholder="alexei@mail.com" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.email}</h1>
                            
                        </div>
                        <div className="label-input-container">
                            <label>
                                Phone Number
                            </label>
                            <input type="text" name="phone" placeholder="+1 202-555-0136" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.phone}</h1>
                            
                        </div>
                    </section>

                {/* Second part - Shipping Info */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Shipping Info</h1>

                    <section className="form-section">
                        <div className="label-input-container address">
                            <label>
                                Address
                            </label>
                            <input type="text" name="address" placeholder="1137 Williams Avenue" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.address}</h1>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                ZIP Code
                            </label>
                            <input type="text" name="zip" placeholder="10001" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.zip}</h1>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                City
                            </label>
                            <input type="text" name="city" placeholder="New York" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.city}</h1>
                            
                        </div>
                        <div className="label-input-container ff-sanserif">
                            <label>
                                Country
                            </label>
                            <input type="text" name="country" placeholder="United States" onChange={handleChange}/>
                            <h1 className="error fs-5 hide">{error.country}</h1>
                            
                        </div>
                        
                        
                    </section>
                
                {/* Third part - Payment Details */}
                    <h1 className="ff-sanserif uppercase fs-subtitle checkout-section-title">Payment Details</h1>

                    <section className="form-section">
                       
                            <div className="label-input-container ff-sanserif radio-container-parent">
                                <h1 className="font-black">
                                Payment Method
                                </h1>
                                <div className="radio-container-options">
                                    <div className="radio-container">
                                        <input type="radio" name="paymentMethod" value="e-money" onChange={handleChange} defaultChecked/>
                                        <label>e-Money</label>
                                    </div>
                                    <div className="radio-container">
                                        <input type="radio" name="paymentMethod" value="cash" onChange={handleChange}/>
                                        <label>Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>

                        <div className="form-payment-container" style={inputs.paymentMethod === "cash" ? {display: "none"} : {display: "flex"}}>
                            <div className="label-input-container ff-sanserif">
                                <label>
                                    e-Money Number
                                </label>
                                <input type="number" name="eMoneyNum" placeholder="e.g. 238521993" onChange={handleChange} />
                                <h1 className="error fs-5 hide">{error.eMoney}</h1>
                                
                            </div>
                            <div className="label-input-container ff-sanserif">
                                <label>
                                    e-money PIN
                                </label>
                                <input type="number" name="pin" min={"0000"} max={"9999"} maxLength="4" placeholder="e.g. 6891" onChange={handleChange}/>
                                <h1 className="error fs-5 hide">{error.pin}</h1>
                                
                            </div>
                        </div>
                     
                        
                        
                    </section>


               
            </div>

          
            <div className="cart-container-checkout ff-sanserif">
                <div className="cart-header">
                    <h1 className="fs-6">Cart {cartData.length === 0 ? "" : "(" + cartData.length + ")"}</h1>
                    <h2 className="fs-body" onClick={removeAll}>Remove all</h2>
                </div>

                {/* cart item */}
                {(cartData.length > 0) ?   
                cartData.map((item, index) => {
                    return(
                    <div className="cart-item-container ff-sanserif" key={index}>
                        <div className="cart-item">
                            <img src={"./cart/image-" + item.currentProduct.slug + ".jpg"}/>
                            <div className="cart-item-text">
                                <h1 className="fs-body">{item.currentProduct.name.split(item.currentProduct.category.charAt(0).toUpperCase() + item.currentProduct.category.slice(1))[0]}</h1>
                                <h2 className="font-black" style={{opacity: "0.5"}}>${addCommasToPrice(item.currentProduct.price)}</h2>
                            </div>
                        </div>
                        {/* <ItemCounter /> */}
                        <div className='item-counter flex'>
                            <button type="button" onClick={() => handleQuantityChange(item.currentProduct.id, (item.itemQuantity-1))} className='cart-btn'>-</button>
                            <input type="text" value={item.itemQuantity} readOnly />
                            <button type="button" onClick={() => handleQuantityChange(item.currentProduct.id, (item.itemQuantity+1))} className='cart-btn'>+</button>
                        </div>
                    </div>
                    )
                    })
                    : <h1>Cart is Empty</h1>}   
                
                <div className="cart-total ff-sanserif uppercase">
                    <h1>Total</h1>
                    <h2>${sum}</h2>
                </div>

                <button
                    className="btn-cart uppercase font-white fs-subtitle"
                    type="submit"
                    >
                    Checkout
                </button>
            </div>
        </form>
            
        </main>

        { showConfirmation && 
        <div id="order-confirmation-parent">
            { !processing ?
            <OrderConfirmation
                imgSrc = {(!(cartData[0] == null)) && "./cart/image-" + cartData[0].currentProduct.slug + ".jpg"}
                itemName = {cartData[0].currentProduct.name}
                itemPrice = {cartData[0].currentProduct.price}
                itemQuantity = {cartData[0].itemQuantity}
                othersNum = {(cartData.length - 1)}
                grandTotal= {sum}
            />

            :
            <div className="spinner-container">
                <Spinner

                   speed="1.0s"
                />
                <div className="processing ff-sanserif"> Your order is processing...</div>
            </div>
            }
        </div>
       
        }

        <Footer/>
        </>
    )
}


// "./cart/image-xx99-mark-two-headphones.jpg"