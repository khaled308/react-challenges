import { Search, ShoppingBasket, Storefront } from '@material-ui/icons'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import productContext from '../context'

function Navbar() {
    const products = useContext(productContext)[0]
    return (
        <nav>
            <div className="nav__left">
                <Link to='/'>
                    <Storefront className='logo'/>
                    <h1>eShop</h1>
                </Link>
            </div>
            <div className="nav__center">
                <input type="text"/>
                <button>
                    <Search />
                </button>
            </div>
            <div className="nav__right">
                <ul className="nav-links">
                    <li>
                        <span>Hello Guest</span>
                        <Link to='#'>Sign In</Link>
                    </li>
                    <li>
                        <span>Your</span>
                        <Link to='#'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/checkout'><ShoppingBasket /></Link>
                        <span>{products.length}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar