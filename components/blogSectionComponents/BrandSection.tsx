import Image from 'next/image'
import React from 'react'
import OctDaily from '../../assets/octDaily.png'
import Ned from '../../assets/logo.png'

const BrandSection = () => {
  return (
    <section className='bg-bodyColor mb-9 flex justify-evenly'>
        <Image src={OctDaily} alt='Sponsor-OctDaily' /> 
        <Image src={Ned} alt='Sponsor-OctDaily' />
        <Image src={OctDaily} alt='Sponsor-OctDaily' />
    </section>
  )
}

export default BrandSection