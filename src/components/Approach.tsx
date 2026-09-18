const steps = [
  {
    title: "Understand",
    text: "The problem, the people, the requirements, and the constraints.",
  },
  {
    title: "Design",
    text: "The architecture, the user journey, and the structure behind the interface.",
  },
  {
    title: "Build",
    text: "Maintainable frontend and backend systems that work as one product.",
  },
  {
    title: "Integrate",
    text: "APIs, data, cloud services, payments, and AI where the product needs them.",
  },
  {
    title: "Ship",
    text: "Deploy, monitor, optimize, and keep improving with every iteration.",
  },
];
export default function Approach() {
  return (
    <section className="section section-tinted">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / HOW I WORK</p>
            <h2>
              More than code.
              <br />
              <span className="muted">The whole product.</span>
            </h2>
          </div>
          <p className="muted section-intro">
            Good engineering starts before the first commit and continues after
            the deploy.
          </p>
        </div>
        <div className="approach-grid">
          {steps.map((step, i) => (
            <article key={step.title}>
              <span className="step-number mono">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p className="muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
