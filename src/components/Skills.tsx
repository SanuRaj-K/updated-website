import { Braces, Server, Database, Cloud, Sparkles } from "lucide-react";
const groups = [
  {
    title: "Frontend",
    icon: Braces,
    tools: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit",
      "Tanstack Query",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    tools: ["Python", "FastAPI", "Node.js", "ExpressJS", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    tools: ["MongoDB", "Firebase", "Supabase", "Azure Cosmos DB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    tools: ["Azure", "Docker", "Vercel","Render", "AWS", "CI/CD"],
  },
  {
    title: "AI",
    icon: Sparkles,
    tools: ["Azure AI", "AI integrations", "Agno", "AI Tools"],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / THE TOOLKIT</p>
          <h2>
            The right tools.
            <br />
            <span className="muted">For the right problem.</span>
          </h2>
        </div>
        <p className="muted section-intro">
          A connected stack for building the interface, the infrastructure, and
          everything in between.
        </p>
      </div>
      <div className="skills-grid">
        {groups.map(({ title, icon: Icon, tools }, i) => (
          <article className="skill-card" key={title}>
            <div className="skill-top">
              <Icon size={21} strokeWidth={1.5} />
              <span className="mono">0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <div className="tags">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
