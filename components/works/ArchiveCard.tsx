import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import Link from "next/link";

interface Props{
    title:string;
    des:string;
    listItem:string[];
    link:string;
};

const ArchiveCard = ({title ,des ,listItem , link}:Props) => {
  return (
    <div>
    <a href={'/blog'} target="_blank">
      <div className="flex flex-col justify-center w-full gap-6 transition-transform duration-300 rounded-lg h-80 bg-textCards p-7 hover:-translate-y-2 group bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70">
        <div className="flex items-center justify-between">
          <FaRegFolder className="text-4xl text-textGreen" />
          
            <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
          
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-wide font-titleFont group-hover:text-textGreen">
            {title}
          </h2>
          <p className="mt-3 text-sm">
            {" "}
            {des}
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-between gap-2 text-xs mdl:text-sm text-textDark">
          {listItem.map((item,i)=>(
            <li key = {i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
    </div>
  );
};

export default ArchiveCard;
