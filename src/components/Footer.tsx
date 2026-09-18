import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="shell footer">
      <a className="brand" href="#home">
        <span className="brand-mark">
          s<span>.</span>
        </span>
        {portfolioData.name}
      </a>
      <p>
        © {new Date().getFullYear()} · Designed with intent. Built with care.
      </p>
      <a href="#home" className="back-top">
        Back to top <ArrowUp size={14} />
      </a>
    </footer>
  );
}
