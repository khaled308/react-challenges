import {useState , useEffect} from 'react'
import axios from 'axios'
export default function useGettingData(url){
    const[page , setPage] = useState(0)
    const[countries , setCountries] = useState([])
    const[visited , setVisited] = useState('')

    const [data , setData] = useState([])
    
    const fetchData = (url)=>{
        if(visited !== url){
            setCountries([])
            setVisited(url)
            axios.get(url)
            .then(res=>{
                setData(res.data)
            })
            .catch(err=>{
                setData([])
            })
        }
    }
    useEffect(()=>{
        let start = page * 8
        const newData = [...data.slice(start , start + 8)]
        if(countries[start]?.name.common !== newData[0]?.name.common) setCountries([...countries , ...newData ])
    } , [page , data])

    useEffect(()=>{
        fetchData(url)
    },[])

    useEffect(() => {
        const scrolling_function = () => {
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10){
                setPage(page + 1)
                window.removeEventListener('scroll',scrolling_function)
            }
        }
        window.addEventListener('scroll', scrolling_function);
    }, [countries])


    return [countries , fetchData]
}