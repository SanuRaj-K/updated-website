import React from "react";
import Button from "./Button";
import { experiences } from "../data/workExperiences";

const Experiences = ({ id }) => {
  return (
    <div id={id} className=" px-3 pt-10">
      <div className=" flex justify-center  ">
        <Button content={"Experiences"} />
      </div>
      <div className="  grid my-10  grid-cols-1 place-items-center gap-5 w-full">
        {[...experiences].reverse().map((experience, index) => (
          <div
            key={index}
            style={{
              background: experience.bg,
            }}
            className=" text-black flex flex-col items-center border-2 px-5 py-10 rounded-lg w-full md:w-[700px] "
          >
            <div className="">
              <img
                className={` w-[100px] md:w-[150px]`}
                src={experience.logo}
                alt={experience.company}
              />
            </div>
            <div className=" flex flex-col py-2 items-center">
              <span className="  underline hover:no-underline font-bold text-[22px] text-black">
                <a
                  href={`https://${experience.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {experience.company}
                </a>
              </span>
              <span className=" py-1 font-semibold text-[18px] ">
                {experience.position}
              </span>
              <span className=" capitalize">{experience.duration}</span>
            </div>
            <div className=" bg-gray-400 w-[60%] h-[1px] my-2"></div>
            <div>
              <ul className=" list-disc  px-1 md:px-5">
                {experience.description.map((item, index) => (
                  <li className=" py-1 text-[12px] md:text-[14px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
