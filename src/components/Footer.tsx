import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return <footer className="bg-[#151512] py-7 text-[#f2f0e9]"><div className="shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><p className="eyebrow">© {new Date().getFullYear()} {portfolioData.name}</p><div className="flex gap-6"><a href={portfolioData.social.github} target="_blank" rel="noreferrer" className="eyebrow opacity-60 hover:opacity-100">GitHub ↗</a><a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="eyebrow opacity-60 hover:opacity-100">LinkedIn ↗</a><a href="#" className="eyebrow opacity-60 hover:opacity-100">Back to top ↑</a></div></div></footer>;
}
