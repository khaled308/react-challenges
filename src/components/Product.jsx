import React from 'react'
import { useContext } from 'react'
import productContext from '../context'

function Product({product}) {
    const[products , setProducts] = useContext(productContext)
    const rating = Array(product.rating).fill('⭐').join('')
    const handelClick = ()=>{
        const found = products.filter(item=>product.id === item.id)
        if(found.length > 0) return
        setProducts([...products , product])
    }
    return (
        <div className='product'>
            <p className="product__description">{product.description}</p>
            <p className="product__price">$ {product.price}</p>
            <p className="product__rating">{rating}</p>
            <img src={`${product.img}`} alt="" />
            <button onClick={handelClick}>Add To Cart</button>
        </div>
    )
}

export default Product