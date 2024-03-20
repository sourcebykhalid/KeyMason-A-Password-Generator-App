import React from "react";

function About() {
  return (
    <div
      id="about"
      className=" flex justify-center items-center text-lg  p-9  shadow-md shadow-black rounded-md mb-36 font-semibold bg-black text-slate-100 min-h-fit sm:h-fit  sm:text-3xl sm:px-56 sm:p-60 w-full sm:w-fit "
    >
      <span>
        Say goodbye to weak and repetitive passwords! With{" "}
        <span className=" text-xl font-bold text-orange-600 ">keyMason</span>,
        creating strong and unique passwords for your online accounts has never
        been easier. Our advanced algorithms ensure that each password generated
        is virtually impenetrable to hackers. Plus, our user-friendly interface
        makes it simple for anyone to use. Join the thousands of satisfied users
        who trust{" "}
        <span className=" text-xl font-bold text-orange-600 ">keyMason</span> to
        protect their digital presence. Get started today and take control of
        your online{" "}
        <span className=" text-2xl text-green-600 font-bold">security.</span>
      </span>
    </div>
  );
}

export default About;
