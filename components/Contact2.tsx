import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import Footer from '../components/works/Footer';

const Contact2 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    if (username === "") {
      setErrMsg("Enter your Name");
    } else if (email === "") {
      setErrMsg("Enter your Email");
    } else if (message === "") {
      setErrMsg("Enter your Messages");
    } else {
      setSuccessMsg(
        `Hello dear ${username}, Thank you for your Messages. Additional Information will send to you shortly via your email at ${email}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-10 mx-auto mt-8 max-w-contentContainer xl:py-32"
    >
      <p className="flex items-center text-lg font-semibold tracking-wide font-titleFont text-textGreen">
        06. What's Next?
      </p>
      <h2 className="text-5xl font-semibold font-titleFont">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
      "If you're interested in joining the club or attending one of our events, please fill out the contact form below and one of our team members will get back to you as soon as possible.
      </p>
      <p className="max-w-[600px] text-center text-textDark">
      Thank you for your interest in the Coding Student Club. We look forward to connecting with you!
      </p>
      
      <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 w-[50%] h-full py-5">
        <div className="flex flex-col h-full max-w-2xl gap-6 mx-auto md:gap-12">
          {/* <h1 className="text-4xl font-bold tracking-widest text-center">
            Lets Connect!
          </h1>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">Karachi, Pakistan</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">+92 345 2409822</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-3xl text-designColor" />
              <p className="text-sm tracking-wide">bakarspvts@gmail.com</p>
            </div>
          </div> */}

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-[600px] h-full text-center flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="flex flex-col items-center w-full gap-4 md:gap-10">
              <div className="flex flex-col items-center w-full gap-4 md:flex-row md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full md:w-1/2 py-2 px-4 text-base text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className=" bg-[#5a5a5a] backdrop-blur-sm bg-opacity-30 rounded-md w-full text-base h-36 p-4 text-white placeholder:text-gray-400 font-medium placeholder:font-normal outline-none border-transparent border-2 focus-within:border-textGreen duration-200 resize-none"
              ></textarea>
              {errMsg && (
                <p className="w-full py-1 text-base font-semibold tracking-wider text-center bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGreen font-titleFont text-textGreen hover:bg-hoverColor"
              >
                Submit Now
              </button>
            </form>
          )}
          {/* <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-md w-full py-10 bg-[#5a5a5a] flex flex-col md:flex-row px-4 md:items-center justify-between">
            <div className="text-lg font-thin">
              <p>For project enquries</p>
              <p>
                or say 'Hello' -{" "}
                <span className="font-semibold text-designColor">
                  bakarspvt@gmail.com
                </span>
              </p>
            </div>
            <a href="https://reactbd.com/" target="_blank">
              <p>© 2023 saimirshad reserved.</p>
            </a>
          </div> */}
            <a href="https://github.com/Saim-Irshad" target = "_blank"><p className="max-w-[600px] text-xs text-center text-textDark hover:text-textGreen">
        Designed and Developed by Team Code Morphers 
      </p></a>
        </div>
      <Footer/>
      </div>
    </section>
  );
};

export default Contact2;
