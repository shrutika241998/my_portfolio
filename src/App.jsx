import "./App.css";
import "./App.css";
import "./ReactBit/Orb.css"
import Project from "./Components/ListOfProject.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import { Suspense, lazy } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Orb from "./ReactBit/Orb.js";

function App() {
  return (
    <div className="app">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Orb
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div className="content">
        <header className="App-header">
          <nav className="navBar">
            <div className="onfocus">
              <Link to="/">Home</Link>
            </div>
            <div className="onfocus">
              <Link to="/project">Projects</Link>
            </div>
            <div className="onfocus">
              <Link to="/about">About</Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
        </Routes>

        <footer className="App-footer">
          <div className="bottomNavBar">
            <div>
              <a href="https://github.com/shrutika241998">
                <img
                  src="/icons8-github-48.png"
                  width="50"
                  height="50"
                  className="footer_github"
                  alt="github-image"
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/shrutikasarvade24/">
                <img
                  src="/icons8-linked-in-50.png"
                  width="50"
                  height="50"
                  className="footer_linkedin"
                  alt="linkedin-image"
                />
              </a>
            </div>
            <div>
              <a href="/Resume_Shrutika_3Yrs_exp.pdf" download>
                <img
                  src="/icons8-resume-50.png"
                  width="50"
                  height="50"
                  className="footer_resume"
                  alt="resume"
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/art_byshruu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img
                  src="/icons8-instagram-logo-50.png"
                  width="50"
                  height="50"
                  className="footer_insta"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
