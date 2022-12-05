import React from "react";

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="experience">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
        My Work Experience 💻
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#c2e7d9" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Truebroker (Frontend Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Made fully responsive company's website and currently working on
            company's app Truebroker,integrated different API's and made
            different screens for the app.
          </p>
          <p className="text-center mt-4 text-red-600">Oct 2022 - Present</p>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#ffb3c1" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Renderbit Technologies (Mobile App Developer Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Worked on a cosmetics app named Smudg where I worked as a React
            Native Developer and made many screens for the app as per the figma
            mock up and integrated different social login API's, product
            recommendation, product match API's.
          </p>
          <p className="text-center mt-4 text-red-600">Jul 2022 - Sep 2022</p>
          <a
            href="https://drive.google.com/file/d/1oZlXCnFtg1OqJB3rl31swT-zCP7HRU_0/view"
            className="text-center mt-4 text-blue-600"
          >
            Certificate Link
          </a>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#90e0ef" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Blokminers (Full Stack Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Made company's website (blokminers.io) and made entire FrontEnd of
            buk(hotel booking app).
          </p>
          <p className="text-center mt-4 text-red-600">May 2022 - Jun 2022</p>
          <a
            href="https://drive.google.com/file/d/10peAUaEk7kzVFx5LbBXNO3T5L-d0vBuX/view?usp=drivesdk"
            className="text-center mt-4 text-blue-600"
          >
            Certificate Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
