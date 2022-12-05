import React, { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div
      className="min-h-screen  "
      style={{
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
      }}
    >
      <div data-aos="fade-down" data-aos-duration="800" className="py-10">
        <Card />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
        className="px-3 sm:px-5"
      >
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
export default App;
