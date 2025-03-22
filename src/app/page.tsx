import Head from "next/head";
import Image from "next/image";
import ParticleBackground from "./components/ParticleBackground"; // Adjust path if necessary

export default function Home() {
  return (
    <>
      <Head>
        <title>Goshanraj Govindaraj</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/mylogo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <section id="home" className="hero-section">
        <ParticleBackground />
        <div className="hero-content">
          <div className="profile-pic">
            <Image
              src="/images/portfoliophoto.png"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold">Goshanraj Govindaraj</h1>
          <h2 className="mt-2 text-xl">
            Software Engineer<span className="blinking-cursor">|</span>
          </h2>
          <div className="social-icons mt-4">
            <a
              href="https://github.com/goshanraj-g"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
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
          </div>
        </div>
      </section>
    </>
  );
}
