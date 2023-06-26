"use client"
import { Inter } from 'next/font/google'
import Stepper from '../../components/regForm/regFormComponents/Stepper'
import StepperControl from '../../components/regForm/regFormComponents/StepperControl'
import TeamInfo from '../../components/regForm/regFormComponents/steps/TeamInfo'
import EventInfo from '../../components/regForm/regFormComponents/steps/EventInfo'
import Final from '../../components/regForm/regFormComponents/steps/Final'
import { useState } from 'react'
import { StepperContext } from '../../components/regForm/contexts/StepperContext'


const inter = Inter({ subsets: ['latin'] })

export default function index() {
  const [currentStep , setCurrentStep] = useState(1)
  const [userData , setUserData] = useState('')
  const [finalData, setFinalData] = useState('')
  const steps = [
    "Team Information",
    "Complete"
  ]

  const displayStep = (step) => {
    switch(step) {
      case 1:
        return <TeamInfo />
      case 2:
        return <Final />
    }
  }

  const handleClick = async (direction) => {
    let newStep = currentStep
    direction === "Next" ? newStep++ : newStep--
    newStep > 0 &&  newStep <= steps.length && setCurrentStep(newStep)
    
    if(newStep === steps.length){
      const res = await fetch("/api/contact" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(userData),
        
      })
      
      
      

    }
    
  }

  return (
    <main>
      <div className='pb-2 mx-auto bg-white shadow-xl md:w-1/2 rounded-2xl'>
        <div className='container mt-5 horizontal'>
          <Stepper 
            steps = {steps}
            currentStep = {currentStep}
          />
        </div>
        {/* display components */}
        <div className='p-10 my-10'>
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
              {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {currentStep !== steps.length &&
        <StepperControl 
          handleClick = {handleClick}
          currentStep = {currentStep}
          steps = {steps}
        />
        }
      </div>
    </main>
  )
}
