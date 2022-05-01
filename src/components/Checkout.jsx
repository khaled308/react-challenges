import { useContext } from "react"
import productContext from "../context"
import ProductCart from "./ProductCart"

function Checkout() {
    const products = useContext(productContext)[0]
    let totalPrice = products.reduce((a,b)=>a+b.price,0)
    totalPrice = totalPrice.toFixed(2)
    return (
        <div className="checkout">
            <div className="checkout__top">
                <div className="left">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/TV/Sanyo/SanyoWebBanner01._CB1198675309_.jpg" alt="" />
                </div>
                <div className="right">
                    <p>Subtotal ({products.length} items): <b>${totalPrice}</b></p>
                    <button>Processed Checkout</button>
                </div>
            </div>
            <div className="checkout__bottom">
                <h1>Your shopping Cart</h1>
                {
                    products.map(product=><ProductCart product={product} key={product.id} />)
                }
            </div>
        </div>
    )
}

export default Checkout