import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <div id="about">
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
          I'm Raunak Agarwal, a Final Year Engineering Student at HBTU Kanpur.
          I've got around 2 years of experience working with JavaScript, React,
          and React Native to build websites and mobile apps. I've also created
          APIs using Java, Spring Boot, Node, and Express. I love solving
          problems, and I've tackled over 400 questions on LeetCode and 250+ on
          CodeStudio. This helps me stay sharp and keeps me ready for the
          challenges of software development. I'm not just about coding; I'm
          into making sure things work smoothly. I've got experience in
          automation testing using Cucumber JS, making sure our software is
          reliable. What I bring goes beyond my technical skills. I was honored
          to win the Smart India Hackathon 2022. This experience taught me to
          think on my feet, work well with others, and come up with innovative
          solutions.
        </p>
      </div>

      <ScrollIntoView selector="#tech">
        <div class="mx-auto p-20">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
