import { useState } from "react"
import { persons } from "../data"
import { Button } from "./Components"

function Feedback() {
    const [active , setActive] = useState(0)

    return (
        <div className="py-10 text-center">
            <h2 className="text-4xl mb-10 text-center">What they’ve said</h2>
            <div className="hidden md:flex w-full gap-5">
                {
                    persons.map((person,index)=>{
                        if(index < persons.length - 1)
                        return(
                            <div className="bg-veryLightGray p-5 text-center flex flex-col items-center" key={person.id}>
                                <img src={person.img} alt="person" className="w-[50px] h-[50px] rounded-full mx-auto absolute -translate-y-10" />
                                <h4 className="text-xl py-5">{person.name}</h4>
                                <p className="text-darkGrayishBlue">{person.feedback}</p>
                            </div>
                        )
                        else return ''
                    })
                }
            </div>

            <div className="md:hidden w-full gap-5 relative h-[270px]">
                    {
                    persons.map(person=>{
                        return(
                            <div className={`bg-veryLightGray p-5 text-center flex flex-col items-center absolute w-full ${person.id === active ? 'z-20' :''}`} key={person.id}>
                                <img src={person.img} alt="person" className="w-[50px] h-[50px] rounded-full mx-auto absolute -translate-y-10" />
                                <h4 className="text-xl py-5">{person.name}</h4>
                                <p className="text-darkGrayishBlue">{person.feedback}</p>
                            </div>
                        )
                    })
                    }
                    <div className="flex gap-5 absolute justify-center w-full bottom-0">
                        {
                        persons.map(person=>{
                            return(
                                <span className={`w-[15px] h-[15px] rounded-full border-2 border-brightRed border-solid ${person.id === active ? 'bg-brightRed' : ''}`} onClick={()=>setActive(person.id)}></span>
                            )
                        })
                        }
                    </div>
            </div>
            <Button txt='Get Started' className='shadow-lg mt-5' />
        </div>
    )
}

export default Feedback