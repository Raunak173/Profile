import React from "react";
import resume from "./resume.pdf";

const Resume = () => {
  return (
    <div
      className="max-w-lg w-full text-center m-auto pt-36 pb-10"
      id="achievements"
    >
      <h1 className="text-4xl my-5">My Resume</h1>
      <iframe
        title="Resume Preview"
        src={resume}
        width="100%"
        height={400}
      ></iframe>
      <a
        href={resume}
        download="Raunak_Agarwal_Resume.pdf"
        className="text-red-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
