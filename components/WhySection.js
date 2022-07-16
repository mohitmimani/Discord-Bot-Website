import React from "react";
import config from "../config";
const WhySection = () => {
  return (
    <section id="features" className="mt-20 min-h-[100vh] ">
      <div className="flex justify-between flex-col lg:items-start items-center lg:flex-row gap-3">
        <h2 className="text-5xl xl:text-6xl flex flex-row lg:flex-col xl:flex-row gap-3 font-bold text-zinc-300">
          Why{" "}
          <div className="inline-flex">
            <div className="text-white">
              <h2>Probot</h2>
              <hr className="border-8 border-main bg-main ml-2 relative -top-4 -z-50 opacity-75" />
            </div>
          </div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2   gap-6 texture rounded-lg texture">
          {config.Features.map((data) => (
            <div
              key={data.name}
              className="h-72 bg-main max-w-[18rem] min-w-[100%] rounded-lg p-5"
            >
              <div className="flex flex-col gap-3">
                <span className="text-dark ">{data.icon}</span>
                <h3 className="text-4xl text-dark font-bold">{data.name}</h3>
                <p className="text-dark xl:text-lg text-opacity-80">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
