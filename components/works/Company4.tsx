import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Company4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Code Workshop:{" "}
        <span className="text-textGreen tracking-wide">@NED Computer Science LAB#2</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      2023-07-14 09:30 am
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participants will be able to learn new coding skills and techniques from experienced coders.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The workshop will provide an opportunity for participants to network with other coders and share their knowledge and experiences.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The workshop will be tailored to different skill levels, so participants can choose a workshop that suits their level of expertise.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          REGISTER NOW (Last Date of registration 2023-06-14 )
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span></span></a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Company4;
