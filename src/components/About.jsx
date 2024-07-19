import React from "react";
import heroTwo from "../assets/images/max-duzij-qAjJk-un3BI-unsplash.jpg";
import Button from "./Button";
function About() {
  return (
    <div className=" pt-9">
      <div className=" flex justify-center  ">
        <Button content={"About"} />
      </div>
      <div className=" md:flex justify-between mt-10  ">
        <div className=" md:w-[50%]">
          <img
            className="md:h-[600px] rounded-xl h-[300px] w-[280px] sm:h-[550px] sm:w-[520px]  mx-auto md:w-[570px]"
            src={heroTwo}
            alt="Herotwo"
          />
        </div>
        <div className=" md:w-[50%]  py-8 md:mx-auto  md:py-0 md:ml-4 mx-4">
          <h1 className=" text-[30px] mb-4  text-black font-bold">
            Curious About Me....? Here You Have It :)
          </h1>
          <p className=" md:w-[80%]">
            I am a passionate, self proclimed developer, who specialises in Full
            Stack Developement (MERN). I am very enthusiastic about bringing the
            technical and visual aspects of digital products to life. User
            experience, pixcel perfect design and write clear, readable, highly
            perfomant code matters to me. <br /> <br />I began my Journy as a
            Frontend Developer intern in 2022, and since then, I've continued to
            grow and evolve as a developer, taking on new challenges and
            learning the new technologies along the way. I am building
            cuting-edge web applications using modern technologies. <br />{" "}
            <br />I am very much a progressive thinker and enjoy working on
            products end to end, from ideation all the way to development.{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
