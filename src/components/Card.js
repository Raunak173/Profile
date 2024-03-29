import profile from "../images/profile.jpg";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiLinkedin } from "react-icons/si";

function Card() {
  return (
    <div className="w-full">
      <div
        className="flex flex-col justify-center max-w-xs mx-auto shadow-2xl rounded-xl p-5"
        style={{
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Raunak Agarwal
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full Stack Web/App Developer / Software Engineer
          </p>
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
              <span class="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/raunakagarwal173/"
            >
              <SiLinkedin />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
              href="mailto:raunakagarwal173@gmail.com"
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-500 hover:bg-orange-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://leetcode.com/raunak173/"
            >
              <SiLeetcode />
              <span class="sr-only">LeetCode</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-900 hover:bg-green-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://auth.geeksforgeeks.org/user/raunakagarwal173/practice/"
            >
              <SiGeeksforgeeks />
              <span class="sr-only">GeeksforGeeks</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
