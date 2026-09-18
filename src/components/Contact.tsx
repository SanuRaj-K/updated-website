import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData as data } from "@/data/portfolio";
export default function Contact() {
  return (
    <section id="contact" className="section shell">
      <div className="contact-panel">
        <p className="eyebrow">
          <span className="status-dot" /> LET’S MAKE SOMETHING MATTER
        </p>
        <h2>
          Have a product idea
          <br />
          or opportunity?
          <br />
          <span className="accent">Let’s build it.</span>
        </h2>
        <p className="muted">
          A new product, an interesting challenge, or a team doing meaningful
          work.
          <br className="desktop-break" /> I’d love to hear what you have in
          mind.
        </p>
        <a href={`mailto:${data.email}`} className="button primary">
          Let’s start a conversation <ArrowUpRight size={17} />
        </a>
        <a href={`mailto:${data.email}`} className="contact-email">
          {data.email}
        </a>
        <div className="contact-social">
          <a href={data.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href={data.social.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a href={`mailto:${data.email}`}>
            <Mail size={16} /> Email <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
