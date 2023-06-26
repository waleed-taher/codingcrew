import React from "react";
import Section from "../Section";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

import { amazonImg, cyberImg, noorShop, profileImg } from "../../public/assets";


const Sada = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <Section title="Gallery" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* project1 */}
        <div className="m-10 flex flex-col lgl:flex-row gap-6">
          <a
            className="w-[100%] object-right lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-bodyColor/20 rounded-lg top-0 scale-105 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Hackathon
              </p>
              <h3 className="text-2xl font-bold ">XYZ</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
            The Coding Crew organized a hackathon for members to work collaboratively on coding projects over a weekend. The event was a huge success, with over 50 members participating and presenting their projects at the end. The gallery showcases photos of members coding together, presenting their projects, and celebrating their hard work.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>version control</li>
              <li>cloud platforms</li>
              <li>Api</li>
              <li>Linux</li>
              <li>CTF</li>
            </ul>
            <div className="text-2xl flex gap-4">
              
            </div>
          </div>
        </div>
        
        {/* project2 */}
        <div className="m-10 flex flex-col lgl:flex-row-reverse gap-6">
          <a
            className="w-full lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={profileImg}
                alt="profileImg"
              />
              <div className="absolute w-full h-full bg-bodyColor/30 rounded-lg scale-105 top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Coding Workshop
              </p>
              <h3 className="text-2xl font-bold">Web Dev</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
            The Coding Crew hosted a workshop on web development, providing members with hands-on experience in building a website from scratch. Members learned HTML, CSS, and JavaScript and worked through a series of exercises to build their own website. The gallery showcases photos of members engaged in the workshop, working on their website, and sharing their finished products with each other.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              
            </div>
          </div>
        </div>
        {/* project3 */}
        <div className="m-10 flex flex-col lgl:flex-row gap-6">
          <a
            className="w-full lgl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="float-right rounded-md w-full h-full object-contain  scale-105 group-hover:scale-100 duration-500"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-bodyColor/20 rounded-lg top-0 scale-105 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full lgl:w-1/2 flex flex-col gap-6 justify-between items-end text-right lgl:-ml-16 z-10">
            <div className="scale-100 hover:scale-105 duration-500">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Speaker Series
              </p>
              <h3 className="text-2xl font-bold scale-100">Q&A session</h3>
            </div>
            <p className="text-sm md:text-base bg-textCards p-2 md:p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
            The club invited a guest speaker who is a successful programmer to share their experience and insights with members. The talk was followed by a Q&A session where members had the opportunity to ask questions and network with the speaker. The gallery displays photos of the speaker presenting, members engaged in the Q&A, and networking during the post-event social.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Q&A</li>
              <li>Networking</li>
              <li>Work-Life</li>
              <li>Corporate Sector</li>
              <li>Finance</li>
            </ul>
            <div className="text-2xl flex gap-4">
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sada;
