import Wrapper from "./Wrapper"
import Image from "next/image"
import Poster from '../../assets/poster.jpg'
import HeroAuthor from "./HeroAuthor"

const Hero = () => {
  return (
    <section className="bg-bodyColor mb-9 color-white">
        <Wrapper>
            <div className="flex space-x-8">
                {/* Left Section */}
                <div className="flex-1 mt-24">
                    <button className="px-4 py-1 mx-4 mb-6 text-sm font-bold text-center text-white uppercase transition-all bg-blue-600 hover:bg-blue-400">Technology</button>
                    <h1 className="text-white mx-4 text-3xl font-bold leading-[40px] uppercase ">VR Is the Use of Computer</h1>
                    <h1 className="text-white mx-4 text-3xl font-bold leading-[40px] uppercase">Technology to Create a</h1>
                    <h1 className="text-white mx-4 text-3xl font-bold leading-[40px] uppercase">Simulated Environment.</h1>
                    <HeroAuthor />
                </div>
                {/* Right Section */}
                <div className="flex-1 ">
                    <Image src={Poster} alt="Hero Image" height={470} width={550} />
                </div>
            </div>            
        </Wrapper>
    </section>
  )
}

export default Hero