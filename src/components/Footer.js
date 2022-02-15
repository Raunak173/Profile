import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex align-center justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/Raunak173"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.instagram.com/raunak_agarwal_/"
        >
          <FaInstagram />
          <span class="sr-only">YouTube</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/raunakagarwal173/"
        >
          <SiLinkedin />
          <span class="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://mailto:raunakagarwal173@gmail.com"
        >
          <FaRegEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
      <div className="flex align-center justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="img" aria-label="heart">
            ❤️
          </span>
          by
          <a
            className="text-blue-500 hover:underline"
            href="mailto:raunakagarwal173@gmail.com"
          >
            {" "}
            Raunak Agarwal
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
