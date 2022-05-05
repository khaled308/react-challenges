import { DarkMode, LightMode } from '@mui/icons-material'
import { useContext } from 'react'
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'
function Header() {
    const lightModeClasses = 'bg-bg-darkGray text-black'
    const darkModeClasses = 'bg-veryDarkBlueBg text-white'

    const [lightMode , setLightMode] = useState(true)
    const setStyle = useContext(GlobalStyle)[1]
    const handelClick = ()=>{
        setLightMode(!lightMode)
        if(!lightMode) setStyle(lightModeClasses)
        else setStyle(darkModeClasses)
    }
    return (
        <div className='shadow-lg '>
            <div className="container mx-auto w-screen flex justify-between py-4 px-6">
                <h1 className="text-xl font-bold md:text-4xl">Where in the world</h1>
                <div className="cursor-pointer" onClick={handelClick}>
                    {
                        lightMode ? <DarkMode /> : <LightMode />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header