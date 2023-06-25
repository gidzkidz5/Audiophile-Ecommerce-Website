import Button1 from "./Button1";

export default function OrderConfirmation() {

    return (
        <div className="ff-sanserif">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>

            <h1 className="font-black uppercase">Thank you for your order</h1>

            <p>You will receive an email confirmation shortly</p>

            <div>
                <div>
                    {/* cart items */}
                </div>
                <div>
                    {/* grand total */}
                    <h1 className="uppercase">Grand Total</h1>
                    <h2>$5,446</h2>
                </div>
            </div>

            <Button1 
                title="Back to Home"
            />
        </div>
    )
}