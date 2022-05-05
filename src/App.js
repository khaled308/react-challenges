import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Country from "./Country"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Home from "./Home"


function App() {
    const[style , setStyle] = useState('')
    return (
        <GlobalStyle.Provider value={[style , setStyle]}>
            <div className={`overflow-x-hidden min-h-screen ${style}`}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/:country' element={<Country />} />
                    </Routes>
                </Router>
            </div>
        </GlobalStyle.Provider>
    )
}

export default App