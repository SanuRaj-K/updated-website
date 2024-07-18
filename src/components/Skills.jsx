import React from "react";
import skillsData from "../data/skills";

function Skills() {
  return (
    <div className=" px-4">
      <div>
        <div className=" flex justify-center   ">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Skills
            </div>
          </button>
        </div>
        <h3 className=" text-center font-bold py-3">
          The Skills, tools, technologies I am good at:
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-5 gap-4">
          {skillsData.map((item, index) => (
            <div className=" flex flex-col  items-center" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className=" h-16 w-16 "
              ></img>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
