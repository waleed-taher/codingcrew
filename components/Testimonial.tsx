import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import { profileImg } from "../public/assets";
import Image from "next/image";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white py-20 flex justify-center items-center"
    >
      <div className="w-[350px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-base font-bodyFont text-textDark text-center leading-8">
                <span className="text-textGreen">James Hilner -</span> I'm so grateful for the Coding Crew! Thanks to their workshops and events, I was able to develop my skills as a programmer and connect with other students who share my passion for coding. It's an amazing community to be a part of and I highly recommend it to anyone who wants to take their coding skills to the next level.
                
              </p>  
              
            </div>
            <div>
              <p className="text-base text-textDark text-center leading-8">
                <span className="text-textGreen">Michael Aiden -</span> Joining the Coding Crew was one of the best decisions I've made in college. Not only did I learn so much about coding, but I also made some great friends and networking connections. The club's events are always so fun and engaging, and I always leave feeling inspired and motivated to keep learning.
              </p>
            </div>
            <div>
              <p className="text-base text-textDark text-center leading-8">
                <span className="text-textGreen">Mathew Wade -</span> I had always been interested in coding, but I didn't know where to start. The Coding Crew made it so easy for me to get started and provided me with all the resources and support I needed to succeed. Thanks to them, I landed my first internship in the tech industry and I couldn't be happier. I'm so grateful for the Coding Crew and all they do for their members!
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
