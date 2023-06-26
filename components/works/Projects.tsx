import React, { useState } from "react";
import Section from "../Section";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { amazonImg, profileImg } from "../../public/assets";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="px-4 py-24 mx-auto max-w-contentContainer" id="blogs">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold font-titleFont"><span className="m-10 mr-2 text-lg md:text-lg text-textGreen">5.</span>
          Blogs
        </h2>
        <p className="mt-6 text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-10 mt-10 md:grid-cols-2 lgl:grid-cols-3">
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        <ArchiveCard
          title="Panaverse Dao Website"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
          listItem={["NextJS", "TypeScript", "Tailwind"]}
          link=""
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Panaverse Dao Website"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
                listItem={["NextJS", "TypeScript", "Tailwind"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Panaverse Dao Website"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
                listItem={["NextJS", "TypeScript", "Tailwind"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Panaverse Dao Website"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis"
                listItem={["NextJS", "TypeScript", "Tailwind"]}
                link=""
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center mt-12">
        {showMore ? 
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
         : 
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        }
      </div>
    </div>
  );
};

export default Projects;
