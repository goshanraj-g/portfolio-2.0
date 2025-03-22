import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Goshanraj Govindaraj</title>
        <meta charSet="UTF-8" />
      </Head>

      <section className="about-section">
        <div className="centered-heading">
          <h1>
            Learn More About Me<span className="blinking-cursor">|</span>
          </h1>
        </div>

        <div className="about-grid">
          {/* McMaster*/}
          <div className="about-card">
            <div className="card-content">
              <Image
                src="/images/mcmaster.png"
                alt="McMaster"
                width={60}
                height={60}
              />
              <h3>Computer Science</h3>
              <p>McMaster University</p>
              <div className="tech-stack">
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>SQL</span>
                <span>Python</span>
                <span>C</span>
                <span>Linux</span>
                <span>C++</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* GDG*/}
          <div className="about-card">
            <div className="card-content">
              <Image src="/images/gdg.png" alt="GDG" width={60} height={60} />
              <h3>Developer Advocate</h3>
              <p>Google Developer Groups</p>
              <div className="tech-stack">
                <span>Open-Source Development</span>
                <span>Leadership</span>
                <span>Community Building</span>
                <span>Collaboration</span>
              </div>
            </div>
          </div>

          {/* Fitness*/}
          <div className="about-card">
            <div className="card-content">
              <Image
                src="/images/gym.png"
                alt="Fitness"
                width={60}
                height={60}
              />
              <h3>Fitness</h3>
              <div className="tech-stack">
                <span>Nutrition</span>
                <span>Strength Training</span>
              </div>
            </div>
          </div>

          {/* Music*/}
          <div className="about-card">
            <div className="card-content">
              <Image src="/images/cd.png" alt="Music" width={60} height={60} />
              <h3>Music Enthusiast</h3>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/goshanraj-g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/goshanrajgovindaraj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:goshanraj.g@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </section>
    </>
  );
}
