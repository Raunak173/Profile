import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiGit,
  SiJava,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import {
  SiJavascript,
  SiExpress,
  SiBootstrap,
  SiMongodb,
  SiPostman,
  SiCplusplus,
  SiMaterialui,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import ScrollIntoView from "react-scroll-into-view";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
        Tech stacks I Use :)
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHtml5 color="#DD4B25" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">HTML</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaCss3Alt color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">CSS</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">JavaScript</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">React Native</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNextdotjs color="black" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Next</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Node JS</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiExpress color="black" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-semibold text-center">Express JS</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiBootstrap color="#663E95" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Bootstrap</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPostman color="#FFA88A" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Postman</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiGit color="red" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Git</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCplusplus color="#05427E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">C++</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJava color="#05427E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Java</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMysql color="#05427E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">My Sql</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPrisma color="#05427E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Prisma</p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMaterialui color="#0079F2" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            Material-UI
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb color="green" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">MongoDB</p>
        </div>
      </div>
      <ScrollIntoView selector="#projects">
        <div class="mx-auto p-20">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Skills;
