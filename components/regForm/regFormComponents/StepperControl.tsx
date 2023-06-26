import React from 'react'

const StepperControl = ({handleClick , currentStep , steps} : any) => {
  
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* Back Button */}
        <button 
        onClick={() => handleClick()}
        className={`px-4 py-2 font-semibold uppercase transition duration-200 ease-in-out bg-white border-2 
        cursor-pointer text-slate-400 rounded-xl border-slate-300 hover:bg-slate-700 hover:text-white ${
          currentStep === 1 ? "bg-opacity-50 cursor-not-allowed" : ""
        }`}>
            Back
        </button>

        {/* Next Button */}
        <button 
        onClick={() => handleClick("Next")}
        className="px-4 py-2 font-semibold text-white uppercase transition duration-200 ease-in-out bg-green-500 cursor-pointer rounded-xl hover:bg-slate-700 hover:text-white">
            {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
    </div>
  )
}

export default StepperControl