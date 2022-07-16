import React, { useState } from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import config from "../config";
const JoinOurCommunity = () => {
  const defaultCount = [
    config.serverCount,
    config.memberCount,
    config.executedCommand,
    config.availableCommand,
  ];
  const [data, setData] = useState([0, 0, 0, 0]);
  const { ref: myRef, inView: isVisible } = useInView();
  setTimeout(() => {
    if (isVisible) {
      setData([
        defaultCount[0] > data[0]
          ? data[0] +
            (data[0] + Math.round(defaultCount[0] / 100) > defaultCount[0]
              ? 1
              : Math.round(defaultCount[0] / 100))
          : data[0],
        defaultCount[1] > data[1]
          ? data[1] +
            (data[1] + Math.round(defaultCount[1] / 100) > defaultCount[1]
              ? 1
              : Math.round(defaultCount[1] / 100))
          : data[1],
        defaultCount[2] > data[2]
          ? data[2] +
            (data[2] + Math.round(defaultCount[2] / 100) > defaultCount[2]
              ? 1
              : Math.round(defaultCount[2] / 100))
          : data[2],
        defaultCount[3] > data[3]
          ? data[3] +
            (data[3] + Math.round(defaultCount[3] / 100) > defaultCount[3]
              ? 1
              : Math.round(defaultCount[3] / 100))
          : data[3],
      ]);
    } else {
    }
  }, 50);
  return (
    <section id="stats" className="mt-20 ">
      <div className="flex flex-col ">
        <div className="flex flex-col text-6xl gap-3 text-main  font-bold">
          <div className="inline-flex">
            <div>
              <h3 className="text-white">Join Our</h3>
              <hr className="border-8 border-main bg-main ml-2 relative -top-4 -z-50 opacity-75" />
            </div>
          </div>
          <h4 className="text-5xl ml-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-main">
            Community Now
          </h4>
        </div>
        <div className="flex flex-col sm:flex-row  justify-between gap-4">
          <div ref={myRef}>
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 gap-4   rounded-xl ">
              <div className="text-dark bg-main p-3 rounded-lg max-w-[18rem] min-w-[100%]">
                <h3 className="text-2xl opacity-80 easeIn">{data[0]}</h3>
                <h2 className="text-3xl">Total server</h2>
              </div>
              <div className="text-dark bg-main p-3 rounded-lg max-w-[18rem] min-w-[100%]">
                <h3 className="text-2xl opacity-80">{data[1]}</h3>
                <h2 className="text-3xl">Member Count</h2>
              </div>
              <div className="text-dark bg-main p-3 rounded-lg max-w-[18rem] min-w-[100%]">
                <h3 className="text-2xl opacity-80">{data[2]}</h3>
                <h2 className="text-3xl">Executed command</h2>
              </div>
              <div className="text-dark bg-main p-3 rounded-lg max-w-[18rem] min-w-[100%]">
                <h3 className="text-2xl opacity-80">{data[3]}</h3>
                <h2 className="text-3xl">Available command</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:w-[50%]  gap-x-5">
            <a href={config.facebookLink} target="_blank" rel="noreferrer">
              <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
            </a>
            <a href={config.discordLink} target="_blank" rel="noreferrer">
              <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
            </a>
            <a href={config.youtubeLink} target="_blank" rel="noreferrer">
              <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurCommunity;
