import {useParams} from 'react-router-dom'
import useGettingData from './getData'
function Country() {
    const {country} = useParams()
    const [countryData]  = useGettingData(`https://restcountries.com/v3.1/name/${country}`)[0]
    console.log(countryData)
    return (
        countryData? 

        <div className='container mx-auto px-6 py-10'>
            <div className="flex flex-wrap items-center justify-between">
                <div className='my-10 w-full md:w-[45%] h-60'>
                    <img src={`${countryData.flags.png}`} alt=""  className='w-full h-full'/>
                </div>
                <div className='w-full md:w-[48%] h-60'>
                    <h2 className='mb-8 text-2xl '>{countryData.name.common}</h2>
                    <div className="flex flex-wrap">
                        <div className='w-full md:w-[48%] py-5'>
                            <p>Native Name: <span className='text-darkGray'>{countryData.name.nativeName.spa?.common}</span></p>
                            <p>Population:<span className='text-darkGray'>{countryData.population}</span></p>
                            <p>Region:<span className='text-darkGray'>{countryData.region}</span></p>
                            <p>Sub Region<span className='text-darkGray'>{countryData.subregion}</span></p>
                            <p>Capital:<span className='text-darkGray'>{countryData.capital[0]}</span></p>
                        </div>
                        <div className='w-full md:w-[48%] py-5'>
                            <p>Top Level Domain: <span className='text-darkGray'>{countryData.tld[0]}</span></p>
                            <p>Currencies: <span className='text-darkGray'>{Object.values(countryData.currencies).map(item=>item.name).join(',')}</span></p>
                            <p>Languages: <span className='text-darkGray'>{Object.values(countryData.languages).join(',')}</span></p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center my-5'>
                        <span className='text-2xl'>Border Countries: </span>
                        {
                            countryData.borders.map((item , index)=><span key={index} className='px-1 border-2 border-solid shadow-lg'>{item}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>

        : <></>
    )
}

export default Country