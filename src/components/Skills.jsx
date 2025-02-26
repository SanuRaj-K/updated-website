import React from "react";
import skillsData from "../data/skills";
import Button from "./Button";

function Skills({ id }) {
  return (
    <div id={id} className=" px-4 py-10">
      <div>
        <div className=" flex justify-center mb-4   ">
          <Button content={"Skills"} />
        </div>
        <h3 className=" text-center font-bold py-3">
          The Skills, tools, technologies I am good at:
        </h3>
      </div>
      <div>
        <div className=" my-10  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skillsData.map((item, index) => (
            <div
              className=" flex flex-col   items-center hover:text-black cursor-pointer hover:font-bold  "
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                className=" rounded-md size-5 md:size-10 hover:animate-spin my-3 "
              ></img>
              <div className=" text-[12px] md:text-[16px]">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
