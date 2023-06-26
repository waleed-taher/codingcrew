"use client"
import React, {useEffect , useRef, useState} from 'react'



const Stepper = ({steps , currentStep}  ) => {
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()
    
    const updateStep = (stepNumber, steps) => {
        // 
        const newSteps = [...steps]
        
        let count = 0
        while(count < newSteps.length) {
            // current step
            if(count === stepNumber) {
                newSteps[count] = {
                   
                    ...newSteps[count],
                    highlighted: true,
                    selected:true,
                    completed:true
                }
                count++
                
            } 
            // step completed
            else if(count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected:true,
                    completed:true
                }
                count++
            }

            // step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected:false,
                    completed:false
                }
                count++
            }

        }
        return newSteps
    }
    useEffect(() => {
        // create object
        
        const stepsState = steps.map((step,index) => {
            
            return Object.assign({} , {
                description : step,
                completed: false,
                highlighted: index === 0 ? true: false,
                selected : index === 0 ? true : false,
            })
            
        })
        

        stepRef.current = stepsState
        
        const current = updateStep(currentStep - 1, stepRef.current)
        setNewStep(current)
    }, [steps , currentStep])

    const display = newStep.map((step,index) => {
       
        return (
            <div key={index} className={
                index !== newStep.length - 1 ? "w-full items-center flex" : "flex items-center"
            }>
                <div className="relative flex flex-col items-center text-teal-600">
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 
                    flex items-center justify-center py-3 ${
                        step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""
                    }`}>
                        {/* display number */}
                        {step.completed ? (
                            <span className='text-xl font-bold text-white'>&#10003;</span>
                        ) : (
                            index + 1
                        )}  
                    </div>
                    <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
                        step.highlighted ? "text-gray-900" : "text-gray-400"
                    }`}>
                        {/* display description */}
                        {step.description}
                        
                    </div>
                </div>
                <div className={`flex-auto transition duration-500 ease-in-out border-t-2 ${step.completed ? "border-green-600" : "border-gray-300"}`}>
                    {/* Display Line*/}
                </div>
        
            </div>
        )
    })
    return (
    <div className="flex items-center justify-between p-4 mx-4">
        {display}
    </div>
  )
}

export default Stepper