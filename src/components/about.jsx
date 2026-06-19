function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          About Me
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">

            I am a Computer Science Engineering student passionate about
            software development, web technologies, and artificial intelligence.

            I completed my internship at Miracle Software Systems where I
            worked with Python, SQL, REST APIs, Git, and modern software
            development practices.

          </p>

          <p className="text-lg leading-relaxed mt-6 text-slate-600 dark:text-slate-300">

            My goal is to build scalable applications, solve real-world
            problems through technology, and continuously improve my
            full-stack development skills.

          </p>

        </div>

      </div>
    </section>
  );
}

export default About;