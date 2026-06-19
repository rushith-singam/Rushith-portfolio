import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 px-3 py-2 rounded-full text-sm font-medium"
                  >
                    {item}
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

export default Skills;