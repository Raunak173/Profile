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
          <p className="mt-6 text-xl font-semibold text-center">Foodzo</p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            This website is basically a social media for all the foodies. User
            can register themselves on the app and then login to view and add
            their food pics. They can like each other's pics and comment on each
            other's post. Thanks too diqus comment section library. Users also
            have the liberty to view their dashboard. Dashboard enables them to
            edit or delete their pics. The app also consists of pagination too.
            It is a full too fun social media app for all the foodies there. So
            what are you waiting for, register on the app now!! Tech stacks used
            are React JS, Node JS, Express, MongoDB (MERN).
          </p>
          <a
            href="https://fooodzo.netlify.app/"
            className="text-center mt-4 text-blue-600"
          >
            Live Link
          </a>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#90e0ef" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">I-notez</p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            A basic note application made using MERN Stack. Tech stacks used are
            React MongoDB, Express, Node JS, Tailwind CSS, Material UI, React
            Router Dom, bcrypt js and jswebtoken. IDE used is VS Code. Project
            is also live on Heroku. While working on this, I learned how to work
            with MERN Stack.
          </p>
          <a
            href="https://i-notez.herokuapp.com/"
            className="text-center mt-4 text-blue-600"
          >
            Live Link
          </a>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#fdffb6" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Dictionary App
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            Created a Dictionary Web App to know the meaning and pronunciation
            of the searched word. Tech Stacks used over here are React JS,
            Material UI,VS Code as the text editor, and dictionary API to fetch
            data. Also created a toggle for switching between light and dark
            mode. Project is also Iive on Netlify.
          </p>
          <a
            href="https://react-dictionary-raunak.netlify.app/"
            className="text-center mt-4 text-blue-600"
          >
            Live Link
          </a>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#ffb3c1" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">
            Crypto Hunter
          </p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            This is a Crypto currency info app. I created this web app using
            React. I used Material UI 4 for styling and Coin Gecko API for
            information. Used Chart js 2 for Chart projections and Alice
            Carousel for Carousel. Also deployed on Netlify. Used VS Code as
            text editor.
          </p>
          <a
            href="https://raunak-cryptozo.netlify.app/"
            className="text-center mt-4 text-blue-600"
          >
            Live Link
          </a>
        </div>
        <div
          className="flex flex-col items-center w-64 h-72 p-10 m-6 overflow-auto shadow-2xl rounded-xl sm:w-72"
          style={{ backgroundColor: "#e0aaff" }}
        >
          <p className="mt-6 text-xl font-semibold text-center">Chat App</p>
          <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
            A basic chat application made using React, Express, Node JS and
            Socket.io. IDE used is VS Code. Project is also live on Netlify and
            backend is deployed on Heroku. While working on this, I learned how
            to work with Socket connections.
          </p>
          <a
            href="https://chat-app-raunak.netlify.app"
            className="text-center mt-4 text-blue-600"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
}
