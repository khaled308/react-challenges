import Product from "./Product"
import {data} from '../data'

function Home() {
    return (
        <div className="home">
            <img src="https://www.vapulus.com/en/wp-content/uploads/2021/01/ecommerce.jpg" alt="" />
            <div className="content">
                <div className="row">
                    {
                        data.map(product=><Product product={product} key={product.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home