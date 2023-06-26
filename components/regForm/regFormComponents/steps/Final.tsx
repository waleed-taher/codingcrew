import React from 'react'

const Final = () => {
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
          <svg
            className='w-24 h-24'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path 
              fillRule='evenodd'
              d='M10 18a8 8-0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            />
          </svg>
        </div>
        <div className='mt-3 text-xl font-semibold text-green-500 uppercase'>
            Congratulations
        </div>
        <div className='text-lg font-semibold text-gray-500'>
          Your Form Has Been Submitted
        </div>
        <a className='mt-10' href='/'>
          <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg hover:text-green-100 focus:shadow-outline hover:bg-green-500'>
            Close
          </button>
        </a>
        
      </div>

    </div>
  )
}

export default Final