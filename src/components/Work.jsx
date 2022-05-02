import React from 'react'
import { Button } from './Components'

function Work() {
    return (
        <div className='container mx-auto py-14 works'>
            <div className="flex flex-col-reverse items-center md:flex-row p-6">
                <div className="w-full md:w-1/2">
                    <h1 className='text-2xl md:text-4xl font-bold md:text-left'>Bring everyone together to build better products.</h1>
                    <p className='my-5 text-darkGrayishBlue md:text-left'>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <Button txt='Get Started' />
                </div>
                <div className="w-full md:w-1/2">
                    <img src="images/illustration-intro.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Work