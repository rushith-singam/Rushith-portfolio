import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                  Featured
                </span>
              </div>

              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {(project.details || []).map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.tech || []).map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;