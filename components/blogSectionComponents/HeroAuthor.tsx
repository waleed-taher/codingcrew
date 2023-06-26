import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { BsActivity } from 'react-icons/bs'
import {AiOutlineShareAlt} from 'react-icons/ai'
import Author from '../../assets/author.png'


const HeroAuthor = () => {
  return (
    <section>
        <Wrapper>
            <ul className='flex space-x-4 mt-14'>
                <li className='flex items-center space-x-4'>
                   <Image src={Author} alt='author-image' width={30} className='rounded-full'/>
                   <span className='text-[#ededed] cursor-pointer hover:text-[#FF4754]'>Ashley Graham</span>
                </li>
                <li className='flex items-center space-x-4'>
                    <BsActivity className=''/> 
                    <span className='text-[#ededed]'>2K Views</span>
                </li>
                <li className='flex items-center space-x-4'>
                    <AiOutlineShareAlt/> 
                    <span className='text-[#ededed]'>200 Shares</span>
                </li>
            </ul>
        </Wrapper>
    </section>
  )
}

export default HeroAuthor