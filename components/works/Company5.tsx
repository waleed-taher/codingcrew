import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Company5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Social Event{" "}
        <span className="text-textGreen tracking-wide">@NED Main Auditorium</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      2023-07-16 10:30 am
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The social event will provide a relaxed and informal atmosphere for members to get to know each other outside of coding activities.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The event will allow members to bond over shared interests, and potentially form lasting friendships.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The social event can provide a much-needed break from coding and other academic pursuits, allowing members to recharge and refresh their minds.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          REGISTER NOW (Last Date of registration 2023-06-16 )
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span></span></a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Company5;
