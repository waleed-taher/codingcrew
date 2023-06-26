import Image from 'next/image'
import React from 'react'
import author from '../../assets/author.png'
import Wrapper2 from './Wrapper2'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Author = () => {
  return (
    <Wrapper2>
        <div className='flex justify-start space-x-9'>
            <div>
                <Image src={author} alt='authorImg' className='rounded-full' width={150}/>
            </div>
        <div >
            <div className='mb-4'>
                <h3 className="text-xl font-bold font-['Roboto'] text-[#ededed]">Ashley Graham</h3>
            </div>
        
            <div className='mb-20'>
                <p className="text-lg font-['Roboto'] text-left text-[#ededed] mb-6">
                    At 29 years old, my favorite compliment is being told that I look like my mom. <br />
                    Seeing myself in her image, like this daughter up top, makes me so proud of how <br /> far I’ve come, 
                    and so thankful for where I come from.
                </p>
                <ul className='flex items-center justify-start space-x-5 cursor-pointer'>
                    <li>
                        <AiFillTwitterCircle className='text-[#ededed] text-4xl'/>
                    </li>
                    <li>
                        <AiFillTwitterCircle className='text-[#ededed] text-4xl'/>
                    </li>
                    <li>
                        <AiFillTwitterCircle className='text-[#ededed] text-4xl'/>
                    </li>
                    <li>
                        <AiFillTwitterCircle className='text-[#ededed] text-4xl'/>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </Wrapper2>
  )
}

export default Author