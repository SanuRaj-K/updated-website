"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  X,
  MessageCircle,
  Shuffle,
  Check,
  Plus,
  Link2,
  Store,
  PackageCheck,
  CreditCard,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import {
  featuredProjects,
  type FeaturedProject,
} from "@/data/featured-projects";

function PickerPreview() {
  return (
    <div className="picker-preview">
      <div className="picker-window">
        <div className="picker-window-top">
          <span className="picker-icon">
            <MessageCircle size={19} />
          </span>
          <strong>Comment Picker</strong>
          <span className="preview-pill">CONCEPT PREVIEW</span>
        </div>
        <p className="picker-kicker">LESS SCROLLING. MORE CELEBRATING.</p>
        <h4>
          One giveaway.
          <br />
          One lucky winner.
        </h4>
        <div className="sample-comments">
          <div>
            <span className="avatar">A</span>
            <span>
              Count me in! <i>♡</i>
            </span>
            <Check size={13} />
          </div>
          <div>
            <span className="avatar">J</span>
            <span>This is the one ✨</span>
            <Check size={13} />
          </div>
          <div>
            <span className="avatar">M</span>
            <span>Fingers crossed!</span>
            <Check size={13} />
          </div>
        </div>
        <div className="picker-demo-button">
          <Shuffle size={14} /> Pick a winner <ArrowRight size={14} />
        </div>
        <span className="picker-footnote">
          Illustrative interface · not a product screenshot
        </span>
      </div>
    </div>
  );
}

function LinkHQPreview() {
  return (
    <div className="linkhq-preview" aria-hidden="true">
      <span className="mono">LINKHQ.CO / PRODUCT OVERVIEW</span>
      <div className="linkhq-wordmark"><Link2 size={32} /> LinkHQ</div>
      <p>A home for your links.<br />A storefront for your ideas.</p>
      <div className="linkhq-capabilities">
        <span><Store size={17} /> Storefronts</span>
        <span><PackageCheck size={17} /> Orders</span>
        <span><CreditCard size={17} /> Payments</span>
      </div>
      <span className="mono">CREATOR COMMERCE · COMPANY PROJECT</span>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<FeaturedProject>(
    featuredProjects[0],
  );
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const open = (project: FeaturedProject, button: HTMLButtonElement) => {
    setSelected(project);
    trigger.current = button;
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const onClose = () => {
    trigger.current?.focus();
  };
  return (
    <section id="projects" className="section shell">
      <span id="work" className="anchor-alias" />
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>
            Ideas made <span className="serif accent">real.</span>
          </h2>
        </div>
        <p className="muted section-intro">
          Useful products. Real problems.
          <br />A little of what I’ve been building.
        </p>
      </div>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <article
            className={`project-card ${project.theme}`}
            key={project.title}
          >
            <button
              className="project-preview"
              aria-label={`Explore ${project.title} project details`}
              onClick={(event) => open(project, event.currentTarget)}
            >
              {project.image ? (
                <>
                  <div className="browser-chrome">
                    <span />
                    <span />
                    <span />
                    <small>{new URL(project.live).hostname}</small>
                  </div>
                  <div className="screenshot-wrap">
                    <Image
                      src={project.image}
                      alt={`${project.title} application screenshot`}
                      fill
                      sizes="(max-width: 760px) 92vw, 44vw"
                      className="project-image"
                    />
                  </div>
                </>
              ) : project.theme === "linkhq" ? (
                <LinkHQPreview />
              ) : (
                <PickerPreview />
              )}
              <span className="preview-open">
                <ArrowUpRight size={18} />
              </span>
            </button>
            <div className="project-copy">
              <div className="project-eyebrow mono">
                <span>{project.category}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>
                <button onClick={(event) => open(project, event.currentTarget)}>
                  {project.title}
                </button>
              </h3>
              <p className="muted">{project.summary}</p>
              <div className="tags">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span>+{project.tech.length - 4}</span>
                )}
                {!project.tech.length && project.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <button onClick={(event) => open(project, event.currentTarget)}>
                  Explore project <ArrowRight size={15} />
                </button>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo${project.placeholder ? " (placeholder link)" : ""}`}
                >
                  Live Demo <ArrowUpRight size={15} />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub${project.placeholder ? " (placeholder link)" : ""}`}
                  >
                    <Github size={15} /> GitHub
                  </a>
                )}
              </div>
              {project.placeholder && (
                <p className="placeholder-note">
                  Demo & GitHub links are placeholders.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      <details className="project-archive">
        <summary>
          <span>
            <span className="mono">THE EXPLORATIONS CONTINUE</span>
            <strong>
              More things I’ve built <span className="archive-count">06</span>
            </strong>
          </span>
          <Plus size={22} />
        </summary>
        <div className="archive-grid">
          {portfolioData.projects
            .filter((project) => !project.featured)
            .map((project) => (
              <a
                key={project.title}
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.summary}</p>
                  <span className="mono">{project.tech.join(" · ")}</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
            ))}
        </div>
      </details>
      <dialog
        ref={dialog}
        className="project-dialog"
        onClose={onClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-labelledby="project-dialog-title"
      >
        <div className="dialog-content">
          <button
            autoFocus
            onClick={close}
            className="dialog-close"
            aria-label="Close project details"
          >
            <X size={22} />
          </button>
          <p className="eyebrow">{selected.category}</p>
          <h2 id="project-dialog-title">{selected.title}</h2>
          <p className="large-copy">{selected.summary}</p>
          {selected.image && (
            <div className="dialog-image">
              <Image
                src={selected.image}
                alt={`${selected.title} full application preview`}
                width={1440}
                height={1000}
                sizes="(max-width: 760px) 90vw, 720px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          )}
          <h3>The product</h3>
          <p className="muted">{selected.context}</p>
          <h3>Key features & engineering</h3>
          <ul>
            {selected.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {selected.tech.length > 0 && (
            <>
              <h3>Built with</h3>
              <div className="tags">
                {selected.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </>
          )}
          <div className="button-row">
            <a
              className="button primary"
              href={selected.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>
            {selected.github && (
              <a
                className="button secondary"
                href={selected.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>
          {selected.placeholder && (
            <p className="placeholder-note">
              Links are placeholders. The card shows an illustrative interface;
              implementation details will be added when available.
            </p>
          )}
        </div>
      </dialog>
    </section>
  );
}
