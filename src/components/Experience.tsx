"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b hairline py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-[.36fr_1fr]">
        <div><p className="eyebrow">Experience / timeline</p><h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] md:text-6xl">Learning by<br />shipping.</h2></div>
        <div>
          {portfolioData.experience.map((item, index) => <motion.article key={`${item.company}-${item.period}`} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-3 border-t hairline py-7 md:grid-cols-[55px_1fr_.7fr]"><span className="eyebrow opacity-40">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-semibold tracking-[-.03em]">{item.role}</h3><p className="mt-1 text-sm text-[#716f68]">{item.company}</p></div><div><p className="eyebrow mb-3">{item.period}</p><p className="text-sm leading-relaxed text-[#716f68]">{item.description}</p></div></motion.article>)}
          <div className="mt-16"><p className="eyebrow mb-6">Education</p>{portfolioData.education.map((item) => <div key={item.degree} className="grid gap-2 border-t hairline py-5 md:grid-cols-[1fr_.5fr]"><div><h3 className="font-semibold">{item.degree}</h3><p className="mt-1 text-sm text-[#716f68]">{item.institution}</p></div><span className="eyebrow md:text-right">{item.year}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
