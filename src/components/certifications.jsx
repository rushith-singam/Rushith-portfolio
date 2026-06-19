function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            NPTEL Java Programming
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            Web Development - AJJ Hub
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;