import React from "react";

const Achievements = () => {
  return (
    <div
      className="max-w-lg w-full text-center m-auto pt-36 pb-10"
      id="achievements"
    >
      <h1 className="text-4xl">Achievements</h1>
      <ul className="text-left mt-6 ">
        <li className="my-3 text-xl text-blue-700 font-semibold">
          &#8226; Won the Smart India Hackathon 2022 for DR705 problem statement
          on graphical password authentication.
        </li>
        <li className="my-3 text-xl text-blue-700 font-semibold">
          &#8226; Served as Web Development Head of Technika, the technical
          society of my college HBTU.
        </li>
        <li className="my-3 text-xl text-blue-700 font-semibold">
          &#8226; Served as Web Development Head of Adhyaay, the cultural
          society of my college HBTU.
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
