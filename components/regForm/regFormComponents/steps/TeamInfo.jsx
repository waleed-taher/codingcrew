import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'


const TeamInfo = () => {
  const {userData, setUserData} = useContext(StepperContext)
  const handleChange = (e) => {
    const {name , value} = e.target
    setUserData({...userData, [name]: value})
  }

  
  
  return (
    
      <div className="flex flex-col">
        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Team Name
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["teamname"] || ""}
              name='teamname'
              placeholder='Team Name'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Team Member 1 Name
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["member1"] || ""}
              name='member1'
              placeholder='John Doe'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Team Member 1 Email
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["member1email"] || ""}
              name='member1email'
              placeholder='johnDoe@gmail.com'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Member 2 Name
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["member2"] || ""}
              name='member2'
              placeholder='John Doe'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Member 2 Email
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["member2email"] || ""}
              name='member2email'
              placeholder='johnDoe@gmail.com'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>
            Event Name
          </div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input 
              onChange={handleChange}
              value = {userData["event"] || ""}
              name='event'
              placeholder='Web Kode OR KoderZ Kombat'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
              required
            />

          </div>

        </div>


      </div>
   
  )
  }
export default TeamInfo