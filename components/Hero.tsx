import React from "react";
import { motion } from "framer-motion";
import HorizontalTextEffect from "./works/HorizontalTextEffect";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col gap-4 py-10 mx-auto max-w-contentContainer mdl:py-24 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="pt-10 text-lg tracking-wide font-titleFont text-textGreen"
      >
        Welcome to
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col text-4xl font-semibold duration-500 scale-100 lgl:text-7xl font-titleFont hover:scale-105"
      >
        The Coding Crew.{" "}
        <span className="mt-2 text-textDark lgl:mt-4">
        Join the coding revolution with our club!
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-2-[650px] text-textDark font-medium"
      >
        {" "}
        We are a community of students who are passionate about coding and technology. Our aim is to promote computer science education and create a fun and engaging environment for students to learn and explore new technologies.     {" "}
        <a href="#Experience" className="scroll-smooth">
          <span className="relative inline-flex overflow-x-hidden cursor-pointer text-textGreen h-7 group">
          See upcoming activities
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <div className="flex space-x-6">
        <a href="/teamForm" target="_blank"><motion.button initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }} className="flex-1 text-sm tracking-wide duration-300 border rounded-md w-52 h-14 font-titleFont border-textGreen text-textGreen hover:bg-hoverColor">Register as a Team</motion.button></a>
        <a href="/teamForm" target="_blank"><motion.button initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }} className="flex-1 text-sm tracking-wide duration-300 border rounded-md w-52 h-14 font-titleFont border-textGreen text-textGreen hover:bg-hoverColor">Register as an Individual</motion.button></a>

      </div>  


    </section>
  );
};

export default Hero;
