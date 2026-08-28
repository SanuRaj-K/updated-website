import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 text-center">
      <p className="text-slate-600 text-sm">
        Designed &amp; Built by{" "}
        <span className="text-slate-400">{portfolioData.name}</span>
        {" · "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
