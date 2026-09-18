import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
export default function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="shell experience-grid">
        <div>
          <p className="eyebrow">02 / THE JOURNEY</p>
          <h2>
            Learning by
            <br />
            <span className="muted">building.</span>
          </h2>
          <p className="muted section-intro">
            From frontend foundations to owning products across the stack.
          </p>
          <span className="experience-mark" aria-hidden="true">
            <ArrowUpRight size={58} strokeWidth={1} />
          </span>
        </div>
        <div className="timeline">
          {portfolioData.experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`experience-item ${index === 0 ? "current" : ""}`}
            >
              <div className="experience-top">
                <span className="mono">{item.period}</span>
                {index === 0 && (
                  <span className="current-tag">CURRENT ROLE</span>
                )}
              </div>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p className="muted">
                {index === 0
                  ? "Building customer-facing products across frontend, APIs, data, and cloud services. Turning product requirements into connected workflows and shipping features from interface to deployment."
                  : item.description}
              </p>
            </article>
          ))}
          <details className="education">
            <summary>
              Education <span>+</span>
            </summary>
            {portfolioData.education.map((item) => (
              <div key={item.degree}>
                <h3>{item.degree}</h3>
                <p className="muted">{item.institution}</p>
                <p className="mono">{item.year}</p>
              </div>
            ))}
          </details>
        </div>
      </div>
    </section>
  );
}
