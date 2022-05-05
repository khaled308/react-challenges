import { useContext } from 'react'
import GlobalStyle from './GlobalStyle'
import CountrySearch from './CountrySearch'
import useGettingData from './getData'
import {Link} from 'react-router-dom'

function Country({country}){
    return(
        <>
            <img src={country.coatOfArms.png} alt="" className='w-full h-[200px]'/>
            <div className='py-3 px-4'>
                <Link to={`/${country.name.common}`}>
                    <h2 className='font-bold text-2xl mb-5'>{country.name.common}</h2>
                </Link>
                <p>Population <span className='text-darkGray'>{country.population}</span></p>
                <p>Region <span className='text-darkGray'>{country.region}</span></p>
                <p>Capital <span className='text-darkGray'>{country.capital}</span></p>
            </div>
        </>
    )
}

function Home() {
    const style = useContext(GlobalStyle)[0]
    const [countries , fetchData ] = useGettingData('https://restcountries.com/v3.1/all')

    console.log(countries)

    const byRegion = (region)=>{
        if(region) fetchData(`https://restcountries.com/v3.1/region/${region}`)
    }

    const byCountry = (country)=>{
        if(country) {
            country = country[0].toUpperCase() + country.slice(1)
            fetchData(`https://restcountries.com/v3.1/name/${country}`)
        }
    }

    return (
        <div className="container mx-auto px-6 py-10">
                <CountrySearch byRegion={byRegion} byCountry={byCountry} />
            <div className='flex justify-center sm:justify-between flex-wrap'>
                {
                    countries.map((country , index)=>{
                        return(
                            <div 
                                className={`w-full sm:w-[300px] rounded-md shadow-lg mb-10 ${style}`} 
                                key={index} 
                            >
                                <Country country={country} />
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Home