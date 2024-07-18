import React from "react";
import image from "../assets/images/SanuRaj-cropped.jpeg";
import github from "../assets/icons/icons8-github-48.png";
import linkedin from "../assets/icons/icons8-linkedin-24.png";
import location from "../assets/icons/icons8-location-16 (2).png";
import About from "./About";
import Skills from "./Skills";
function Hero() {
  return (
    <div className=" bg-white mt-3   ">
      <div className=" pt-2 md:flex justify-between items-center flex-row-reverse">
        <div>
          <div className=" py-4 ">
            <img
              className=" h-[50%]  mx-auto w-[80%]  rounded-xl "
              src={image}
              alt="avatar"
            />
          </div>
        </div>
        <div className="  p-3">
          <h1 className=" text-black mb-2 text-[30px] font-bold">
            Hi, I'am SanuRaj 👋
          </h1>
          <p>
            As a full stack developer specializing in the MERN stack (MongoDB,
            Express.js, React, Node.js), I have a strong passion for creating
            efficient and scalable web applications. With extensive experience
            in both front-end and back-end development, I am adept at building
            responsive, user-friendly interfaces and robust server-side
            functionalities.
          </p>
          <div className=" py-4">
            <div className=" flex items-center mb-2">
              <img className=" h-5 w-5 " src={location} alt="location" />
              <h4 className=" ml-2 font-semibold">Malappuram, Kerala</h4>
            </div>
            <ul className=" flex ">
              <li className=" h-5 w-5 ">
                <a
                  href="https://github.com/SanuRaj-K/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="Github" />
                </a>
              </li>
              <li className=" h-5 w-5 mx-2">
                <a
                  href="https://www.linkedin.com/in/sanu-raj-k-358459270/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li className=" h-5 w-5">
                <a href="*">
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default Hero;
