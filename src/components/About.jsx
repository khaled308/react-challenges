import { Button } from "./Components"

function About() {
    return (
        <div className="bg-brightRed text-white">
            <div className="container max-auto px-6 flex justify-between items-center flex-col md:flex-row py-10 gap-5">
                <h2 className="text-4xl md:w-1/3">Simplify how your team works today.</h2>
                <Button txt='Get Started' className='bg-white text-brightRed' />
            </div>
        </div>
    )
}

export default About