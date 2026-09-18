import { Code2, Workflow, Cloud } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="section shell">
      <p className="eyebrow">01 / THE PERSON BEHIND THE PRODUCTS</p>
      <div className="about-grid">
        <h2>
          A product mindset.
          <br />
          <span className="muted">An engineer’s toolkit.</span>
        </h2>
        <div>
          <p className="large-copy">
            I enjoy the whole journey: turning an idea into something people can
            actually use.
          </p>
          <p className="muted">
            I’m SanuRaj, a Product Engineer based in Kerala, India. I work across
            design, development, and deployment, connecting the details of an
            interface with the systems that make it useful.
          </p>
          <p className="muted">
            That might mean crafting a Next.js and React experience with
            TypeScript, building APIs in Python, FastAPI, or Node.js, or
            connecting MongoDB, Firebase, Azure, and AI services into one
            coherent product.
          </p>
        </div>
      </div>
      <div className="capabilities">
        {[
          {
            icon: Code2,
            title: "Interfaces that make sense",
            text: "Clear, responsive experiences built around real workflows, with care for the details.",
          },
          {
            icon: Workflow,
            title: "Systems that work together",
            text: "APIs, databases, and integrations designed as connected parts of the product.",
          },
          {
            icon: Cloud,
            title: "Ownership beyond the code",
            text: "From early decisions to deployment, with maintainability and iteration in mind.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article className="capability" key={title}>
            <Icon size={22} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p className="muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
