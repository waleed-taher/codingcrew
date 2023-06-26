import React from "react";
import Section from "./Section";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg, cyberImg } from "../public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <Section title="Mission" titleNo="01" />
      <div className="m-10 flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            The Coding Crew is a coding club that is dedicated to promoting and
            enhancing computer science education and coding skills. Our
            <span className="text-textGreen"> aim</span> is to create a
            community of coders who can learn from each other and collaborate on
            projects. We believe in helping students develop technical and
            problem-solving skills that are necessary for success in the tech
            industry.{" "}
          </p>
          <p>
            Our vision is to become a leading coding club that inspires and
            empowers students to become innovative problem solvers and
            technology leaders. We want to create a culture of creativity,
            collaboration, and continuous learning. At The Coding Crew, our{" "}
            <span className="text-textGreen">
              mission is to provide a supportive environment where students can
              develop their coding skills and pursue their passions.
            </span>{" "}
            We foster a sense of community and belonging among our members and
            prepare them for success in the tech industry and beyond.
          </p>
          
          <ul className="max-2-[450px] text-sm font-titleFont grid grid-cols-2 mt-6 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Enhance computer science education
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Learn from each other and collaborate on projects.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Develop technical and problem-solving skills
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Explore new technologies.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Competitions, hackathons, and coding challenges
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Culture of creativity, collaboration, and continuous learning.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Supportive environment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Success in the tech industry and beyond.
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 ">
              <Image
                className=" rounded-lg h-full object-cover scale-105 group-hover:scale-100 duration-500"
                src={cyberImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block scale-105  absolute w-full h-80 bg-hoverColor/10 rounded-md top-0 left-0 group hover:bg-transparent duration-300 "></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex absolute p-2 m-3 w-full h-80 border border-textGreen rounded-md group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300 "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
