import { features } from "../data"
import { Button } from "./Components"

function Features() {
    return (
        <div className="container mx-auto flex flex-col items-center p-6 md:flex-row gap-10 features">
            <div className="md:w-1/2">
                <h2 className="text-4xl text-bold mb-4">What’s different about Manage?</h2>
                <p className="text-darkGrayishBlue">
                    Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                </p>

            </div>
            <div className="md:w-1/2 flex flex-col gap-8">
                {
                    features.map(item=>{
                        return(
                            <div className="gap-0 md:gap-3 flex items-start relative">
                                <Button txt={item.order} className='m-0 md:mt-1 py-0 absolute md:relative left-0 top-0'/>
                                <div>
                                    <h2 className="py-0.5 pl-16 md:p-0 text-sm md:text-2xl text-bold mb-4 bg-veryPaleRed md:bg-transparent rounded-l-full md:rounded-none md:gap-4">{item.title}</h2>
                                    <p className="text-darkGrayishBlue">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Features