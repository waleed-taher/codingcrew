import React from 'react'
import Wrapper2 from './Wrapper2'

const CommentSection = () => {
  return (
    <div>
        <Wrapper2>
            <div className='mb-6'>
                <h3 className="text-[#ededed] text-3xl font-bold font-['Roboto']">Leave A Reply</h3>
            </div>
            <div className='mb-8'>
                <h5 className='text-[#ededed] text-lg'>Your email address will not be published.
                    <span className='text-[#FF4754] text-md'>*</span>
                </h5>
            </div>
            <textarea className='px-3 pt-3 resize-none border-solid border-[#494e51] mb-6 ' placeholder='Comment' rows={8} cols={110}>
                
            </textarea>
            <div className='grid-cols-2 gap-6 mb-10 space-x-8'>
                <input autoComplete='off' type='text' name='name' placeholder='Name'
                className=" text-[#ededed] placeholder-gray-400 border-gray-500 border-opacity-50 px-4 py-4 focus:ring-2 focus:ring-[#60bf55]"
                />
                

                <input autoComplete='off' type='text' name='email' placeholder='Email'
                className=" text-[#ededed] placeholder-gray-400 border-gray-500 border-opacity-50  px-4 py-4 focus:ring-2 focus:ring-[#60bf55]"
                />   
            </div>
            <button className="p-4 text-white bg-blue-500 rounded-full font-bold font-['Roboto'] mb-10">
                Submit A Reply
            </button>
        </Wrapper2>
    </div>
  )
}

export default CommentSection