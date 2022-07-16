import React from "react";
import config from "../config";
const IntroSection = () => {
  return (
    <section className="mt-10">
      <div className="flex mt-0 sm:mt-20 gap-20 justify-between ">
        <div className="flex flex-col  justify-center gap-y-10 w-screen items-center sm:items-start">
          <h1 className="text-5xl sm:text-7xl text-main font-bold text-center sm:text-start">
            This is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-main">
              {config.name}
            </span>
          </h1>
          <h3 className="text-main text-3xl text-center  sm:text-start">
            What else you need?
          </h3>
          <div className="group">
            <div className="bg-main w-fit p-3 rounded-lg cursor-pointer group-hover:skew-x-6 easeIn">
              <a target="_blank" href={config.inviteLink} rel="noreferrer">
                <span className="text-2xl text-dark">Add to discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center hidden">
          <img className="rounded-lg" alt="Discord" src="/discord.webp" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
