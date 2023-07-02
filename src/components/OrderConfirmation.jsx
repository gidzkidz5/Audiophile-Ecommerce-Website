import Button1 from "./Button1";
import { useNavigate } from "react-router";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export default function OrderConfirmation({ imgSrc, itemName, itemPrice, itemQuantity, othersNum, grandTotal }) {
    const { clearCart } = useContext(CartContext)

    const navigate = useNavigate();

    const returnHome = () => {
        setTimeout( () => {
            clearCart();
            navigate('/')
        }, 1000)
    }

    return (
        <div className="ff-sanserif" id="order-confirmation">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>

            <h1 className="font-black uppercase">Thank you for your order</h1>

            <p>You will receive an email confirmation shortly</p>

            <div>
                <div>
                    {/* cart items */}
                </div>
                <div className="order-preview-container ff-sanserif">
                    {/* grand total */}
                    <div className="order-preview">
                        <div className="order-preview-items">
                            <img src={imgSrc}/>
                            <div>
                                <h1 className="fs-body">{itemName}</h1>
                                <h2 className="fs-overline">${itemPrice}</h2>
                            </div>
                            <h3>x{itemQuantity}</h3>
                        </div>
                        <div className="order-preview-line"></div>
                        <div className="other-items">
                            <span>and {othersNum} other item(s)</span>
                        </div>
                    </div>
                    <div className="order-preview-total">
                        <h1 className="uppercase fs-overline font-white" >Grand Total</h1>
                        <h2 className="fs-6 font-white">${grandTotal}</h2>
                    </div>
                </div>
            </div>

            <Button1 
                title="Back to Home"
                handleClick={returnHome}
            />
        </div>
    )
}


