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
          I am Raunak Agarwal, a dedicated software developer with a B.Tech in
          Mechanical Engineering from Harcourt Butler Technical University. I
          have experience in various technical roles, including my current
          position as a Frontend Developer Intern at SigIq, where I contributed
          to the AI-powered PadhAi app. My previous roles include developing
          SDKs at Nudgenow Technologies, creating a fintech app at DoEasily, and
          building a mobile app at Medbikri. I am proficient in React, Node.js,
          Express, React Native, and other technologies. Notable projects
          include an ecommerce backend using Express.js, Prisma, and MySQL, and
          AiModelize, a web app for AI models. My achievements include winning
          the Smart India Hackathon 2022. I am skilled in JavaScript, Java, SQL,
          and various development tools, making me a versatile and effective
          developer.
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
          As a seasoned software developer with extensive experience in frontend
          development and software engineering, I bring a proven track record of
          contributing to high-impact projects. My experience includes
          developing the PadhAi app, the world’s only AI app to top the UPSC
          exam, and creating a live website with over 10,000 footfalls. At
          Nudgenow Technologies, I developed SDKs that boosted user engagement
          by 30% and integrated them into numerous high-profile apps. At
          DoEasily, I created a fintech app for the gold and silver market,
          enhancing performance with Java and Spring Boot. Additionally, I
          developed a React Native app for Medbikri, serving over 100,000 users
          and improving software quality through automated testing. With my
          expertise in React Native, React, Redux, JavaScript, Node, and
          Express.js, I can contribute to your company by developing robust and
          scalable applications, improving user engagement, and ensuring
          high-quality software delivery. My ability to work on diverse projects
          and deliver impactful results makes me a valuable asset to any team. I
          am eager to leverage my skills and experience to help your company
          achieve its goals and drive innovation.
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
