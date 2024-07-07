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
          <p
            className="mt-6 text-xl font-semibold text-center hover:underline"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.ajeei&hl=en_IN"
              )
            }
          >
            SigIq AI (SDE Intern)
          </p>
          <p className="text-center mt-4 text-red-600">Apr 2024 - Present</p>
          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong> Contributed
              to the PadhAi app, an AI app that topped the UPSC exam with a
              score of 175+ marks using React Native.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Developed a
              live website for an important event with over 10,000 footfalls
              using React.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Created a
              live web app with AI capabilities to help UPSC teachers grade
              essays.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Enhanced user experience and functionality through innovative use
              of React Native.
            </p>
          </p>
        </div>
        <div className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72 bg-blue-200">
          <p
            className="mt-6 text-xl font-semibold text-center hover:underline"
            onClick={() => window.open("https://www.nudgenow.com/")}
          >
            Nudgenow (SDE Intern)
          </p>
          <p className="text-center mt-4 text-red-600">Nov 2023 - Apr 2024</p>
          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong> Spearheaded
              the development of SDKs to address critical functionality gaps in
              5+ projects, increasing user engagement by 30%.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Integrated
              innovative React Native SDKs into 10+ high-profile mobile
              applications, including Apnaclub, Centa, and Tata Communications.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Collaborated
              with cross-functional teams to ensure seamless implementation and
              optimal performance.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Conducted thorough testing and debugging to ensure high-quality
              deliverables.
            </p>
          </p>
        </div>
        <div className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72 bg-yellow-200">
          <p
            className="mt-6 text-xl font-semibold text-center hover:underline"
            onClick={() =>
              window.open("https://apps.apple.com/in/app/doeasily/id6458530978")
            }
          >
            DoEasily (SDE Intern)
          </p>
          <p className="text-center mt-4 text-red-600">Aug 2023 - Nov 2023</p>
          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong> Pioneered the
              development of the DoEasily fintech app for the gold and silver
              market using React Native, achieving 100% project completion.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Engineered
              high-performance APIs with Java and Spring Boot, reducing data
              retrieval time by 30% and improving app response speed by 20%.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Led the
              project from concept to deployment, ensuring robust and scalable
              solutions.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Implemented efficient coding practices and optimized the
              application for better performance.
            </p>
          </p>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#ffb3c1" }}
        >
          <p
            className="mt-6 text-xl font-semibold text-center hover:underline"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.medbikri&hl=en_IN"
              )
            }
          >
            Medbikri (SDET Intern)
          </p>
          <p className="text-center mt-4 text-red-600">Dec 2022 - July 2023</p>
          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong> Developed a
              React Native mobile application serving over 100,000 users,
              enhancing user engagement.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Created
              precise Express APIs, resulting in increased user interaction and
              conversion rates.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Automated
              testing with Appium, significantly reducing bugs by 70% and
              improving software quality.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Focused on delivering seamless and intuitive user experiences,
              ensuring high user satisfaction.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
