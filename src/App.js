import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import productContext from './context'

function App() {
    const [products, setProducts] = useState([])
    return (
        <productContext.Provider value={[products, setProducts]}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </Router>
        </productContext.Provider>
    )
}

export default App