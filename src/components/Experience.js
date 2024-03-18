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
            Nudge (SDE Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Spearheaded the development and implementation of cutting-edge
            Software Development Kits (SDKs) to address critical functionality
            gaps in 5+ high-impact projects to increase user engagement by 30% •
            Orchestrated the seamless integration of innovative React Native
            SDKs into 10+ high-profile mobile applications, including those
            owned by Apnaclub, Centa, Tata Communications, and many more.
          </p>
          <p className="text-center mt-4 text-red-600">Nov 2023 - Present</p>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#90e0ef" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            DoEasily (SDE Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Pioneered the creation of the DoEasily fintech app for the gold and
            silver market using React Native, achieving a 100% project
            completion rate. • Engineered high-performance APIs with Java and
            Spring Boot, resulting in a 30% reduction in data retrieval time and
            a 20% improvement in app response speed. • Took full ownership,
            delivering the app on time, which was downloaded by over 1000 users
            within the first quarter, demonstrating its immediate market impact.
          </p>
          <p className="text-center mt-4 text-red-600">Aug 2023 - Nov 2023</p>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "yellow" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Medbikri (SDET Intern)
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Spearheaded the development of a React Native mobile application,
            serving 100,000+ users. • Enabled seamless and intuitive user
            experiences through meticulously crafted Express APIs, resulting in
            increased user engagement and higher conversion rates • Automated
            testing with Appium, significantly reducing bugs by 70% and
            enhancing software quality. • Developed and implemented new
            features, contributing to an increase in user engagement by 25%.
          </p>
          <p className="text-center mt-4 text-red-600">Dec 2022 - Jul 2023</p>
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
      </div>
    </div>
  );
};

export default Experience;
