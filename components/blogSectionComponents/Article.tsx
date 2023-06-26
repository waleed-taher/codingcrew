import React from 'react'
import Wrapper2 from '../../components/blogSectionComponents/Wrapper2'
import PostImg from '../../assets/post-img.jpg'
import Image from 'next/image'
import Ad from '../../assets/adBanner.jpg'

import "@blueprintjs/core/lib/css/blueprint.css";
import Socials from './Socials'

const Article = () => {
  return (
    <article>
        <Wrapper2>
        <div>
            <p className="mb-6 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                For those of us who want to say thank you to our moms, 
                it’s not always easy to put those big feelings in words. 
                Which is where Dribbble comes in.
            </p>
            <p className="mb-8 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                These eight shots crystallize the hard work moms put into keeping their kids alive, happy, and healthy. 
                They might give you the inspiration you need for filling out that card—or stand alone for your mom’s interpretation.
            </p>
            <div className='items-center mb-8'>
                <Image src={PostImg} alt='postImage' className='w-full'/>
                <span className='text-lg italic text-[#ededed]'>Drawn for an insurance company</span>
            </div>
            <p className="mb-8 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                Moms are the ones who bandage our boo-boos when we’re little and continue to take care of us as we get 
                older often sacrificing their own needs so they can help with ours. 
                Cruising on a bike to help heal our injuries is the most mom thing one can do.
            </p>
            <div className='items-center w-full mb-8'>
                <Image src={Ad} alt='postImage' className='w-full'/>
            </div>
            <blockquote className="bp4-blockquote">
                <p className="mb-6 p-8 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Facebook, 
                    this is a hand-lettered design for a poster. 
                    Quote is Facebook Building 8 VP’s Regina Dugan—and mine.
                </p>
            </blockquote>
            <p className="mb-6 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                Moms are the ones who bandage our boo-boos when we’re little and continue to take care of us as we get older—often 
                sacrificing their own needs so they can help with ours.
                Cruising on a bike to help heal our injuries is the most mom thing one can do.
            </p>
            <p className="mb-10 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                They’re the ones we rely on for playdates and emotional support, homework help and babysitting. 
                Moms are the ultimate dependable support. Like, hopefully, the button on your jeans.
            </p>
            <h3 className="text-[#ededed] font-['Roboto'] text-3xl font-bold mb-6">Another Heading</h3>
            <p className="mb-6 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                Moms are the ones who bandage our boo-boos when we’re little and continue to take care of us as we get older—often 
                sacrificing their own needs so they can help with ours.
                Cruising on a bike to help heal our injuries is the most mom thing one can do.
            </p>
            <p className="mb-10 text-xl font-['Roboto'] text-left text-[#ededed] leading-1">
                They’re the ones we rely on for playdates and emotional support, homework help and babysitting. 
                Moms are the ultimate dependable support. Like, hopefully, the button on your jeans.
            </p>

            
        </div>
        <Socials />
        </Wrapper2>
    </article>
  )
}

export default Article