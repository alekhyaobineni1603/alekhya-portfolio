import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Menu, X,
  Code2, Database, Globe, Cpu, ExternalLink, Download, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Alekhya Obineni",
  role: "B.Tech CSE Student · Aspiring Software Developer",
  college: "Vignan Foundation for Science, Technology & Research",
  linkedin: "https://www.linkedin.com/in/alekhya-obineni-b437a8325",
  github: "https://github.com/alekhyaobineni1603"
};

const skills = {
  "Programming": ["C", "C++", "Java", "Python"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React"],
  "Databases": ["MySQL", "MongoDB", "DBMS"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks"],
  "Tools": ["Git", "GitHub", "VS Code"]
};

const projects = [
  {
    title: "Emotional-Based Music Recommendation System",
    description: "An emotion-aware music recommendation system built around structured data handling and efficient processing of emotional data.",
    tech: ["Java", "Data Structures", "DBMS"],
    points: [
      "Developed an emotion-based music recommendation system using structured data handling.",
      "Used data structures to efficiently store and process emotional data.",
      "Implemented DBMS as backend and Java for frontend interaction."
    ]
  },
  {
    title: "Review-Based Recommendation System",
    description: "A review-driven recommendation platform that uses user feedback to organize and retrieve recommendation data.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    points: [
      "Designed a review-based recommendation system using user feedback.",
      "Built a responsive frontend using HTML, CSS, and JavaScript.",
      "Used MongoDB as backend for storing and retrieving review data."
    ]
  }
];

function App() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      {rootMargin: "-30% 0px -60% 0px"}
    );
    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [dark]);

  const nav = ["home","about","skills","projects","education","contact"];

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#home" onClick={()=>setOpen(false)}>
            <span className="brand-mark">AO</span>
            <span>Alekhya<span className="dot">.</span></span>
          </a>
          <div className={`nav-links ${open ? "show" : ""}`}>
            {nav.map(item => (
              <a key={item} className={active===item ? "active" : ""} href={`#${item}`} onClick={()=>setOpen(false)}>
                {item[0].toUpperCase()+item.slice(1)}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <a className="nav-cta" href="#contact">Let's Talk <ArrowUpRight size={16}/></a>
            <button className="icon-btn menu-btn" aria-label="Menu" onClick={()=>setOpen(!open)}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR SOFTWARE OPPORTUNITIES</div>
              <h1>Building my path<br/>as a <span>software engineer.</span></h1>
              <p className="hero-text">
                Hi, I'm <strong>Alekhya Obineni</strong> — a B.Tech Computer Science student who enjoys turning ideas into practical software solutions and continuously sharpening my problem-solving skills.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#projects">Explore Projects <ArrowUpRight size={18}/></a>
                <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              </div>
              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
                <span>•</span>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              </div>
            </div>
            <div className="hero-art reveal">
              <div className="orb orb1"/><div className="orb orb2"/>
              <div className="code-card">
                <div className="window-bar"><i/><i/><i/><span>alekhya.dev</span></div>
                <pre><code><span className="pink">const</span> developer = {"{"}
{"\n  "}name: <span className="green">"Alekhya"</span>,
{"\n  "}role: <span className="green">"Software Developer"</span>,
{"\n  "}skills: [<span className="green">"Java"</span>, <span className="green">"Python"</span>,
{"\n          "}<span className="green">"DSA"</span>, <span className="green">"Web"</span>],
{"\n  "}learning: <span className="green">true</span>
{"\n"}{"}"}</code></pre>
                <div className="terminal-line"><span>›</span> building the future<span className="cursor">_</span></div>
              </div>
              <div className="float-chip chip1"><Code2 size={16}/> DSA & Problem Solving</div>
              <div className="float-chip chip2"><Database size={16}/> DBMS</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><ChevronDown size={18}/> Scroll to explore</a>
        </section>

        <section id="about" className="section">
          <div className="section-head"><span>01 / ABOUT</span><h2>Curious mind.<br/><em>Builder's mindset.</em></h2></div>
          <div className="about-grid">
            <div className="about-lead">
              <p>I’m a <strong>B.Tech Computer Science Engineering student</strong> at Vignan Foundation for Science, Technology & Research, focused on building a strong foundation for a career in software development.</p>
            </div>
            <div className="about-copy">
              <p>I like learning how systems work, solving programming problems, and creating projects that connect concepts with real-world use cases.</p>
              <p>My current focus is strengthening Data Structures & Algorithms, full-stack development, databases, and core Computer Science concepts.</p>
              <div className="mini-stats">
                <div><b>02</b><span>Projects</span></div>
                <div><b>05+</b><span>Skill Areas</span></div>
                <div><b>∞</b><span>Things to learn</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="section-head"><span>02 / SKILLS</span><h2>Tools I use to<br/><em>build things.</em></h2></div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items], idx) => (
              <div className="skill-card" key={group}>
                <div className="skill-icon">{idx===0?<Code2/>:idx===1?<Globe/>:idx===2?<Database/>:<Cpu/>}</div>
                <h3>{group}</h3>
                <div className="tags">{items.map(s=><span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head projects-head"><span>03 / PROJECTS</span><h2>Ideas turned into<br/><em>working projects.</em></h2></div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i+1}</div>
                <div className="project-main">
                  <div className="project-top"><span>FEATURED PROJECT</span><ExternalLink size={18}/></div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul>
                  <div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section alt">
          <div className="section-head"><span>04 / EDUCATION</span><h2>Where I'm<br/><em>learning & growing.</em></h2></div>
          <div className="education-card">
            <div className="edu-icon">V</div>
            <div><span className="muted">B.TECH · COMPUTER SCIENCE ENGINEERING</span><h3>Vignan Foundation for Science, Technology & Research</h3><p>Building a strong foundation in Computer Science, programming, software development and problem solving.</p></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div><span className="eyebrow">05 / CONTACT</span><h2>Let's build something<br/><em>worth talking about.</em></h2><p>I'm open to learning opportunities, software projects, collaborations and conversations about technology.</p></div>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span>LinkedIn</span><ArrowUpRight/></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github/><span>GitHub</span><ArrowUpRight/></a>
              <a href="mailto:alekhyaobineni1603@gmail.com"><Mail/><span>Email me</span><ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer><div><span className="brand-mark small">AO</span> Alekhya Obineni</div><span>© 2026 · Built with curiosity & code.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}
createRoot(document.getElementById("root")).render(<App />);