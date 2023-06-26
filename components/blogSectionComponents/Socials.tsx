import React from 'react'
import {BsTwitch} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='flex mb-20'>
        <div className="text-[#ededed] mt-4 text-xl font-bold uppercase font-['Roboto']">Share : </div>
        <ul className='flex items-center '>
            <li>
                <button className='flex items-center space-x-3 px-10 py-5 mx-7 mb-6 font-bold text-center text-white uppercase transition-all bg-[#6441a3]'>
                    <BsTwitch/>
                    <span>1K +</span>
                </button>
            </li>
            <li>
                <button className='flex items-center space-x-3 px-10 py-5 mx-7 mb-6 font-bold text-center text-white uppercase transition-all bg-[#3b5997]'>
                    <FaFacebookF/>
                    <span>1K +</span>
                </button>
            </li>
            <li>
                <button className='flex items-center space-x-3 px-10 py-5 mx-7 mb-6 font-bold text-center text-white uppercase transition-all bg-[#1ba1f2]'>
                    <BsTwitter/>
                    <span>1K +</span>
                </button>
            </li>
            <li>
                <button className='flex items-center space-x-3 px-10 py-5 mx-7 mb-6 font-bold text-center text-white uppercase transition-all bg-[#0077b5]'>
                    <FaLinkedinIn/>
                    <span>1K +</span>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Socials