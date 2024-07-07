import React from "react";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="projects">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
        Some of my Projects :)
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#c2e7d9" }}
        >
          <p
            className="mt-6 text-xl font-semibold text-center hover:underline"
            onClick={() =>
              window.open("https://github.com/Raunak173/ecommerce-express")
            }
          >
            Ecommerce Express
          </p>

          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong>Developed
              backend for an ecommerce application using NodeJS, Express,
              Prisma, and MySQL.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Implemented
              efficient queries and caching, reducing response time by 40%.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>Deployed the
              backend on Amazon EC2, lowering hosting costs by 30%.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Ensured robust performance and scalability to handle increased
              user traffic.
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
              window.open("https://github.com/Raunak173/AiModelize")
            }
          >
            AiModelize
          </p>

          <p className="text-base text-left text-gray-500 leading-relaxed mt-4 justify-center">
            <p>
              <strong className="text-black font-bold">⦿ </strong>Created
              AiModelize, a web app for cataloging AI models, using React and
              Redux.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong> Integrated
              Firebase for backend services and Google Analytics for user
              insights.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>Enabled users
              to explore, create, and save AI models with training support for
              various frameworks.
            </p>
            <p>
              <strong className="text-black font-bold">⦿ </strong>
              Highlighted top-performing models based on viewership and
              engagement, promoting user interaction.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
