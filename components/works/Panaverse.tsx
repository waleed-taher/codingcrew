import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Panaverse = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Google Coding Challenge{" "}
        <span className="text-textGreen tracking-wide">
          @NED main auditorium
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2023-06-24 08:30 am
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Members will participate in a coding challenge where they will have to
          solve coding problems within a given time frame.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This event is a great opportunity for members to showcase their coding
          skills and compete against each other.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            REGISTER NOW (Last Date of registration 2023-05-24 )
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span></a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Panaverse;
