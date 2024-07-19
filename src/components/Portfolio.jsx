import React from "react";
import Button from "./Button";
import { projectData } from "../data/projectsData";
import LinkButton from "./LinkButton";
 
function Portfolio() {
  return (
    <div className=" px-3 pt-10">
      <div className=" flex justify-center  ">
        <Button content={"Portfolio"} />
      </div>
      <h3 className=" text-center font-bold py-3">
        Some of the Projects I have Built:
      </h3>
      <div className="flex flex-col space-y-8">
        {projectData.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between py-8 items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2  bg-[#F5F0EF] rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className=" w-[80%] mx-auto p-10 rounded-2xl h-[80%]"
              />
            </div>
            <div className="w-1/2 px-5">
              <h2 className=" text-[30px] text-black font-bold">
                {item.title}
              </h2>
              <p className=" py-3   max-w-[500px] ">{item.description}</p>
              <div className=" flex">
                <LinkButton url={item.frontend} content={"Frontend"} />
                <div className=" px-3">
                  <LinkButton url={item.backend} content={"Backend"} />
                </div>

                <LinkButton url={item.live} content={"Live"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
