import { useContext, useState } from "react"
import { CartContext } from "../CartContext";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import ItemCounter from "./ItemCounter";

export default function Header() {
    const [expanded, setExpanded] = useState(false);
    const [isCartExpanded, setisCartExpanded] = useState(false)

    const { cartData, clearCart, updateCartItemQuantity } = useContext(CartContext)

    const [ sum, setSum ] = useState(0);
    
    useEffect (()=> {
    
        let cartSum = 0

        cartData.forEach( function(item, index) {
            console.log( item,index )
            cartSum += (item.currentProduct.price * item.itemQuantity)

        })
        console.log("cartSum:" + cartSum)

        setSum(cartSum)

        }
        , [cartData]
    )

    function handleClick() {
        setExpanded(expanded === false ? true : false)
    }
    
    function handleCartClick() {
        setisCartExpanded(!isCartExpanded)
    }

    function removeAll() {
        clearCart()
    }

    function addCommasToPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    useEffect( ()=> {
        const handleOutsideClick = () => {
            setExpanded(false)
            setisCartExpanded(false)
        }
        document.getElementById('darken-menu').addEventListener('click', handleOutsideClick)
    },[])

    function handleQuantityChange(productId, newQuantity) {
        updateCartItemQuantity(productId, newQuantity)
    }



    return (
        
        <>
        <header>
            <div className="header-img">
                <NavLink to="/"><img  src={logo}></img></NavLink>
            </div>
            <button className="mobile-nav-toggle" aria-expanded={expanded} onClick={handleClick}>
                <span className="sr-only">Menu</span>
            </button>
            <nav className="uppercase">
                <ul className="flex primary-navigation ff-sanserif font-white"  data-visible={expanded}>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="../headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="../speakers">SPEAKERS</NavLink></li>
                    <li><NavLink to="../earphones">EARPHONES</NavLink></li>
                </ul>
            </nav>
            
            <div className="cart-toggle-parent">
                <button className="cart-toggle" onClick={handleCartClick} >
                    <span className="sr-only">Cart</span>
                    <div className="cart-toggle-counter" style={(cartData.length) ? {display: "flex"} : {display: "none"}}>{cartData.length}</div>
                </button>

                {/* Cart Container */}
               { isCartExpanded && 
                <div className="cart-container ff-sanserif">
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
                                <img src={"../cart/image-" + item.currentProduct.slug + ".jpg"}/>
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
                        <h2>${sum}</h2>
                    </div>
                    
                    <Link to="/checkout" >
                        <button
                            className="btn-cart uppercase font-white fs-subtitle"
                            >
                            Checkout
                        </button>
                    </Link>

                </div>
               }

            </div>
        </header>
        <div id="darken-menu" data-visible={expanded} data-cart={isCartExpanded}></div>
        

        </>
    )
}

