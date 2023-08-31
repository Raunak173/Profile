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
          I'm a Final Year Mechanical Engineering Student at HBTU Kanpur,
          who had realised that my passion and interest lies in computers and
          development stuff. I'm currently working as a Frontend Developer
          Intern at DoEasily, before that I worked as SDE Intern at Medbikri, frontend intern at Truebroker, a Mobile App Developer
          Intern at Renderbit Technologies and as a Full Stack Developer Intern
          at Blokminers. I am Web Development Head of TSC HBTU, technicsl club of my college where i worked in
          making my college's only technical fest website, Technika. I'm more
          into development. I also like to practice on Leetcode and GFG too.
          Solved more than 400 questions on Leetcode and earned more than 1000
          points on GFG. Also, recently our team MapAuth had won the Smart India
          Hackathon 2022.
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
