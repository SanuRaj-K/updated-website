"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const featured = portfolioData.projects.filter((project) => project.featured);
  const archive = portfolioData.projects.filter((project) => !project.featured);

  return (
    <section id="work" className="bg-[#151512] py-24 text-[#f2f0e9] md:py-36">
      <div className="shell">
        <div className="mb-20 grid gap-8 lg:grid-cols-[.36fr_1fr]">
          <p className="eyebrow text-[#d8ff3e]">Selected work / 01—03</p>
          <h2 className="display max-w-4xl text-[clamp(3.8rem,8vw,8rem)] font-semibold">Products with<br /><span className="font-normal italic">a purpose.</span></h2>
        </div>
        <div className="space-y-28 md:space-y-40">
          {featured.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <a href={project.live} target="_blank" rel="noreferrer" className={`group relative block aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#292925] project-media ${index % 2 ? "lg:order-2" : ""}`}>
                {"image" in project && <Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" />}
                <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#d8ff3e] text-[#151512] transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span>
              </a>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <p className="eyebrow mb-5 text-[#d8ff3e]">{`0${index + 1}`} / {project.eyebrow}</p>
                <h3 className="display text-[clamp(3.4rem,6vw,6.5rem)] font-semibold">{project.title}</h3>
                <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#bab8b0]">{project.summary}</p>
                {"contribution" in project && <p className="mt-5 max-w-xl leading-relaxed text-[#807f79]">{project.contribution}</p>}
                <div className="mt-8 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#bab8b0]">{tech}</span>)}</div>
                <a href={project.live} target="_blank" rel="noreferrer" className="link-line mt-9 inline-flex items-center gap-2 text-sm font-semibold">View live product <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-32 border-t border-white/20 pt-8 md:mt-44">
          <div className="mb-8 flex items-end justify-between"><div><p className="eyebrow mb-3 text-[#d8ff3e]">Archive</p><h3 className="text-3xl font-semibold tracking-[-.05em] md:text-5xl">More things I’ve built</h3></div><Plus className="hidden md:block" /></div>
          {archive.map((project, index) => <a key={project.title} href={project.live} target="_blank" rel="noreferrer" className="group grid gap-3 border-t border-white/15 py-6 transition-colors hover:text-[#d8ff3e] md:grid-cols-[50px_.7fr_1fr_auto] md:items-center"><span className="eyebrow opacity-40">{String(index + 4).padStart(2, "0")}</span><strong className="text-xl tracking-[-.03em] md:text-2xl">{project.title}</strong><span className="text-sm text-[#807f79] group-hover:text-[#d8ff3e]">{project.eyebrow}</span><ArrowUpRight size={18} /></a>)}
        </div>
      </div>
    </section>
  );
}
