import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Layers3,
  Braces,
  Database,
  Sparkles,
  Check,
} from "lucide-react";
import { portfolioData as data } from "@/data/portfolio";
export default function Hero() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-top mono">
        <span>ENGINEERING IDEAS INTO REALITY</span>
        <span>
          {data.location} <span className="accent">↗</span>
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span className="status-dot" /> Open to meaningful opportunities
          </p>
          <p className="hero-intro">Hey, I’m Sanu Raj.</p>
          <h1>
            Fullstack
            <br />
            <span>
              Engineer<span className="accent">.</span>
            </span>
          </h1>
          <p className="hero-lead">
            I build modern web applications, AI-powered products, and scalable
            backend systems.
          </p>
          <p className="muted hero-description">
            From the first interface to the last API. Connecting frontend,
            backend, data, cloud, and AI to make ideas work in the real world.
          </p>
          <div className="button-row">
            <a href="#projects" className="button primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="button secondary">
              Let’s Talk <ArrowUpRight size={16} />
            </a>
            <a
              href={data.resume}
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Résumé <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-social">
            <a
              href={data.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${data.email}`} aria-label="Email Sanu">
              <Mail size={18} />
            </a>
            <span className="mono">LET’S MAKE SOMETHING USEFUL.</span>
          </div>
        </div>
        <div
          className="system-visual"
          aria-label="Product development: interfaces, backend, data and AI, from idea to deployment"
        >
          <div className="visual-label mono">
            <span className="status-dot" /> THE BUILDER’S WORKSPACE{" "}
            <span>01 / LIVE</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-core">
            <Layers3 size={30} strokeWidth={1.3} />
            <strong>
              From idea.
              <br />
              To impact.
            </strong>
            <span className="mono">BUILT ACROSS THE STACK</span>
          </div>
          <div className="system-node node-ui">
            <Braces size={17} />
            <div>
              <strong>Thoughtful interfaces</strong>
              <span>Next.js · React · TypeScript</span>
            </div>
            <span className="node-dot" />
          </div>
          <div className="system-node node-api">
            <Database size={17} />
            <div>
              <strong>Dependable systems</strong>
              <span>Python · FastAPI · MongoDB</span>
            </div>
            <span className="node-dot" />
          </div>
          <div className="system-node node-ai">
            <Sparkles size={17} />
            <div>
              <strong>Intelligent experiences</strong>
              <span>Azure AI · Integrations</span>
            </div>
            <span className="node-dot" />
          </div>
          <div className="deploy-note mono">
            <Check size={13} /> IDEA → BUILD → SHIP{" "}
            <span className="accent">●</span>
          </div>
          <span className="visual-coordinate mono">
            PRODUCT MINDSET. ENGINEERING DEPTH.
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">
          THOUGHTFULLY DESIGNED. END-TO-END ENGINEERED.
        </span>
        <a href="#about" className="mono">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
