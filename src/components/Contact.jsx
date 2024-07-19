import React from "react";
import Button from "./Button";
import call from "../assets/icons/icons8-call-96.png";
import mail from "../assets/icons/icons8-mail-96.png";

function Contact() {
  return (
    <div className=" mt-16">
      <div className=" flex justify-center  ">
        <Button content={"Get in touch"} />
      </div>
      <div className="flex flex-col mt-10 `lg:w-[30%]` w-[80%] mx-auto p-5 border-2 text-center  mb-7 rounded-xl  justify-center items-center content-center        ">
        <p>
          What's next? feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className=" text-black font-bold ">
          <div className=" flex my-2 cursor-pointer items-center">
            <a href="mailto:sanurajk55@gmail.com">
              <img className=" h-[20px] w-[20px]" src={mail} alt="mainIcon" />
            </a>
            <div className=" ml-2"> sanurajk55@gmail.com</div>
          </div>
          <div className=" flex cursor-pointer  items-center">
            <a href="tel:+916282479346">
              <img className=" h-[20px] w-[20px]" src={call} alt="callIcon" />
            </a>
            <div className=" ml-2"> +91-6282479346</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
