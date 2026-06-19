import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="order-2 md:order-1">

          <p className="text-blue-600 font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl text-slate-600 dark:text-slate-300 mb-4">
            {personalInfo.role}
          </h2>

          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href={personalInfo.resume}
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-400 px-6 py-3 rounded-xl flex items-center gap-2 dark:text-white"
            >
              <FaGithub />
              GitHub
            </a>

          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">

          <img
            src="/profile.jpg"
            alt="Rushith"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;