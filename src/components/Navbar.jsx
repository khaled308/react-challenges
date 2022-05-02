import { useState } from "react"
import { Button } from "./Components"

const NavMenu = ()=>{
    return (
        <ul className='absolute left-0 top-20 w-full p-8 bg-white z-20'>
            <li className="py-5">Pricing</li>
            <li className="py-5">Product</li>
            <li className="py-5">About Us</li>
            <li className="py-5">Careers</li>
            <li className="py-5">Community</li>
        </ul>
    )
}

const OverLay = ()=>{
    return(
        <div className="fixed w-screen top-0 bottom-0 left-0 bg-black z-10 opacity-30"></div>
    )
}

function Navbar() {
    const [menu , setMenu] = useState(false)
    return (
        <>
            {menu ? <OverLay /> : ''}
            <nav className="p-6 container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className="py-1">
                        <img src="images/logo.svg" alt="" />
                    </div>
                    <ul className="hidden md:flex gap-4">
                        <li className="cursor-pointer hover:text-darkGrayishBlue">Pricing</li>
                        <li className="cursor-pointer hover:text-darkGrayishBlue">Product</li>
                        <li className="cursor-pointer hover:text-darkGrayishBlue">About Us</li>
                        <li className="cursor-pointer hover:text-darkGrayishBlue">Careers</li>
                        <li className="cursor-pointer hover:text-darkGrayishBlue">Community</li>
                    </ul>
                    <Button txt='Get Started' className='hidden md:block'/>
                    <div className="cursor-pointer md:hidden relative z-30" onClick={()=>setMenu(!menu)}>
                        <img src={menu ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'} alt="" />
                    </div>
                    {menu ? <NavMenu /> : ''}
                </div>
            </nav>
        </>
    )
}

export default Navbar