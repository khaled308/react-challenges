import React from 'react'
import { useContext } from 'react'
import productContext from '../context'

function ProductCart({product}) {
    const [products , setProducts] = useContext(productContext)
    const rating = Array(product.rating).fill('⭐').join('')
    const handelClick = ()=>{
        const cartProducts = products.filter(item=>item.id !== product.id) 
        setProducts(cartProducts)
    }
    return (
        <div className="product">
            <div className="product__img">
                <img src={`${product.img}`} alt="" />
            </div>
            <div className="product__content">
                <p className="product__description">{product.description}</p>
                <p className="product__price">${product.price}</p>
                <p className="product__rating">{rating}</p>
                <button onClick={handelClick}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default ProductCart