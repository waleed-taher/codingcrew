import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Edtech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Tech Talk{" "}
        <span className="text-textGreen tracking-wide">@NED mechanical AV hall</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      2023-06-30 02:30 pm
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This event is a panel discussion featuring industry professionals who will share their experiences and insights into the tech industry.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lectures of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlify
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Members will have the opportunity to ask questions and learn from experts in the field.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          REGISTER NOW (Last Date of registration 2023-05-30 )
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span></span></a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Edtech;
