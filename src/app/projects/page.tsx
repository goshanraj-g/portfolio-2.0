import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Goshanraj Govindaraj</title>
        <meta charSet="UTF-8" />
      </Head>

      <section className="projects-section px-6 py-16">
        <div className="projects-container max-w-6xl mx-auto">
          <h1 className="section-title text-center text-3xl md:text-4xl font-bold mb-12">
            Building Tomorrow&apos;s Solutions
            <span className="blinking-cursor">|</span>
          </h1>

          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1: Portfolio Website */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  Portfolio Website
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  A responsive personal portfolio website showcasing projects,
                  skills, and experience with theme switching functionality.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/goshanrajg.github.io"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2: GitHub Profile and Stats Viewer */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  GitHub Profile and Stats Viewer
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  A responsive website where you can view profiles and check
                  stats using the GitHub API.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/github-profile-viewer"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3: Voyager */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  Voyager
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  An SMS based healthcare bot enabling critical medical access
                  for remote populations.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["Flask", "Python"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/Voyager"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a
                    href="https://www.canva.com/design/DAGcRf1SqvU/7-M74ZJOmmx04Ee8_f4e-g/watch?utm_content=DAGcRf1SqvU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c1ca88939"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4: Toronto House Price Predictor */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  Toronto House Price Predictor
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  A machine learning model which can predict house prices in the
                  GTA based on property details.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["Python", "pandas", "NumPy", "scikit-learn"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/Toronto-House-Price-Predictor"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5: Call-ASSIST */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  Call-ASSIST
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  A real-time social engineering detection system utilizing
                  OpenAI&apos;s API to analyze communication patterns and
                  identify social engineering.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["Node.js", "TypeScript", "HTML", "CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/SocialEngineeringCo-Pilot/tree/main/MECSocialEngineeringCoPilot"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a
                    href="https://www.canva.com/design/DAGWGN4tSwI/G_fmGrhIcxO9ucaQeCd8xw/view?utm_content=DAGWGN4tSwI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h17670a6a15"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6: duckIt */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">duckIt</h3>
                <p className="project-description text-gray-400 mb-4">
                  A technology collective consisting of a team of 4,
                  specializing in software development for clients.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/duckIt"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 7: CarView */}
            <div className="project-card bg-gray-800 border border-gray-700 p-6 rounded-lg transition hover:-translate-y-1">
              <div className="project-content flex flex-col">
                <h3 className="project-title text-xl font-bold mb-2">
                  CarView
                </h3>
                <p className="project-description text-gray-400 mb-4">
                  An automotive presentation featuring adaptive visual layouts,
                  responsive across 320px to 4k viewports using CSS grids and
                  Flexbox architecture.
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a
                    href="https://github.com/goshanraj-g/weblayoutassignment"
                    className="project-link flex items-center gap-1 bg-gray-900 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Icons */}
      <div className="social-icons flex justify-center mt-12 text-2xl">
        <a
          href="https://github.com/goshanraj-g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-gray-400 hover:text-white transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/goshanrajgovindaraj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin text-gray-400 hover:text-white transition" />
        </a>
        <a
          href="mailto:goshanraj.g@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope text-gray-400 hover:text-white transition" />
        </a>
      </div>
    </>
  );
}
