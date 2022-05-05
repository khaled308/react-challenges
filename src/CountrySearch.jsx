import { Search } from "@mui/icons-material"
import { useState } from "react"

function CountrySearch({byRegion , byCountry}) {
    const[region , setRegion] = useState('')
    const[value , setValue] = useState('')
    const[search , setSearch] = useState('')
    
    byRegion(region)
    byCountry(search)

    const onChangeSelect = (e)=>{
        setRegion(e.target.value)
    }

    const onChangeInput = (e)=>{
        setValue(e.target.value)
    }

    const onClick = ()=>{
        setSearch(value)
    }
    
    return (
        <div className="flex w-full justify-between flex-wrap py-10 items-start">
            <div className="relative w-full md:w-[400px] mb-6">
                <input type="text" className="shadow-lg bg-veryLightGray outline-none border-none p-3 w-full pl-10" placeholder="Search for a Country" onChange={onChangeInput}/>
                <div className="absolute left-2 top-3 cursor-pointer" onClick={onClick}>
                    <Search/>
                </div>
            </div>
            <div className="shadow-lg p-2 flex justify-center items-center mb-6">
                <select className="outline-none p-1 px-3 flex justify-center items-center text-lg" onChange={onChangeSelect} value={region}>
                    <option value="" disabled>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                </select>
            </div>
        </div>
    )
}

export default CountrySearch