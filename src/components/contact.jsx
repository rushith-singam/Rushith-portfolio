import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 dark:text-white">
          Contact
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
          {personalInfo.email}
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
          {personalInfo.phone}
        </p>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-semibold"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;