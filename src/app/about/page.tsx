import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Goshanraj Govindaraj</title>
        <meta charSet="UTF-8" />
      </Head>

      <section className="about-section px-6 py-16 text-center">
        <div className="centered-heading mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Learn More About Me
            <span className="blinking-cursor">|</span>
          </h1>
        </div>

        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* McMaster Card */}
          <div className="about-card bg-gray-800 border border-gray-700 p-6 rounded-lg hover:-translate-y-1 transition">
            <div className="card-content flex flex-col items-center">
              <Image
                src="/images/mcmaster.png"
                alt="McMaster"
                width={60}
                height={60}
              />
              <h3 className="text-blue-400 mt-4">Computer Science</h3>
              <p className="text-gray-400">McMaster University</p>
              <div className="tech-stack flex flex-wrap gap-2 mt-4">
                {[
                  "JavaScript",
                  "React.js",
                  "Node.js",
                  "SQL",
                  "Python",
                  "C",
                  "Linux",
                  "C++",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* GDG Card */}
          <div className="about-card bg-gray-800 border border-gray-700 p-6 rounded-lg hover:-translate-y-1 transition">
            <div className="card-content flex flex-col items-center">
              <Image src="/images/gdg.png" alt="GDG" width={60} height={60} />
              <h3 className="text-blue-400 mt-4">Developer Advocate</h3>
              <p className="text-gray-400">Google Developer Groups</p>
              <div className="tech-stack flex flex-wrap gap-2 mt-4">
                {[
                  "Open-Source Development",
                  "Leadership",
                  "Community Building",
                  "Collaboration",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fitness Card */}
          <div className="about-card bg-gray-800 border border-gray-700 p-6 rounded-lg hover:-translate-y-1 transition">
            <div className="card-content flex flex-col items-center">
              <Image
                src="/images/gym.png"
                alt="Fitness"
                width={60}
                height={60}
              />
              <h3 className="text-blue-400 mt-4">Fitness</h3>
              <div className="tech-stack flex flex-wrap gap-2 mt-4">
                {["Nutrition", "Strength Training"].map((item) => (
                  <span
                    key={item}
                    className="bg-green-600 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Music Enthusiast Card */}
          <div className="about-card bg-gray-800 border border-gray-700 p-6 rounded-lg hover:-translate-y-1 transition">
            <div className="card-content flex flex-col items-center">
              <Image src="/images/cd.png" alt="Music" width={60} height={60} />
              <h3 className="text-blue-400 mt-4">Music Enthusiast</h3>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons flex justify-center gap-6 mt-12 text-2xl">
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
      </section>
    </>
  );
}
